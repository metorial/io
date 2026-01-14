import type { PropDefinition } from '../../components';
import { ComponentDoc, LiveExample, PropTable, Section } from '../../components';

const selectProps: PropDefinition[] = [
  {
    name: 'label',
    type: 'string',
    description: 'Label text for the select'
  },
  {
    name: 'hideLabel',
    type: 'boolean',
    description: 'Visually hides the label'
  },
  {
    name: 'description',
    type: 'string',
    description: 'Helper text below the select'
  },
  {
    name: 'placeholder',
    type: 'string',
    description: 'Placeholder when no value selected'
  },
  {
    name: 'items',
    type: 'Array<{ label: string; id: string }>',
    required: true,
    description: 'Options to display in the dropdown'
  },
  {
    name: 'value',
    type: 'string',
    description: 'Selected value'
  },
  {
    name: 'onChange',
    type: '(id: string) => void',
    description: 'Callback when selection changes'
  },
  {
    name: 'size',
    type: "'1' | '2' | '3' | '4' | '5'",
    default: "'3'",
    description: 'Size of the select'
  },
  {
    name: 'error',
    type: 'string',
    description: 'Error message to display'
  },
  {
    name: 'disabled',
    type: 'boolean',
    description: 'Disables the select'
  }
];

export const SelectDoc = () => {
  return (
    <ComponentDoc
      title="Select"
      description="A dropdown select component built on Radix UI for accessible, keyboard-navigable selection."
      importStatement="import { Select } from '@metorial-io/ui';"
      package="ui"
    >
      <Section title="Basic Usage">
        <LiveExample
          code={`function BasicSelect() {
  const [value, setValue] = useState('');

  const items = [
    { label: 'Apple', id: 'apple' },
    { label: 'Banana', id: 'banana' },
    { label: 'Orange', id: 'orange' },
    { label: 'Grape', id: 'grape' },
  ];

  return (
    <Select
      label="Favorite Fruit"
      placeholder="Select a fruit"
      items={items}
      value={value}
      onChange={setValue}
    />
  );
}`}
        />
      </Section>

      <Section title="With Description and Error">
        <LiveExample
          code={`function SelectWithValidation() {
  const [value, setValue] = useState('');

  const items = [
    { label: 'Small', id: 's' },
    { label: 'Medium', id: 'm' },
    { label: 'Large', id: 'l' },
    { label: 'X-Large', id: 'xl' },
  ];

  const error = !value ? 'Please select a size' : '';

  return (
    <Select
      label="Size"
      description="Choose your preferred size"
      placeholder="Select size"
      items={items}
      value={value}
      onChange={setValue}
      error={error}
    />
  );
}`}
        />
      </Section>

      <Section title="Sizes">
        <LiveExample
          code={`function SelectSizes() {
  const items = [
    { label: 'Option 1', id: '1' },
    { label: 'Option 2', id: '2' },
  ];

  return (
    <Flex direction="column" gap="4">
      <Select label="Size 1" size="1" items={items} placeholder="Small" />
      <Select label="Size 2" size="2" items={items} placeholder="Smaller" />
      <Select label="Size 3" size="3" items={items} placeholder="Default" />
      <Select label="Size 4" size="4" items={items} placeholder="Larger" />
      <Select label="Size 5" size="5" items={items} placeholder="Large" />
    </Flex>
  );
}`}
        />
      </Section>

      <Section title="Props">
        <PropTable props={selectProps} />
      </Section>
    </ComponentDoc>
  );
};
