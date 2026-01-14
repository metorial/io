import { ComponentDoc, PropTable, LiveExample, Section } from '../../components';
import type { PropDefinition } from '../../components';
import { Text } from '@metorial-io/ui';

const sliderProps: PropDefinition[] = [
  {
    name: 'label',
    type: 'string',
    description: 'Label text for the slider',
  },
  {
    name: 'value',
    type: 'number[]',
    description: 'Controlled value (array with single or multiple values)',
  },
  {
    name: 'defaultValue',
    type: 'number[]',
    description: 'Default value (uncontrolled)',
  },
  {
    name: 'onValueChange',
    type: '(value: number[]) => void',
    description: 'Callback when value changes',
  },
  {
    name: 'min',
    type: 'number',
    default: '0',
    description: 'Minimum value',
  },
  {
    name: 'max',
    type: 'number',
    default: '100',
    description: 'Maximum value',
  },
  {
    name: 'step',
    type: 'number',
    default: '1',
    description: 'Step increment',
  },
  {
    name: 'disabled',
    type: 'boolean',
    description: 'Disables the slider',
  },
  {
    name: 'size',
    type: "'1' | '2' | '3'",
    default: "'2'",
    description: 'Size of the slider',
  },
];

export const SliderDoc = () => {
  return (
    <ComponentDoc
      title="Slider"
      description="A slider component for selecting numeric values from a range. Built on Radix UI Slider with smooth animations and full keyboard support."
      importStatement="import { Slider } from '@metorial-io/ui';"
      package="ui"
    >
      <Section title="Basic Usage" description="A simple slider with a label and value display.">
        <LiveExample
          code={`function BasicSlider() {
  const [value, setValue] = useState([50]);

  return (
    <Flex direction="column" gap="2">
      <Slider
        label="Volume"
        value={value}
        onValueChange={setValue}
      />
      <Text size="2" style={{ color: '#666' }}>
        Value: {value[0]}
      </Text>
    </Flex>
  );
}`}
        />
      </Section>

      <Section title="Custom Range" description="Set custom min, max, and step values.">
        <LiveExample
          code={`function CustomRange() {
  const [value, setValue] = useState([0]);

  return (
    <Flex direction="column" gap="2">
      <Slider
        label="Price ($)"
        value={value}
        onValueChange={setValue}
        min={0}
        max={1000}
        step={50}
      />
      <Text size="2" style={{ color: '#666' }}>
        \${value[0]}
      </Text>
    </Flex>
  );
}`}
        />
      </Section>

      <Section title="Sizes" description="Sliders support 3 different sizes.">
        <LiveExample
          code={`<Flex direction="column" gap="4">
  <Slider label="Size 1 (small)" size="1" defaultValue={[25]} />
  <Slider label="Size 2 (default)" size="2" defaultValue={[50]} />
  <Slider label="Size 3 (large)" size="3" defaultValue={[75]} />
</Flex>`}
        />
      </Section>

      <Section title="Disabled State" description="Disable sliders when they shouldn't be interactive.">
        <LiveExample
          code={`<Slider
  label="Disabled slider"
  defaultValue={[60]}
  disabled
/>`}
        />
      </Section>

      <Section title="Percentage Example" description="Common use case with percentage values.">
        <LiveExample
          code={`function PercentageSlider() {
  const [value, setValue] = useState([75]);

  return (
    <Flex direction="column" gap="3">
      <Slider
        label="Brightness"
        value={value}
        onValueChange={setValue}
        min={0}
        max={100}
      />
      <Text size="3" weight="strong">
        {value[0]}%
      </Text>
    </Flex>
  );
}`}
        />
      </Section>

      <Section title="Usage Guidelines">
        <Text size="3" style={{ color: '#666', marginBottom: 16 }}>
          Best practices for using sliders:
        </Text>
        <ul style={{ color: '#666', fontSize: '14px', lineHeight: 1.8 }}>
          <li><strong>Show current value:</strong> Always display the current value to the user</li>
          <li><strong>Appropriate step sizes:</strong> Choose step values that make sense for your use case</li>
          <li><strong>Consider alternatives:</strong> For precise numeric input, consider using Input with type="number"</li>
          <li><strong>Visual feedback:</strong> The slider track shows the selected range visually</li>
          <li><strong>Label units:</strong> Include units (%, $, etc.) in the label or value display</li>
        </ul>
      </Section>

      <Section title="Props">
        <PropTable props={sliderProps} />
      </Section>
    </ComponentDoc>
  );
};
