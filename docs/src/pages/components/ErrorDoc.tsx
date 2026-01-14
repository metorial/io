import { ComponentDoc, PropTable, LiveExample, Section } from '../../components';
import type { PropDefinition } from '../../components';
import { Text } from '@metorial-io/ui';

const errorProps: PropDefinition[] = [
  {
    name: 'children',
    type: 'React.ReactNode',
    required: true,
    description: 'Error message content',
  },
  {
    name: 'title',
    type: 'string',
    description: 'Error title/heading',
  },
  {
    name: 'icon',
    type: 'React.ReactNode',
    description: 'Custom icon to display',
  },
  {
    name: 'action',
    type: 'React.ReactNode',
    description: 'Action button or element',
  },
];

export const ErrorDoc = () => {
  return (
    <ComponentDoc
      title="Error"
      description="A dedicated error component for displaying error states, failed operations, and empty states. Features a prominent design to clearly communicate issues to users."
      importStatement="import { Error } from '@metorial-io/ui';"
      package="ui"
    >
      <Section title="Basic Usage" description="Simple error message display.">
        <LiveExample
          code={`<Error>
  Something went wrong. Please try again later.
</Error>`}
        />
      </Section>

      <Section title="With Title" description="Add a title for more context.">
        <LiveExample
          code={`<Error title="Failed to load data">
  We couldn't fetch your data. This might be due to a network error or server issue.
</Error>`}
        />
      </Section>

      <Section title="With Action Button" description="Include a button for recovery actions.">
        <LiveExample
          code={`function ErrorWithAction() {
  const handleRetry = () => {
    console.log('Retrying...');
  };

  return (
    <Error
      title="Connection failed"
      action={
        <Button onClick={handleRetry} iconLeft={<RiRefreshLine />}>
          Retry
        </Button>
      }
    >
      Unable to connect to the server. Please check your internet connection and try again.
    </Error>
  );
}`}
        />
      </Section>

      <Section title="With Custom Icon" description="Override the default error icon.">
        <LiveExample
          code={`<Error
  icon={<RiWifiOffLine size={48} />}
  title="No internet connection"
  action={<Button variant="outline">Go offline</Button>}
>
  You're currently offline. Some features may not be available until you reconnect.
</Error>`}
        />
      </Section>

      <Section title="Empty State" description="Use for empty data states.">
        <LiveExample
          code={`<Error
  icon={<RiInboxLine size={48} />}
  title="No messages"
  action={
    <Button iconLeft={<RiAddLine />}>
      Compose message
    </Button>
  }
>
  Your inbox is empty. Start a conversation by composing a new message.
</Error>`}
        />
      </Section>

      <Section title="Not Found" description="404 or not found states.">
        <LiveExample
          code={`<Error
  icon={<RiSearchLine size={48} />}
  title="Page not found"
  action={
    <Button variant="outline" iconLeft={<RiHomeLine />}>
      Go home
    </Button>
  }
>
  The page you're looking for doesn't exist or has been moved.
</Error>`}
        />
      </Section>

      <Section title="Permission Denied" description="Access denied or unauthorized states.">
        <LiveExample
          code={`<Error
  icon={<RiLockLine size={48} />}
  title="Access denied"
  action={<Button>Request access</Button>}
>
  You don't have permission to view this content. Contact your administrator to request access.
</Error>`}
        />
      </Section>

      <Section title="Multiple Actions" description="Provide multiple recovery options.">
        <LiveExample
          code={`<Error
  title="Upload failed"
  action={
    <Flex gap="2">
      <Button iconLeft={<RiRefreshLine />}>
        Try again
      </Button>
      <Button variant="outline" iconLeft={<RiDeleteBinLine />}>
        Cancel
      </Button>
    </Flex>
  }
>
  The file upload failed due to a network error. You can try uploading again or cancel the operation.
</Error>`}
        />
      </Section>

      <Section title="Usage Guidelines">
        <Text size="3" style={{ color: '#666', marginBottom: 16 }}>
          Best practices for using the Error component:
        </Text>
        <ul style={{ color: '#666', fontSize: '14px', lineHeight: 1.8 }}>
          <li><strong>Be helpful:</strong> Explain what went wrong and what users can do about it</li>
          <li><strong>Provide actions:</strong> Always offer a way forward (retry, go back, contact support)</li>
          <li><strong>Appropriate icons:</strong> Choose icons that match the error type</li>
          <li><strong>Full-page errors:</strong> Use for critical errors that prevent page functionality</li>
          <li><strong>Empty states:</strong> Also great for "no data" or "nothing here yet" states</li>
        </ul>
      </Section>

      <Section title="Props">
        <PropTable props={errorProps} />
      </Section>
    </ComponentDoc>
  );
};
