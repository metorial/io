import { Text } from '@metorial-io/ui';
import type { PropDefinition } from '../../components';
import { ComponentDoc, LiveExample, PropTable, Section } from '../../components';

const datePickerProps: PropDefinition[] = [
  {
    name: 'label',
    type: 'string',
    description: 'Label text for the date picker'
  },
  {
    name: 'value',
    type: 'Date',
    description: 'Controlled date value'
  },
  {
    name: 'onChange',
    type: '(date: Date | undefined) => void',
    description: 'Callback when date changes'
  },
  {
    name: 'placeholder',
    type: 'string',
    default: "'Pick a date'",
    description: 'Placeholder text when no date is selected'
  },
  {
    name: 'disabled',
    type: 'boolean',
    description: 'Disables the date picker'
  },
  {
    name: 'error',
    type: 'string',
    description: 'Error message to display'
  },
  {
    name: 'description',
    type: 'string',
    description: 'Helper text displayed below the picker'
  },
  {
    name: 'size',
    type: "'1' | '2' | '3'",
    default: "'3'",
    description: 'Size of the date picker'
  }
];

export const DatePickerDoc = () => {
  return (
    <ComponentDoc
      title="DatePicker"
      description="A date picker component for selecting dates with a calendar interface. Built with Radix UI Popover and React DayPicker for an accessible, keyboard-navigable experience."
      importStatement="import { DatePicker } from '@metorial-io/ui';"
      package="ui"
    >
      <Section title="Basic Usage" description="A simple date picker with a label.">
        <LiveExample
          code={`function BasicDatePicker() {
  const [date, setDate] = useState();

  return (
    <Flex direction="column" gap="2">
      <DatePicker
        label="Birth date"
        value={date}
        onChange={setDate}
        placeholder="Select your birth date"
      />
      {date && (
        <Text size="2" style={{ color: '#666' }}>
          Selected: {JSON.stringify(date)}
        </Text>
      )}
    </Flex>
  );
}`}
        />
      </Section>

      <Section
        title="With Description"
        description="Add helper text to provide additional context."
      >
        <LiveExample
          code={`function DatePickerWithDescription() {
  const [date, setDate] = useState();

  return (
    <DatePicker
      label="Appointment date"
      description="Select a date for your appointment"
      value={date}
      onChange={setDate}
    />
  );
}`}
        />
      </Section>

      <Section title="With Error" description="Display validation errors.">
        <LiveExample
          code={`function DatePickerWithError() {
  const [date, setDate] = useState();
  const today = new Date();
  const error = date && date < today ? 'Date must be in the future' : '';

  return (
    <DatePicker
      label="Event date"
      value={date}
      onChange={setDate}
      error={error}
    />
  );
}`}
        />
      </Section>

      <Section title="Sizes" description="Date pickers support 3 different sizes.">
        <LiveExample
          code={`<Flex direction="column" gap="4">
  <DatePicker label="Size 1 (small)" size="1" />
  <DatePicker label="Size 2" size="2" />
  <DatePicker label="Size 3 (default)" size="3" />
</Flex>`}
        />
      </Section>

      <Section
        title="Disabled State"
        description="Disable the date picker when it shouldn't be editable."
      >
        <LiveExample
          code={`<DatePicker
  label="Disabled date picker"
  disabled
  placeholder="Cannot select date"
/>`}
        />
      </Section>

      <Section title="Form Example" description="Example of using date pickers in a form.">
        <LiveExample
          code={`function DateForm() {
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();

  return (
    <Flex direction="column" gap="4">
      <Text size="4" weight="strong">Event Details</Text>
      <DatePicker
        label="Start date"
        value={startDate}
        onChange={setStartDate}
        placeholder="Select start date"
      />
      <DatePicker
        label="End date"
        value={endDate}
        onChange={setEndDate}
        placeholder="Select end date"
        error={
          startDate && endDate && endDate < startDate
            ? 'End date must be after start date'
            : ''
        }
      />
    </Flex>
  );
}`}
        />
      </Section>

      <Section title="Usage Guidelines">
        <Text size="3" style={{ color: '#666', marginBottom: 16 }}>
          Best practices for using date pickers:
        </Text>
        <ul style={{ color: '#666', fontSize: '14px', lineHeight: 1.8 }}>
          <li>
            <strong>Clear labels:</strong> Make it obvious what the date is for
          </li>
          <li>
            <strong>Helpful placeholders:</strong> Use placeholders to guide users
          </li>
          <li>
            <strong>Validate dates:</strong> Check for valid date ranges and show errors
          </li>
          <li>
            <strong>Keyboard navigation:</strong> The calendar supports full keyboard
            navigation
          </li>
          <li>
            <strong>Date format:</strong> Display selected dates in a clear, localized format
          </li>
        </ul>
      </Section>

      <Section title="Props">
        <PropTable props={datePickerProps} />
      </Section>
    </ComponentDoc>
  );
};
