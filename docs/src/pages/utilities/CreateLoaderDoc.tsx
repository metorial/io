import { ComponentDoc, PropTable, LiveExample, Section } from '../../components';
import type { PropDefinition } from '../../components';
import { Text } from '@metorial-io/ui';

const createLoaderParams: PropDefinition[] = [
  {
    name: 'name',
    type: 'string',
    required: true,
    description: 'Unique identifier for the loader',
  },
  {
    name: 'fetch',
    type: '(input: I) => Promise<O>',
    required: true,
    description: 'Async function to fetch data',
  },
  {
    name: 'hash',
    type: '(input: I) => string',
    description: 'Custom hash function for cache keys (default: canonicalize)',
  },
  {
    name: 'mutators',
    type: 'Record<string, (data, ctx) => Promise<any>>',
    required: true,
    description: 'Object of mutator functions for updating data',
  },
  {
    name: 'polling',
    type: '{ interval: number }',
    description: 'Enable automatic polling at specified interval (ms)',
  },
  {
    name: 'onError',
    type: '(error: ServiceError) => void',
    description: 'Callback invoked when fetch errors',
  },
  {
    name: 'onSuccess',
    type: '(output: O) => void',
    description: 'Callback invoked when fetch succeeds',
  },
  {
    name: 'parents',
    type: 'Loader[]',
    description: 'Parent loaders to refetch after mutations',
  },
];

const loaderUseReturn: PropDefinition[] = [
  {
    name: 'input',
    type: 'I | null',
    description: 'The input used for fetching',
  },
  {
    name: 'data',
    type: 'O | null',
    description: 'Fetched data',
  },
  {
    name: 'error',
    type: 'ServiceError | null',
    description: 'Error if fetch failed',
  },
  {
    name: 'isLoading',
    type: 'boolean',
    description: 'Whether data is being fetched',
  },
  {
    name: 'mutators',
    type: 'Record<string, (data: any) => Promise<any>>',
    description: 'Object of mutator functions',
  },
  {
    name: 'refetch',
    type: '() => void',
    description: 'Force refetch data',
  },
];

