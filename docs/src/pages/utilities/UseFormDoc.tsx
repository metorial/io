import { ComponentDoc, PropTable, LiveExample, Section } from '../../components';
import type { PropDefinition } from '../../components';
import { Text } from '@metorial-io/ui';

const useFormParams: PropDefinition[] = [
  {
    name: 'initialValues',
    type: 'Values',
    required: true,
    description: 'Initial form values',
  },
  {
    name: 'onSubmit',
    type: '(values: Values) => void | Promise<void>',
    required: true,
    description: 'Submit handler function',
  },
  {
    name: 'schema',
    type: '(yup: typeof Yup) => Yup.ObjectSchema<Values>',
    description: 'Yup validation schema function',
  },
  {
    name: 'type',
    type: 'ValidationType<Values>',
    description: 'Alternative to schema - validation type definition',
  },
  {
    name: 'updateInitialValues',
    type: 'boolean',
    description: 'Update form values when initialValues change',
  },
  {
    name: 'autoSubmit',
    type: '{ delay?: number }',
    description: 'Auto-submit when valid (default delay: 500ms)',
  },
];

const useFormReturn: PropDefinition[] = [
  {
    name: 'values',
    type: 'Values',
    description: 'Current form values',
  },
  {
    name: 'errors',
    type: 'Partial<Record<keyof Values, string>>',
    description: 'Validation errors by field',
  },
  {
    name: 'touched',
    type: 'Partial<Record<keyof Values, boolean>>',
    description: 'Fields that have been touched',
  },
  {
    name: 'isValid',
    type: 'boolean',
    description: 'Whether form is valid',
  },
  {
    name: 'dirty',
    type: 'boolean',
    description: 'Whether form has been modified',
  },
  {
    name: 'canSubmit',
    type: 'boolean',
    description: 'Whether form can be submitted (valid && dirty)',
  },
  {
    name: 'handleChange',
    type: '(e: ChangeEvent) => void',
    description: 'Field change handler',
  },
  {
    name: 'handleBlur',
    type: '(e: FocusEvent) => void',
    description: 'Field blur handler',
  },
  {
    name: 'handleSubmit',
    type: '(e?: FormEvent) => void',
    description: 'Form submit handler',
  },
  {
    name: 'setFieldValue',
    type: '(field: keyof Values, value: any) => void',
    description: 'Programmatically set field value',
  },
  {
    name: 'RenderError',
    type: '({ field }: { field: keyof Values }) => ReactElement | null',
    description: 'Component to render field errors',
  },
];

