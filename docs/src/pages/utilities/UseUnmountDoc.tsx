import { ComponentDoc, PropTable, LiveExample, Section } from '../../components';
import type { PropDefinition } from '../../components';
import { Text } from '@metorial-io/ui';

const useUnmountParams: PropDefinition[] = [
  {
    name: 'callback',
    type: '() => void',
    required: true,
    description: 'Function to call when component unmounts',
  },
];

export const UseUnmountDoc = () => {
  return (
    <ComponentDoc
      title="useUnmount"
      description="A React hook that safely executes a callback when a component unmounts. Includes a 1-second delay to prevent execution during hot module reloading in development, ensuring cleanup logic only runs on actual unmounts."
      importStatement="import { useUnmount } from '@metorial-io/data-hooks';"
      package="data-hooks"
    >
      <Section title="Basic Usage" description="Execute cleanup when component unmounts.">
        <LiveExample
          code={`function TimerComponent() {
  const [count, setCount] = useState(0);
  const [mounted, setMounted] = useState(true);

  useUnmount(() => {
    console.log('Component unmounted after:', count);
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(c => c + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!mounted) return <Text size="3">Component unmounted</Text>;

  return (
    <Flex direction="column" gap="3">
      <Text size="3">Timer: {count}s</Text>
      <Text size="2" style={{ color: '#666' }}>
        Check console when unmounting
      </Text>
      <Button onClick={() => setMounted(false)}>
        Unmount Component
      </Button>
    </Flex>
  );
}`}
        />
      </Section>

      <Section title="Cleanup Resources" description="Clean up subscriptions or connections.">
        <LiveExample
          code={`function WebSocketComponent() {
  const [status, setStatus] = useState('connected');
  const [show, setShow] = useState(true);

  const ConnectionComponent = () => {
    useUnmount(() => {
      console.log('Disconnecting websocket...');
      setStatus('disconnected');
    });

    return (
      <Flex direction="column" gap="2">
        <Text size="2">Status: {status}</Text>
        <Text size="1" style={{ color: '#666' }}>
          WebSocket connection active
        </Text>
      </Flex>
    );
  };

  return (
    <Flex direction="column" gap="3">
      {show && <ConnectionComponent />}
      <Button onClick={() => setShow(!show)}>
        {show ? 'Disconnect' : 'Reconnect'}
      </Button>
      <Text size="2" style={{ color: '#666' }}>
        Current status: {status}
      </Text>
    </Flex>
  );
}`}
        />
      </Section>

      <Section title="Save State on Unmount" description="Persist data when component unmounts.">
        <LiveExample
          code={`function DraftEditor() {
  const [draft, setDraft] = useState('');
  const [saved, setSaved] = useState('');
  const [editing, setEditing] = useState(true);

  const EditorComponent = () => {
    const [text, setText] = useState(draft);

    useUnmount(() => {
      console.log('Saving draft:', text);
      setSaved(text);
    });

    return (
      <Flex direction="column" gap="2">
        <Input
          label="Draft"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type something..."
        />
        <Text size="1" style={{ color: '#666' }}>
          Draft will be saved on unmount
        </Text>
      </Flex>
    );
  };

  return (
    <Flex direction="column" gap="3">
      {editing && <EditorComponent />}
      <Button onClick={() => setEditing(!editing)}>
        {editing ? 'Close Editor' : 'Open Editor'}
      </Button>
      {saved && (
        <Callout>
          Last saved: {saved}
        </Callout>
      )}
    </Flex>
  );
}`}
        />
      </Section>

      <Section title="Analytics Tracking" description="Track component lifecycle for analytics.">
        <LiveExample
          code={`function TrackedComponent() {
  const [showComponent, setShowComponent] = useState(false);
  const [events, setEvents] = useState([]);

  const AnalyticsComponent = () => {
    const mountTime = useRef(Date.now());

    useUnmount(() => {
      const duration = Date.now() - mountTime.current;
      const event = \`Component visible for \${(duration / 1000).toFixed(1)}s\`;
      console.log(event);
      setEvents(prev => [...prev, event]);
    });

    return (
      <Callout variant="info">
        This component is being tracked
      </Callout>
    );
  };

  return (
    <Flex direction="column" gap="3">
      <Button onClick={() => setShowComponent(!showComponent)}>
        {showComponent ? 'Hide' : 'Show'} Tracked Component
      </Button>
      {showComponent && <AnalyticsComponent />}
      <Flex direction="column" gap="1">
        {events.map((event, i) => (
          <Text key={i} size="2" style={{ color: '#666' }}>
            {event}
          </Text>
        ))}
      </Flex>
    </Flex>
  );
}`}
        />
      </Section>

      <Section title="Usage Guidelines">
        <Text size="3" style={{ color: '#666', marginBottom: 16 }}>
          Best practices for using useUnmount:
        </Text>
        <ul style={{ color: '#666', fontSize: '14px', lineHeight: 1.8 }}>
          <li><strong>HMR safe:</strong> 1-second delay prevents false unmounts during hot module reloading</li>
          <li><strong>Cleanup only:</strong> Use for cleanup operations, not for critical state updates</li>
          <li><strong>Ref usage:</strong> Callback is stored in a ref, so it always uses the latest version</li>
          <li><strong>No dependencies:</strong> No dependency array needed - callback is always current</li>
          <li><strong>Side effects:</strong> Perfect for logging, analytics, closing connections</li>
          <li><strong>State updates:</strong> Can update parent state, but component is already unmounted</li>
        </ul>
      </Section>

      <Section title="Parameters">
        <PropTable props={useUnmountParams} />
      </Section>
    </ComponentDoc>
  );
};
