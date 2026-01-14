import { ComponentDoc, PropTable, LiveExample, Section } from '../../components';
import type { PropDefinition } from '../../components';
import { Text } from '@metorial-io/ui';

const useMutationParams: PropDefinition[] = [
  {
    name: 'mutator',
    type: '(input: Input) => Promise<Response>',
    required: true,
    description: 'Async function that performs the mutation',
  },
  {
    name: 'opts.disableToast',
    type: 'boolean',
    description: 'Disable automatic error toast notifications',
  },
  {
    name: 'opts.onSuccess',
    type: '(data: Response) => void',
    description: 'Callback invoked when mutation succeeds',
  },
];

const useMutationReturn: PropDefinition[] = [
  {
    name: 'mutate',
    type: '(input: Input) => Promise<[Response, null] | [null, ServiceError]>',
    description: 'Function to trigger the mutation, returns tuple of [data, error]',
  },
  {
    name: 'isLoading',
    type: 'boolean',
    description: 'Whether mutation is currently in progress',
  },
  {
    name: 'isSuccess',
    type: 'boolean',
    description: 'Whether mutation succeeded (auto-resets after 2.5s)',
  },
  {
    name: 'isSuccessPermanent',
    type: 'boolean',
    description: 'Whether mutation has ever succeeded (persists)',
  },
  {
    name: 'isLoadingPermanent',
    type: 'boolean',
    description: 'Whether mutation has ever been loading (persists)',
  },
  {
    name: 'error',
    type: 'ServiceError | null',
    description: 'Error object if mutation failed',
  },
  {
    name: 'data',
    type: 'Response | null',
    description: 'Response data if mutation succeeded',
  },
  {
    name: 'input',
    type: 'Input | null',
    description: 'Last input passed to the mutation',
  },
  {
    name: 'RenderError',
    type: '() => ReactElement | null',
    description: 'Component to render error message',
  },
];

export const UseMutationDoc = () => {
  return (
    <ComponentDoc
      title="useMutation"
      description="A React hook for handling async mutations with built-in loading, error, and success state management. Automatically handles error toasts and provides a tuple-based error handling pattern."
      importStatement="import { useMutation } from '@metorial-io/data-hooks';"
      package="data-hooks"
    >
      <Section title="Basic Usage" description="Simple mutation with loading and error states.">
        <LiveExample
          code={`function SaveButton() {
  const { mutate, isLoading, isSuccess, RenderError } = useMutation(
    async (name) => {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      if (!name) throw new Error('Name is required');
      return { id: Date.now(), name };
    }
  );

  const [name, setName] = useState('');

  const handleSave = async () => {
    const [data, error] = await mutate(name);
    if (data) {
      console.log('Saved:', data);
    }
  };

  return (
    <Flex direction="column" gap="3">
      <Input
        label="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Button
        onClick={handleSave}
        isLoading={isLoading}
        variant={isSuccess ? 'success' : 'solid'}
      >
        {isSuccess ? 'Saved!' : 'Save'}
      </Button>
      <RenderError />
    </Flex>
  );
}`}
        />
      </Section>

      <Section title="With Success Callback" description="Handle successful mutations with onSuccess.">
        <LiveExample
          code={`function CreateUserForm() {
  const [users, setUsers] = useState([]);
  const { mutate, isLoading, RenderError } = useMutation(
    async (user) => {
      await new Promise(resolve => setTimeout(resolve, 500));
      return { ...user, id: Date.now() };
    },
    {
      onSuccess: (newUser) => {
        setUsers(prev => [...prev, newUser]);
      }
    }
  );

  const [email, setEmail] = useState('');

  return (
    <Flex direction="column" gap="3">
      <Flex gap="2">
        <Input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <Button
          onClick={() => mutate({ email })}
          isLoading={isLoading}
        >
          Add
        </Button>
      </Flex>
      <RenderError />
      <Flex direction="column" gap="1">
        {users.map(user => (
          <Text key={user.id} size="2">
            {user.email}
          </Text>
        ))}
      </Flex>
    </Flex>
  );
}`}
        />
      </Section>

      <Section title="Error Handling" description="Tuple-based error handling pattern.">
        <LiveExample
          code={`function DeleteButton() {
  const { mutate, isLoading } = useMutation(
    async (id) => {
      await new Promise(resolve => setTimeout(resolve, 800));
      // Simulate random error
      if (Math.random() > 0.5) {
        throw new Error('Failed to delete');
      }
      return { deleted: id };
    },
    { disableToast: true }
  );

  const [message, setMessage] = useState('');

  const handleDelete = async () => {
    const [data, error] = await mutate(123);

    if (error) {
      setMessage('Error: ' + error.message);
    } else if (data) {
      setMessage('Successfully deleted item ' + data.deleted);
    }
  };

  return (
    <Flex direction="column" gap="3">
      <Button
        onClick={handleDelete}
        isLoading={isLoading}
        variant="danger"
      >
        Delete Item
      </Button>
      {message && (
        <Text size="2" style={{ color: message.startsWith('Error') ? '#d00' : '#0a0' }}>
          {message}
        </Text>
      )}
    </Flex>
  );
}`}
        />
      </Section>

      <Section title="Loading States" description="Permanent loading states for UI feedback.">
        <LiveExample
          code={`function SubmitForm() {
  const { mutate, isLoading, isLoadingPermanent, isSuccessPermanent } = useMutation(
    async (data) => {
      await new Promise(resolve => setTimeout(resolve, 1500));
      return { submitted: true };
    }
  );

  return (
    <Flex direction="column" gap="3">
      <Button
        onClick={() => mutate({ foo: 'bar' })}
        isLoading={isLoading}
      >
        Submit Form
      </Button>

      <Flex direction="column" gap="1">
        <Text size="2">
          Currently loading: {isLoading ? 'Yes' : 'No'}
        </Text>
        <Text size="2">
          Has been loading: {isLoadingPermanent ? 'Yes' : 'No'}
        </Text>
        <Text size="2">
          Has succeeded: {isSuccessPermanent ? 'Yes' : 'No'}
        </Text>
      </Flex>
    </Flex>
  );
}`}
        />
      </Section>

      <Section title="Usage Guidelines">
        <Text size="3" style={{ color: '#666', marginBottom: 16 }}>
          Best practices for using useMutation:
        </Text>
        <ul style={{ color: '#666', fontSize: '14px', lineHeight: 1.8 }}>
          <li><strong>Tuple destructuring:</strong> Always destructure the result as [data, error] for type-safe error handling</li>
          <li><strong>Error display:</strong> Use RenderError component for consistent error UI</li>
          <li><strong>Success feedback:</strong> Use isSuccess for temporary success state (2.5s), isSuccessPermanent for persistent state</li>
          <li><strong>Disable toasts:</strong> Set disableToast: true for custom error handling</li>
          <li><strong>Optimistic updates:</strong> Use onSuccess callback to update local state immediately</li>
          <li><strong>Loading UI:</strong> Use isLoading for button states and spinners</li>
        </ul>
      </Section>

      <Section title="Parameters">
        <PropTable props={useMutationParams} />
      </Section>

      <Section title="Return Value">
        <PropTable props={useMutationReturn} />
      </Section>
    </ComponentDoc>
  );
};