export const UseFormDoc = () => {
  return (
    <ComponentDoc
      title="useForm"
      description="A powerful form management hook built on Formik with Yup validation. Provides built-in validation, error handling, and support for auto-submit. Includes a RenderError component for easy error display."
      importStatement="import { useForm } from '@metorial-io/data-hooks';"
      package="data-hooks"
    >
      <Section title="Basic Usage" description="Simple form with Yup validation.">
        <LiveExample
          code={`function LoginForm() {
  const form = useForm({
    initialValues: {
      email: '',
      password: ''
    },
    schema: (yup) => yup.object({
      email: yup.string().email('Invalid email').required('Email is required'),
      password: yup.string().min(6, 'At least 6 characters').required('Password is required')
    }),
    onSubmit: (values) => {
      console.log('Login:', values);
    }
  });

  return (
    <form onSubmit={form.handleSubmit}>
      <Flex direction="column" gap="3">
        <div>
          <Input
            label="Email"
            name="email"
            value={form.values.email}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
          />
          <form.RenderError field="email" />
        </div>

        <div>
          <Input
            label="Password"
            name="password"
            type="password"
            value={form.values.password}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
          />
          <form.RenderError field="password" />
        </div>

        <Button type="submit" disabled={!form.canSubmit}>
          Login
        </Button>
      </Flex>
    </form>
  );
}`}
        />
      </Section>

      <Section title="Auto-Submit" description="Automatically submit when form is valid.">
        <LiveExample
          code={`function SearchForm() {
  const [results, setResults] = useState([]);

  const form = useForm({
    initialValues: {
      query: ''
    },
    schema: (yup) => yup.object({
      query: yup.string().min(3, 'At least 3 characters')
    }),
    autoSubmit: { delay: 800 },
    onSubmit: (values) => {
      // Simulate search
      const mockResults = [
        \`Result 1 for "\${values.query}"\`,
        \`Result 2 for "\${values.query}"\`,
        \`Result 3 for "\${values.query}"\`
      ];
      setResults(mockResults);
    }
  });

  return (
    <Flex direction="column" gap="3">
      <div>
        <Input
          label="Search"
          name="query"
          value={form.values.query}
          onChange={form.handleChange}
          onBlur={form.handleBlur}
          placeholder="Type to search..."
        />
        <form.RenderError field="query" />
      </div>

      <Flex direction="column" gap="1">
        {results.map((result, i) => (
          <Text key={i} size="2">{result}</Text>
        ))}
      </Flex>
    </Flex>
  );
}`}
        />
      </Section>

      <Section title="Complex Validation" description="Multi-field validation with custom rules.">
        <LiveExample
          code={`function SignupForm() {
  const form = useForm({
    initialValues: {
      username: '',
      password: '',
      confirmPassword: ''
    },
    schema: (yup) => yup.object({
      username: yup.string()
        .min(3, 'At least 3 characters')
        .matches(/^[a-zA-Z0-9_]+$/, 'Only letters, numbers, and underscores')
        .required('Username is required'),
      password: yup.string()
        .min(8, 'At least 8 characters')
        .required('Password is required'),
      confirmPassword: yup.string()
        .oneOf([yup.ref('password')], 'Passwords must match')
        .required('Confirm password')
    }),
    onSubmit: (values) => {
      console.log('Signup:', values);
    }
  });

  return (
    <form onSubmit={form.handleSubmit}>
      <Flex direction="column" gap="3">
        <div>
          <Input
            label="Username"
            name="username"
            value={form.values.username}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
          />
          <form.RenderError field="username" />
        </div>

        <div>
          <Input
            label="Password"
            name="password"
            type="password"
            value={form.values.password}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
          />
          <form.RenderError field="password" />
        </div>

        <div>
          <Input
            label="Confirm Password"
            name="confirmPassword"
            type="password"
            value={form.values.confirmPassword}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
          />
          <form.RenderError field="confirmPassword" />
        </div>

        <Button type="submit" disabled={!form.canSubmit}>
          Sign Up
        </Button>
      </Flex>
    </form>
  );
}`}
        />
      </Section>

      <Section title="Update Initial Values" description="Sync form with external data changes.">
        <LiveExample
          code={`function ProfileEditor() {
  const [profile, setProfile] = useState({ name: 'John', age: 30 });

  const form = useForm({
    initialValues: profile,
    updateInitialValues: true,
    schema: (yup) => yup.object({
      name: yup.string().required('Name is required'),
      age: yup.number().min(0).required('Age is required')
    }),
    onSubmit: (values) => {
      setProfile(values);
      console.log('Saved:', values);
    }
  });

  return (
    <Flex direction="column" gap="3">
      <Flex gap="2">
        <Button onClick={() => setProfile({ name: 'Alice', age: 25 })}>
          Load Alice
        </Button>
        <Button onClick={() => setProfile({ name: 'Bob', age: 35 })}>
          Load Bob
        </Button>
      </Flex>

      <form onSubmit={form.handleSubmit}>
        <Flex direction="column" gap="3">
          <Input
            label="Name"
            name="name"
            value={form.values.name}
            onChange={form.handleChange}
          />
          <Input
            label="Age"
            name="age"
            type="number"
            value={form.values.age}
            onChange={form.handleChange}
          />
          <Button type="submit" disabled={!form.canSubmit}>
            Save Profile
          </Button>
        </Flex>
      </form>
    </Flex>
  );
}`}
        />
      </Section>

      <Section title="Usage Guidelines">
        <Text size="3" style={{ color: '#666', marginBottom: 16 }}>
          Best practices for using useForm:
        </Text>
        <ul style={{ color: '#666', fontSize: '14px', lineHeight: 1.8 }}>
          <li><strong>Validation:</strong> Use Yup schema for powerful, reusable validation rules</li>
          <li><strong>Error display:</strong> Use RenderError component for consistent error UI</li>
          <li><strong>Auto-submit:</strong> Great for search forms, filters, and real-time updates</li>
          <li><strong>canSubmit:</strong> Combine isValid && dirty to enable submit button</li>
          <li><strong>Initial values:</strong> Set updateInitialValues: true to sync with props</li>
          <li><strong>Type safety:</strong> Fully typed in TypeScript with generic Values type</li>
        </ul>
      </Section>

      <Section title="Parameters">
        <PropTable props={useFormParams} />
      </Section>

      <Section title="Return Value">
        <PropTable props={useFormReturn} />
      </Section>
    </ComponentDoc>
  );
};
