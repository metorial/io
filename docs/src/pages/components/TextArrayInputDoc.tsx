import { ComponentDoc, PropTable, LiveExample, Section } from '../../components';
import type { PropDefinition } from '../../components';
import { Text } from '@metorial-io/ui';

const textArrayInputProps: PropDefinition[] = [
  {
    name: 'label',
    type: 'string',
    description: 'Label text for the input',
  },
  {
    name: 'value',
    type: 'string[]',
    description: 'Controlled array of strings',
  },
  {
    name: 'onChange',
    type: '(values: string[]) => void',
    description: 'Callback when array changes',
  },
  {
    name: 'placeholder',
    type: 'string',
    default: "'Add item...'",
    description: 'Placeholder text for the input',
  },
  {
    name: 'disabled',
    type: 'boolean',
    description: 'Disables the input',
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

export const TextArrayInputDoc = () => {
  return (
    <ComponentDoc
      title="TextArrayInput"
      description="An input component for adding and managing a list of text values. Users can add items by pressing Enter or comma, and remove them with remove buttons."
      importStatement="import { TextArrayInput } from '@metorial-io/ui';"
      package="ui"
    >
      <Section title="Basic Usage" description="Add and remove text items from a list.">
        <LiveExample
          code={`function BasicTextArrayInput() {
  const [items, setItems] = useState([]);

  return (
    <Flex direction="column" gap="2">
      <TextArrayInput
        label="Tags"
        value={items}
        onChange={setItems}
        placeholder="Add a tag and press Enter"
      />
      <Text size="2" style={{ color: '#666' }}>
        {items.length} tag{items.length !== 1 ? 's' : ''} added
      </Text>
    </Flex>
  );
}`}
        />
      </Section>

      <Section title="With Description" description="Add helper text to guide users.">
        <LiveExample
          code={`function TextArrayWithDescription() {
  const [emails, setEmails] = useState([]);

  return (
    <TextArrayInput
      label="Email addresses"
      description="Add multiple email addresses, separated by pressing Enter"
      value={emails}
      onChange={setEmails}
      placeholder="email@example.com"
    />
  );
}`}
        />
      </Section>

      <Section title="Pre-populated Items" description="Start with initial values.">
        <LiveExample
          code={`function PrePopulatedArray() {
  const [skills, setSkills] = useState(['JavaScript', 'TypeScript', 'React']);

  return (
    <TextArrayInput
      label="Skills"
      value={skills}
      onChange={setSkills}
      placeholder="Add a skill"
    />
  );
}`}
        />
      </Section>

      <Section title="With Validation" description="Validate the input array.">
        <LiveExample
          code={`function ValidatedArray() {
  const [urls, setUrls] = useState([]);

  const error = urls.length === 0 ? 'Please add at least one URL' : '';

  return (
    <TextArrayInput
      label="Website URLs"
      description="Add URLs to your websites"
      value={urls}
      onChange={setUrls}
      placeholder="https://example.com"
      error={error}
    />
  );
}`}
        />
      </Section>

      <Section title="Disabled State" description="Disable when the input shouldn't be editable.">
        <LiveExample
          code={`<TextArrayInput
  label="Disabled array"
  value={['Item 1', 'Item 2', 'Item 3']}
  disabled
  placeholder="Cannot add items"
/>`}
        />
      </Section>

      <Section title="Use Cases" description="Common scenarios for TextArrayInput.">
        <LiveExample
          code={`function UseCaseExamples() {
  const [tags, setTags] = useState(['design', 'ui']);
  const [keywords, setKeywords] = useState([]);
  const [domains, setDomains] = useState([]);

  return (
    <Flex direction="column" gap="4">
      <TextArrayInput
        label="Blog post tags"
        value={tags}
        onChange={setTags}
        placeholder="Add tag"
      />
      <TextArrayInput
        label="SEO keywords"
        description="Add relevant keywords for search optimization"
        value={keywords}
        onChange={setKeywords}
        placeholder="Add keyword"
      />
      <TextArrayInput
        label="Allowed domains"
        description="Whitelist domains for CORS"
        value={domains}
        onChange={setDomains}
        placeholder="example.com"
      />
    </Flex>
  );
}`}
        />
      </Section>

      <Section title="Usage Guidelines">
        <Text size="3" style={{ color: '#666', marginBottom: 16 }}>
          Best practices for using TextArrayInput:
        </Text>
        <ul style={{ color: '#666', fontSize: '14px', lineHeight: 1.8 }}>
          <li><strong>List of strings:</strong> Use for tags, keywords, URLs, email addresses, or any list of text values</li>
          <li><strong>Press Enter to add:</strong> Items are added when user presses Enter or comma</li>
          <li><strong>Easy removal:</strong> Each item has a remove button</li>
          <li><strong>Clear placeholder:</strong> Make it obvious what type of data to add</li>
          <li><strong>Consider alternatives:</strong> For predefined options, use MultiSelect instead</li>
        </ul>
      </Section>

      <Section title="Props">
        <PropTable props={textArrayInputProps} />
      </Section>
    </ComponentDoc>
  );
};
