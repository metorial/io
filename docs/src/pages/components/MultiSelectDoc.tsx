import { ComponentDoc, PropTable, LiveExample, Section } from '../../components';
import type { PropDefinition } from '../../components';
import { Text } from '@metorial-io/ui';

const multiSelectProps: PropDefinition[] = [
  {
    name: 'label',
    type: 'string',
    description: 'Label text for the multi-select',
  },
  {
    name: 'options',
    type: 'Array<{ value: string; label: string }>',
    required: true,
    description: 'Array of options to select from',
  },
  {
    name: 'value',
    type: 'string[]',
    description: 'Controlled selected values',
  },
  {
    name: 'onChange',
    type: '(values: string[]) => void',
    description: 'Callback when selection changes',
  },
  {
    name: 'placeholder',
    type: 'string',
    default: "'Select options...'",
    description: 'Placeholder text when nothing is selected',
  },
  {
    name: 'disabled',
    type: 'boolean',
    description: 'Disables the multi-select',
  },
  {
    name: 'error',
    type: 'string',
    description: 'Error message to display',
  },
  {
    name: 'description',
    type: 'string',
    description: 'Helper text displayed below the input',
  },
];

export const MultiSelectDoc = () => {
  return (
    <ComponentDoc
      title="MultiSelect"
      description="A multi-select component for choosing multiple options from a list. Features tag-style selections with remove buttons and keyboard navigation."
      importStatement="import { MultiSelect } from '@metorial-io/ui';"
      package="ui"
    >
      <Section title="Basic Usage" description="A simple multi-select with options.">
        <LiveExample
          code={`function BasicMultiSelect() {
  const [selected, setSelected] = useState([]);

  const options = [
    { value: 'react', label: 'React' },
    { value: 'vue', label: 'Vue' },
    { value: 'angular', label: 'Angular' },
    { value: 'svelte', label: 'Svelte' },
  ];

  return (
    <Flex direction="column" gap="2">
      <MultiSelect
        label="Select frameworks"
        options={options}
        value={selected}
        onChange={setSelected}
        placeholder="Choose your frameworks"
      />
      <Text size="2" style={{ color: '#666' }}>
        Selected: {selected.length} framework{selected.length !== 1 ? 's' : ''}
      </Text>
    </Flex>
  );
}`}
        />
      </Section>

      <Section title="With Description" description="Add helper text to guide users.">
        <LiveExample
          code={`function MultiSelectWithDescription() {
  const [selected, setSelected] = useState([]);

  const options = [
    { value: 'email', label: 'Email' },
    { value: 'sms', label: 'SMS' },
    { value: 'push', label: 'Push notifications' },
    { value: 'phone', label: 'Phone call' },
  ];

  return (
    <MultiSelect
      label="Notification preferences"
      description="Select all the ways you'd like to be notified"
      options={options}
      value={selected}
      onChange={setSelected}
    />
  );
}`}
        />
      </Section>

      <Section title="With Validation" description="Show validation errors when needed.">
        <LiveExample
          code={`function MultiSelectWithValidation() {
  const [selected, setSelected] = useState([]);

  const options = [
    { value: 'js', label: 'JavaScript' },
    { value: 'ts', label: 'TypeScript' },
    { value: 'py', label: 'Python' },
    { value: 'rb', label: 'Ruby' },
    { value: 'go', label: 'Go' },
  ];

  const error = selected.length === 0 ? 'Please select at least one language' : '';

  return (
    <MultiSelect
      label="Programming languages"
      options={options}
      value={selected}
      onChange={setSelected}
      error={error}
    />
  );
}`}
        />
      </Section>

      <Section title="Disabled State" description="Disable the multi-select when it shouldn't be interactive.">
        <LiveExample
          code={`function DisabledMultiSelect() {
  const options = [
    { value: 'red', label: 'Red' },
    { value: 'blue', label: 'Blue' },
    { value: 'green', label: 'Green' },
  ];

  return (
    <MultiSelect
      label="Disabled selection"
      options={options}
      value={['red', 'blue']}
      disabled
    />
  );
}`}
        />
      </Section>

      <Section title="Large Option Set" description="Multi-select works well with many options.">
        <LiveExample
          code={`function LargeMultiSelect() {
  const [selected, setSelected] = useState([]);

  const options = [
    { value: 'usa', label: 'United States' },
    { value: 'uk', label: 'United Kingdom' },
    { value: 'canada', label: 'Canada' },
    { value: 'australia', label: 'Australia' },
    { value: 'germany', label: 'Germany' },
    { value: 'france', label: 'France' },
    { value: 'japan', label: 'Japan' },
    { value: 'china', label: 'China' },
    { value: 'india', label: 'India' },
    { value: 'brazil', label: 'Brazil' },
  ];

  return (
    <MultiSelect
      label="Countries"
      description="Select all countries you've visited"
      options={options}
      value={selected}
      onChange={setSelected}
      placeholder="Search countries..."
    />
  );
}`}
        />
      </Section>

      <Section title="Usage Guidelines">
        <Text size="3" style={{ color: '#666', marginBottom: 16 }}>
          Best practices for using multi-select:
        </Text>
        <ul style={{ color: '#666', fontSize: '14px', lineHeight: 1.8 }}>
          <li><strong>Multiple selections:</strong> Use when users need to select multiple items from a list</li>
          <li><strong>Clear removability:</strong> Selected items show as tags with remove buttons</li>
          <li><strong>Searchable:</strong> Users can type to filter options quickly</li>
          <li><strong>Consider alternatives:</strong> For a small number of options, use Checkbox group instead</li>
          <li><strong>Show selection count:</strong> Display how many items are selected</li>
        </ul>
      </Section>

      <Section title="Props">
        <PropTable props={multiSelectProps} />
      </Section>
    </ComponentDoc>
  );
};
