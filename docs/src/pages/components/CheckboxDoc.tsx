import { ComponentDoc, PropTable, LiveExample, Section } from '../../components';
import type { PropDefinition } from '../../components';
import { Text } from '@metorial-io/ui';

const checkboxProps: PropDefinition[] = [
  {
    name: 'label',
    type: 'string',
    description: 'Label text for the checkbox',
  },
  {
    name: 'checked',
    type: 'boolean',
    description: 'Controlled checked state',
  },
  {
    name: 'defaultChecked',
    type: 'boolean',
    description: 'Default checked state (uncontrolled)',
  },
  {
    name: 'onCheckedChange',
    type: '(checked: boolean) => void',
    description: 'Callback when checked state changes',
  },
  {
    name: 'disabled',
    type: 'boolean',
    description: 'Disables the checkbox',
  },
  {
    name: 'required',
    type: 'boolean',
    description: 'Makes the checkbox required',
  },
  {
    name: 'size',
    type: "'1' | '2' | '3'",
    default: "'2'",
    description: 'Size of the checkbox',
  },
];

export const CheckboxDoc = () => {
  return (
    <ComponentDoc
      title="Checkbox"
      description="A checkbox component for selecting multiple options. Built on Radix UI Checkbox with full keyboard support and accessibility."
      importStatement="import { Checkbox } from '@metorial-io/ui';"
      package="ui"
    >
      <Section title="Basic Usage" description="A simple checkbox with a label.">
        <LiveExample
          code={`function BasicCheckbox() {
  const [checked, setChecked] = useState(false);

  return (
    <Checkbox
      label="Accept terms and conditions"
      checked={checked}
      onCheckedChange={setChecked}
    />
  );
}`}
        />
      </Section>

      <Section title="Default Checked" description="Use defaultChecked for an uncontrolled checkbox.">
        <LiveExample
          code={`<Checkbox
  label="Remember me"
  defaultChecked={true}
/>`}
        />
      </Section>

      <Section title="Sizes" description="Checkboxes support 3 different sizes.">
        <LiveExample
          code={`<Flex direction="column" gap="4">
  <Checkbox label="Size 1 (small)" size="1" defaultChecked />
  <Checkbox label="Size 2 (default)" size="2" defaultChecked />
  <Checkbox label="Size 3 (large)" size="3" defaultChecked />
</Flex>`}
        />
      </Section>

      <Section title="Disabled State" description="Disable checkboxes when they shouldn't be interactive.">
        <LiveExample
          code={`<Flex direction="column" gap="4">
  <Checkbox label="Disabled unchecked" disabled />
  <Checkbox label="Disabled checked" disabled defaultChecked />
</Flex>`}
        />
      </Section>

      <Section title="Multiple Checkboxes" description="Example of a group of checkboxes for multiple selections.">
        <LiveExample
          code={`function CheckboxGroup() {
  const [selectedFeatures, setSelectedFeatures] = useState({
    notifications: true,
    newsletter: false,
    updates: false,
  });

  return (
    <Flex direction="column" gap="3">
      <Text size="3" weight="strong">Select your preferences</Text>
      <Checkbox
        label="Email notifications"
        checked={selectedFeatures.notifications}
        onCheckedChange={(checked) =>
          setSelectedFeatures(prev => ({ ...prev, notifications: checked }))
        }
      />
      <Checkbox
        label="Newsletter subscription"
        checked={selectedFeatures.newsletter}
        onCheckedChange={(checked) =>
          setSelectedFeatures(prev => ({ ...prev, newsletter: checked }))
        }
      />
      <Checkbox
        label="Product updates"
        checked={selectedFeatures.updates}
        onCheckedChange={(checked) =>
          setSelectedFeatures(prev => ({ ...prev, updates: checked }))
        }
      />
    </Flex>
  );
}`}
        />
      </Section>

      <Section title="Usage Guidelines">
        <Text size="3" style={{ color: '#666', marginBottom: 16 }}>
          Best practices for using checkboxes:
        </Text>
        <ul style={{ color: '#666', fontSize: '14px', lineHeight: 1.8 }}>
          <li><strong>Multiple selections:</strong> Use checkboxes when users can select multiple options</li>
          <li><strong>Always provide labels:</strong> Every checkbox should have a clear, descriptive label</li>
          <li><strong>Use for binary choices:</strong> Checkboxes work best for yes/no or on/off states</li>
          <li><strong>Consider Switch:</strong> For instant actions or settings, use the Switch component instead</li>
          <li><strong>Group related options:</strong> Use Flex or Group to organize related checkboxes</li>
        </ul>
      </Section>

      <Section title="Props">
        <PropTable props={checkboxProps} />
      </Section>
    </ComponentDoc>
  );
};
