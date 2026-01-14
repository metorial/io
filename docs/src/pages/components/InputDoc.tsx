import { ComponentDoc, PropTable, LiveExample, Section } from '../../components';
import type { PropDefinition } from '../../components';
import { Text } from '@metorial-io/ui';

const inputProps: PropDefinition[] = [
  {
    name: 'label',
    type: 'string',
    description: 'Label text for the input',
  },
  {
    name: 'hideLabel',
    type: 'boolean',
    description: 'Visually hides the label but keeps it for screen readers',
  },
  {
    name: 'description',
    type: 'string',
    description: 'Helper text displayed below the input',
  },
  {
    name: 'error',
    type: 'string',
    description: 'Error message to display',
  },
  {
    name: 'size',
    type: "'1' | '2' | '3' | '4' | '5'",
    default: "'3'",
    description: 'Size of the input',
  },
  {
    name: 'as',
    type: "'input' | 'textarea'",
    default: "'input'",
    description: 'Render as input or textarea',
  },
  {
    name: 'minRows',
    type: 'number',
    description: 'Minimum rows for textarea (when as="textarea")',
  },
  {
    name: 'maxRows',
    type: 'number',
    description: 'Maximum rows for textarea (when as="textarea")',
  },
  {
    name: 'value',
    type: 'string',
    description: 'Controlled input value',
  },
  {
    name: 'onChange',
    type: '(e: ChangeEvent) => void',
    description: 'Change handler',
  },
  {
    name: 'placeholder',
    type: 'string',
    description: 'Placeholder text',
  },
  {
    name: 'disabled',
    type: 'boolean',
    description: 'Disables the input',
  },
  {
    name: 'required',
    type: 'boolean',
    description: 'Makes the input required',
  },
];

export const InputDoc = () => {
  return (
    <ComponentDoc
      title="Input"
      description="A flexible input component supporting text input and textarea modes with labels, descriptions, error states, and more."
      importStatement="import { Input } from '@metorial-io/ui';"
      package="ui"
    >
      <Section title="Basic Usage" description="A simple input with a label.">
        <LiveExample
          code={`function BasicInput() {
  const [value, setValue] = useState('');

  return (
    <Input
      label="Email"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder="Enter your email"
    />
  );
}`}
        />
      </Section>

      <Section title="With Description" description="Add helper text below the input to provide additional context.">
        <LiveExample
          code={`function InputWithDescription() {
  const [value, setValue] = useState('');

  return (
    <Input
      label="Username"
      description="Choose a unique username between 3-20 characters"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder="johndoe"
    />
  );
}`}
        />
      </Section>

      <Section title="Error State" description="Display validation errors to the user.">
        <LiveExample
          code={`function InputWithError() {
  const [email, setEmail] = useState('invalid-email');
  const error = email && !email.includes('@') ? 'Please enter a valid email address' : '';

  return (
    <Input
      label="Email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      error={error}
      placeholder="user@example.com"
    />
  );
}`}
        />
      </Section>

      <Section title="Sizes" description="Inputs support 5 different sizes. Size 3 is the default.">
        <LiveExample
          code={`<Flex direction="column" gap="4">
  <Input label="Size 1" size="1" placeholder="Small input" />
  <Input label="Size 2" size="2" placeholder="Smaller input" />
  <Input label="Size 3 (Default)" size="3" placeholder="Default input" />
  <Input label="Size 4" size="4" placeholder="Larger input" />
  <Input label="Size 5" size="5" placeholder="Large input" />
</Flex>`}
        />
      </Section>

      <Section title="Textarea" description="Use the 'as' prop to render a textarea instead of an input.">
        <LiveExample
          code={`function TextareaExample() {
  const [value, setValue] = useState('');

  return (
    <Input
      as="textarea"
      label="Description"
      description="Provide a detailed description"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder="Enter your description here..."
      minRows={4}
      maxRows={10}
    />
  );
}`}
        />
      </Section>

      <Section title="Hidden Label" description="Hide the label visually while keeping it accessible to screen readers.">
        <LiveExample
          code={`function HiddenLabelInput() {
  const [value, setValue] = useState('');

  return (
    <Input
      label="Search"
      hideLabel
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder="Search..."
    />
  );
}`}
        />
      </Section>

      <Section title="Different Input Types" description="The Input component supports all standard HTML input types.">
        <LiveExample
          code={`<Flex direction="column" gap="4">
  <Input label="Email" type="email" placeholder="user@example.com" />
  <Input label="Password" type="password" placeholder="••••••••" />
  <Input label="Number" type="number" placeholder="42" />
  <Input label="URL" type="url" placeholder="https://example.com" />
  <Input label="Date" type="date" />
</Flex>`}
        />
      </Section>

      <Section title="Disabled State" description="Disable inputs when they shouldn't be editable.">
        <LiveExample
          code={`<Flex direction="column" gap="4">
  <Input label="Disabled Input" value="Cannot edit this" disabled />
  <Input label="Readonly Value" value="Read only" readOnly />
</Flex>`}
        />
      </Section>

      <Section title="Usage Guidelines">
        <Text size="3" style={{ color: '#666', marginBottom: 16 }}>
          Best practices for using inputs:
        </Text>
        <ul style={{ color: '#666', fontSize: '14px', lineHeight: 1.8 }}>
          <li><strong>Always provide labels:</strong> Never omit labels, use hideLabel if needed for visual design</li>
          <li><strong>Clear descriptions:</strong> Use description text to help users understand what to enter</li>
          <li><strong>Helpful placeholders:</strong> Show examples of valid input in placeholders</li>
          <li><strong>Immediate validation:</strong> Show errors as soon as they're detected (after blur or on submit)</li>
          <li><strong>Appropriate types:</strong> Use the correct input type (email, tel, url, etc.) for better UX</li>
          <li><strong>Textarea for long text:</strong> Use textarea when expecting more than a single line of text</li>
        </ul>
      </Section>

      <Section title="Props">
        <PropTable props={inputProps} />
      </Section>
    </ComponentDoc>
  );
};
