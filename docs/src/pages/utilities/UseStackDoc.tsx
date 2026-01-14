import { ComponentDoc, PropTable, LiveExample, Section } from '../../components';
import type { PropDefinition } from '../../components';
import { Text } from '@metorial-io/ui';

const useStackParams: PropDefinition[] = [
  {
    name: '...loaders',
    type: 'Array<{ error, isLoading, refetch? } | undefined>',
    required: true,
    description: 'Multiple loader states to combine',
  },
];

const useStackReturn: PropDefinition[] = [
  {
    name: 'isLoading',
    type: 'boolean',
    description: 'True if any loader is loading and no errors present',
  },
  {
    name: 'error',
    type: 'ServiceError | null',
    description: 'First error found in any loader',
  },
  {
    name: 'refetch',
    type: '() => void',
    description: 'Refetches all loaders that have a refetch function',
  },
];

export const UseStackDoc = () => {
  return (
    <ComponentDoc
      title="useStack"
      description="Combines multiple loader states into a single state object. Useful when you need to wait for multiple data sources to load before rendering content. Automatically handles the loading state and shows the first error encountered."
      importStatement="import { useStack } from '@metorial-io/data-hooks';"
      package="data-hooks"
    >
      <Section title="Basic Usage" description="Combine multiple loaders into one state.">
        <LiveExample
          code={`function CombinedLoader() {
  // Simulate multiple loaders
  const userLoader = {
    data: { name: 'John' },
    error: null,
    isLoading: false,
    refetch: () => console.log('Refetch user')
  };

  const postsLoader = {
    data: [{ id: 1, title: 'Post 1' }],
    error: null,
    isLoading: false,
    refetch: () => console.log('Refetch posts')
  };

  const { isLoading, error, refetch } = useStack(userLoader, postsLoader);

  return (
    <Flex direction="column" gap="3">
      <Text size="3">
        Loading: {isLoading ? 'Yes' : 'No'}
      </Text>
      <Text size="3">
        Error: {error ? error.message : 'None'}
      </Text>
      <Button onClick={refetch}>
        Refetch All
      </Button>
    </Flex>
  );
}`}
        />
      </Section>

      <Section title="With Loading State" description="Show loading while any loader is fetching.">
        <LiveExample
          code={`function MultiDataView() {
  const [loading1, setLoading1] = useState(false);
  const [loading2, setLoading2] = useState(false);

  const loader1 = {
    data: 'Data 1',
    error: null,
    isLoading: loading1,
    refetch: () => {
      setLoading1(true);
      setTimeout(() => setLoading1(false), 1000);
    }
  };

  const loader2 = {
    data: 'Data 2',
    error: null,
    isLoading: loading2,
    refetch: () => {
      setLoading2(true);
      setTimeout(() => setLoading2(false), 1200);
    }
  };

  const { isLoading, refetch } = useStack(loader1, loader2);

  return (
    <Flex direction="column" gap="3">
      {isLoading ? (
        <Spinner />
      ) : (
        <Flex direction="column" gap="2">
          <Text size="2">{loader1.data}</Text>
          <Text size="2">{loader2.data}</Text>
        </Flex>
      )}
      <Button onClick={refetch} isLoading={isLoading}>
        Refresh All Data
      </Button>
    </Flex>
  );
}`}
        />
      </Section>

      <Section title="Error Handling" description="Display first error from any loader.">
        <LiveExample
          code={`function ErrorExample() {
  const [hasError, setHasError] = useState(false);

  const successLoader = {
    data: 'Success data',
    error: null,
    isLoading: false
  };

  const errorLoader = {
    data: null,
    error: hasError ? { message: 'Failed to load data' } : null,
    isLoading: false
  };

  const { error } = useStack(successLoader, errorLoader);

  return (
    <Flex direction="column" gap="3">
      <Button onClick={() => setHasError(!hasError)}>
        {hasError ? 'Clear Error' : 'Trigger Error'}
      </Button>

      {error ? (
        <Error>Error: {error.message}</Error>
      ) : (
        <Text size="2" style={{ color: '#0a0' }}>
          All loaders successful
        </Text>
      )}
    </Flex>
  );
}`}
        />
      </Section>

      <Section title="With undefined loaders" description="Safely handle optional loaders.">
        <LiveExample
          code={`function ConditionalLoaders() {
  const [includeSecond, setIncludeSecond] = useState(false);

  const loader1 = {
    data: 'Always present',
    error: null,
    isLoading: false
  };

  const loader2 = includeSecond ? {
    data: 'Conditionally present',
    error: null,
    isLoading: false
  } : undefined;

  const { isLoading } = useStack(loader1, loader2);

  return (
    <Flex direction="column" gap="3">
      <Switch
        checked={includeSecond}
        onCheckedChange={setIncludeSecond}
        label="Include second loader"
      />
      <Text size="2">
        Active loaders: {includeSecond ? '2' : '1'}
      </Text>
      <Text size="2">
        Loading: {isLoading ? 'Yes' : 'No'}
      </Text>
    </Flex>
  );
}`}
        />
      </Section>

      <Section title="Usage Guidelines">
        <Text size="3" style={{ color: '#666', marginBottom: 16 }}>
          Best practices for using useStack:
        </Text>
        <ul style={{ color: '#666', fontSize: '14px', lineHeight: 1.8 }}>
          <li><strong>Multiple data sources:</strong> Use when rendering depends on multiple API calls</li>
          <li><strong>Error priority:</strong> Errors take precedence over loading state - if any loader has an error, isLoading becomes false</li>
          <li><strong>Undefined loaders:</strong> Pass undefined for conditional loaders - they'll be filtered out automatically</li>
          <li><strong>Refetch all:</strong> Single refetch() call triggers all loaders' refetch functions</li>
          <li><strong>Early returns:</strong> Show error or loading states before rendering main content</li>
          <li><strong>Type safety:</strong> TypeScript infers types from your loader objects</li>
        </ul>
      </Section>

      <Section title="Parameters">
        <PropTable props={useStackParams} />
      </Section>

      <Section title="Return Value">
        <PropTable props={useStackReturn} />
      </Section>
    </ComponentDoc>
  );
};