export const CreateLoaderDoc = () => {
  return (
    <ComponentDoc
      title="createLoader"
      description="A powerful data-fetching factory that creates cached, observable loaders with built-in refetching, mutations, and polling. Similar to React Query or SWR but with a simpler API and built-in mutators."
      importStatement="import { createLoader } from '@metorial-io/data-hooks';"
      package="data-hooks"
    >
      <Section title="Basic Usage" description="Create a simple data loader with caching.">
        <LiveExample
          code={`// Note: In real usage, create loaders at module level
function BasicLoaderExample() {
  const [userId, setUserId] = useState(1);

  // Simulated loader (normally created outside component)
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const loadUser = () => {
    setIsLoading(true);
    setTimeout(() => {
      setData({ id: userId, name: \`User \${userId}\`, email: \`user\${userId}@example.com\` });
      setIsLoading(false);
    }, 500);
  };

  useEffect(() => {
    loadUser();
  }, [userId]);

  return (
    <Flex direction="column" gap="3">
      <Flex gap="2">
        <Button onClick={() => setUserId(1)}>User 1</Button>
        <Button onClick={() => setUserId(2)}>User 2</Button>
        <Button onClick={() => setUserId(3)}>User 3</Button>
      </Flex>

      {isLoading ? (
        <Spinner />
      ) : data ? (
        <Flex direction="column" gap="2">
          <Text size="3" weight="strong">{data.name}</Text>
          <Text size="2">{data.email}</Text>
        </Flex>
      ) : null}
    </Flex>
  );
}`}
        />
      </Section>

      <Section title="Loader Structure" description="How createLoader works under the hood.">
        <Text size="3" style={{ color: '#666', marginBottom: 16 }}>
          Example loader definition (created at module level):
        </Text>
        <pre style={{
          background: '#f8f8f8',
          padding: '20px',
          borderRadius: '8px',
          fontSize: '13px',
          overflow: 'auto',
          lineHeight: 1.6
        }}>
{`const userLoader = createLoader({
  name: 'user',

  fetch: async (userId: number) => {
    const res = await fetch(\`/api/users/\${userId}\`);
    return res.json();
  },

  mutators: {
    update: async (data, ctx) => {
      const res = await fetch(\`/api/users/\${ctx.input}\`, {
        method: 'PUT',
        body: JSON.stringify(data)
      });
      return res.json();
    },

    delete: async (_, ctx) => {
      await fetch(\`/api/users/\${ctx.input}\`, {
        method: 'DELETE'
      });
    }
  }
});

// Usage in component:
function UserProfile() {
  const { data, isLoading, mutators, refetch } = userLoader.use(userId);
  const updateMutation = userLoader.useMutator('update');

  // ...
}`}</pre>
      </Section>

      <Section title="With Mutators" description="Update data with mutations that auto-refetch.">
        <LiveExample
          code={`function MutatorExample() {
  const [items, setItems] = useState([
    { id: 1, name: 'Task 1', done: false },
    { id: 2, name: 'Task 2', done: false }
  ]);
  const [isLoading, setIsLoading] = useState(false);

  const toggleTask = async (id) => {
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 300));
    setItems(items.map(item =>
      item.id === id ? { ...item, done: !item.done } : item
    ));
    setIsLoading(false);
  };

  return (
    <Flex direction="column" gap="3">
      {isLoading && <Spinner size="small" />}
      {items.map(item => (
        <Flex key={item.id} gap="2" align="center">
          <Checkbox
            checked={item.done}
            onCheckedChange={() => toggleTask(item.id)}
          />
          <Text size="2" style={{
            textDecoration: item.done ? 'line-through' : 'none',
            color: item.done ? '#999' : 'inherit'
          }}>
            {item.name}
          </Text>
        </Flex>
      ))}
    </Flex>
  );
}`}
        />
      </Section>

      <Section title="Polling" description="Automatically refetch data at intervals.">
        <LiveExample
          code={`function PollingExample() {
  const [count, setCount] = useState(0);
  const [lastUpdate, setLastUpdate] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(c => c + 1);
      setLastUpdate(new Date().toLocaleTimeString());
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Flex direction="column" gap="3">
      <Callout variant="info">
        Polling every 3 seconds (simulated)
      </Callout>
      <Flex direction="column" gap="2">
        <Text size="3">Update count: {count}</Text>
        <Text size="2" style={{ color: '#666' }}>
          Last update: {lastUpdate}
        </Text>
      </Flex>
    </Flex>
  );
}`}
        />
      </Section>

      <Section title="Parent-Child Relationships" description="Cascade refetches to parent loaders.">
        <Text size="3" style={{ color: '#666', marginBottom: 16 }}>
          When you have related data that needs to stay in sync:
        </Text>
        <pre style={{
          background: '#f8f8f8',
          padding: '20px',
          borderRadius: '8px',
          fontSize: '13px',
          overflow: 'auto',
          lineHeight: 1.6
        }}>
{`// Parent loader - list of all users
const usersLoader = createLoader({
  name: 'users',
  fetch: async () => {
    const res = await fetch('/api/users');
    return res.json();
  },
  mutators: {}
});

// Child loader - single user detail
const userLoader = createLoader({
  name: 'user',
  fetch: async (userId) => {
    const res = await fetch(\`/api/users/\${userId}\`);
    return res.json();
  },
  mutators: {
    update: async (data, ctx) => {
      const res = await fetch(\`/api/users/\${ctx.input}\`, {
        method: 'PUT',
        body: JSON.stringify(data)
      });
      return res.json();
    }
  },
  // When user is updated, refetch the users list
  parents: [usersLoader]
});`}</pre>
      </Section>

      <Section title="Manual Fetch" description="Fetch data imperatively outside React.">
        <LiveExample
          code={`function ManualFetchExample() {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    // Simulate manual fetch
    await new Promise(resolve => setTimeout(resolve, 800));
    setResult({
      data: { id: 1, title: 'Fetched Data' },
      timestamp: new Date().toLocaleTimeString()
    });
    setLoading(false);
  };

  return (
    <Flex direction="column" gap="3">
      <Button onClick={fetchData} isLoading={loading}>
        Fetch Data Manually
      </Button>
      {result && (
        <Flex direction="column" gap="1">
          <Text size="3" weight="strong">{result.data.title}</Text>
          <Text size="2" style={{ color: '#666' }}>
            Fetched at: {result.timestamp}
          </Text>
        </Flex>
      )}
    </Flex>
  );
}`}
        />
      </Section>

      <Section title="Usage Guidelines">
        <Text size="3" style={{ color: '#666', marginBottom: 16 }}>
          Best practices for using createLoader:
        </Text>
        <ul style={{ color: '#666', fontSize: '14px', lineHeight: 1.8 }}>
          <li><strong>Module-level:</strong> Always create loaders at module level, never inside components</li>
          <li><strong>Caching:</strong> Loaders automatically cache by input - same input returns cached data</li>
          <li><strong>10s deduplication:</strong> Requests within 10 seconds are deduplicated</li>
          <li><strong>Mutators refetch:</strong> Mutations automatically trigger refetch after completion</li>
          <li><strong>useMutator hook:</strong> Use loader.useMutator() to get useMutation-wrapped mutators</li>
          <li><strong>Stale data:</strong> Shows stale data while refetching in background</li>
          <li><strong>Manual methods:</strong> Use fetch(), waitFor(), fetchAndReturn() for imperative usage</li>
        </ul>
      </Section>

      <Section title="createLoader Parameters">
        <PropTable props={createLoaderParams} />
      </Section>

      <Section title="loader.use() Returns">
        <PropTable props={loaderUseReturn} />
      </Section>

      <Section title="Additional Methods">
        <Text size="3" style={{ color: '#666', marginBottom: 16 }}>
          Loaders also provide these imperative methods:
        </Text>
        <ul style={{ color: '#666', fontSize: '14px', lineHeight: 1.8 }}>
          <li><strong>loader.fetch(input):</strong> Manually trigger fetch, returns Observable</li>
          <li><strong>loader.waitFor(input):</strong> Returns Promise that resolves when data loads</li>
          <li><strong>loader.fetchAndReturn(input):</strong> Fetch and return data as Promise</li>
          <li><strong>loader.getState(input):</strong> Get current cached state synchronously</li>
          <li><strong>loader.subscribe(input, callback):</strong> Subscribe to state changes</li>
          <li><strong>loader.refetchAll():</strong> Refetch all cached instances</li>
          <li><strong>loader.useMutator(key):</strong> Get useMutation-wrapped mutator hook</li>
          <li><strong>loader.createExternalMutator(fn):</strong> Create mutator that refetches loader</li>
        </ul>
      </Section>
    </ComponentDoc>
  );
};
