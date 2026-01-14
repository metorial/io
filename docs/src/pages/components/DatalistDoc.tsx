import { ComponentDoc, PropTable, LiveExample, Section } from '../../components';
import type { PropDefinition } from '../../components';
import { Text } from '@metorial-io/ui';

const datalistProps: PropDefinition[] = [
  {
    name: 'label',
    type: 'string',
    description: 'Label text for the input',
  },
  {
    name: 'options',
    type: 'string[]',
    required: true,
    description: 'Array of autocomplete suggestions',
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

export const DatalistDoc = () => {
  return (
    <ComponentDoc
      title="Datalist"
      description="An input with autocomplete suggestions using the native HTML datalist element. Provides suggestions while allowing free-form text entry."
      importStatement="import { Datalist } from '@metorial-io/ui';"
      package="ui"
    >
      <Section title="Basic Usage" description="An input with autocomplete suggestions.">
        <LiveExample
          code={`function BasicDatalist() {
  const [value, setValue] = useState('');

  const browsers = [
    'Chrome',
    'Firefox',
    'Safari',
    'Edge',
    'Opera',
  ];

  return (
    <Datalist
      label="Browser"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      options={browsers}
      placeholder="Type to see suggestions"
    />
  );
}`}
        />
      </Section>

      <Section title="With Description" description="Add helper text to guide users.">
        <LiveExample
          code={`function DatalistWithDescription() {
  const [city, setCity] = useState('');

  const cities = [
    'New York',
    'Los Angeles',
    'Chicago',
    'Houston',
    'Phoenix',
    'Philadelphia',
    'San Antonio',
    'San Diego',
    'Dallas',
    'San Jose',
  ];

  return (
    <Datalist
      label="City"
      description="Start typing to see suggestions"
      value={city}
      onChange={(e) => setCity(e.target.value)}
      options={cities}
      placeholder="Enter city name"
    />
  );
}`}
        />
      </Section>

      <Section title="With Validation" description="Validate the input value.">
        <LiveExample
          code={`function ValidatedDatalist() {
  const [language, setLanguage] = useState('');

  const languages = [
    'JavaScript',
    'TypeScript',
    'Python',
    'Java',
    'C++',
    'Ruby',
    'Go',
    'Rust',
  ];

  const error = language && !languages.includes(language)
    ? 'Please select a language from the suggestions'
    : '';

  return (
    <Datalist
      label="Programming Language"
      value={language}
      onChange={(e) => setLanguage(e.target.value)}
      options={languages}
      error={error}
      placeholder="Select or type a language"
    />
  );
}`}
        />
      </Section>

      <Section title="Country Example" description="A practical example with country names.">
        <LiveExample
          code={`function CountryDatalist() {
  const [country, setCountry] = useState('');

  const countries = [
    'United States',
    'United Kingdom',
    'Canada',
    'Australia',
    'Germany',
    'France',
    'Italy',
    'Spain',
    'Japan',
    'China',
    'India',
    'Brazil',
    'Mexico',
    'Argentina',
  ];

  return (
    <Flex direction="column" gap="2">
      <Datalist
        label="Country"
        description="Select your country"
        value={country}
        onChange={(e) => setCountry(e.target.value)}
        options={countries}
        placeholder="Start typing..."
      />
      {country && (
        <Text size="2" style={{ color: '#666' }}>
          Selected: {country}
        </Text>
      )}
    </Flex>
  );
}`}
        />
      </Section>

      <Section title="Disabled State" description="Disable when the input shouldn't be editable.">
        <LiveExample
          code={`<Datalist
  label="Disabled datalist"
  value="Chrome"
  options={['Chrome', 'Firefox', 'Safari']}
  disabled
  placeholder="Cannot edit"
/>`}
        />
      </Section>

      <Section title="Usage Guidelines">
        <Text size="3" style={{ color: '#666', marginBottom: 16 }}>
          Best practices for using Datalist:
        </Text>
        <ul style={{ color: '#666', fontSize: '14px', lineHeight: 1.8 }}>
          <li><strong>Suggestions, not restrictions:</strong> Users can type any value, suggestions are just helpers</li>
          <li><strong>Common values:</strong> Best for inputs where there are common choices but free-form is allowed</li>
          <li><strong>Native experience:</strong> Uses the browser's native datalist for familiar UX</li>
          <li><strong>Consider Select:</strong> If users must choose from a fixed list, use Select instead</li>
          <li><strong>Validate if needed:</strong> Check if the entered value is valid for your use case</li>
        </ul>
      </Section>

      <Section title="Props">
        <PropTable props={datalistProps} />
      </Section>
    </ComponentDoc>
  );
};
