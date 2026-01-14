import { ComponentDoc, PropTable, LiveExample, Section } from '../../components';
import type { PropDefinition } from '../../components';
import { Text } from '@metorial-io/ui';

const switchProps: PropDefinition[] = [
  {
    name: 'label',
    type: 'string',
    description: 'Label text for the switch',
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
    description: 'Disables the switch',
  },
  {
    name: 'size',
    type: "'1' | '2' | '3'",
    default: "'2'",
    description: 'Size of the switch',
  },
];

export const SwitchDoc = () => {
  return (
    <ComponentDoc
      title="Switch"
      description="A toggle switch component for on/off settings. Built on Radix UI Switch with smooth animations and full accessibility support."
      importStatement="import { Switch } from '@metorial-io/ui';"
      package="ui"
    >
      <Section title="Basic Usage" description="A simple switch with a label.">
        <LiveExample
          code={`function BasicSwitch() {
  const [enabled, setEnabled] = useState(false);

  return (
    <Flex direction="column" gap="2">
      <Switch
        label="Enable notifications"
        checked={enabled}
        onCheckedChange={setEnabled}
      />
      <Text size="2" style={{ color: '#666' }}>
        Notifications are {enabled ? 'enabled' : 'disabled'}
      </Text>
    </Flex>
  );
}`}
        />
      </Section>

      <Section title="Default Checked" description="Use defaultChecked for an uncontrolled switch.">
        <LiveExample
          code={`<Switch
  label="Dark mode"
  defaultChecked={true}
/>`}
        />
      </Section>

      <Section title="Sizes" description="Switches support 3 different sizes.">
        <LiveExample
          code={`<Flex direction="column" gap="4">
  <Switch label="Size 1 (small)" size="1" defaultChecked />
  <Switch label="Size 2 (default)" size="2" defaultChecked />
  <Switch label="Size 3 (large)" size="3" defaultChecked />
</Flex>`}
        />
      </Section>

      <Section title="Disabled State" description="Disable switches when settings shouldn't be changed.">
        <LiveExample
          code={`<Flex direction="column" gap="4">
  <Switch label="Disabled off" disabled />
  <Switch label="Disabled on" disabled defaultChecked />
</Flex>`}
        />
      </Section>

      <Section title="Settings Example" description="Example of switches used for user preferences.">
        <LiveExample
          code={`function SettingsPanel() {
  const [settings, setSettings] = useState({
    emailNotifications: true,
    pushNotifications: false,
    soundEffects: true,
    autoSave: true,
  });

  return (
    <Flex direction="column" gap="3">
      <Text size="4" weight="strong">Settings</Text>
      <Switch
        label="Email notifications"
        checked={settings.emailNotifications}
        onCheckedChange={(checked) =>
          setSettings(prev => ({ ...prev, emailNotifications: checked }))
        }
      />
      <Switch
        label="Push notifications"
        checked={settings.pushNotifications}
        onCheckedChange={(checked) =>
          setSettings(prev => ({ ...prev, pushNotifications: checked }))
        }
      />
      <Switch
        label="Sound effects"
        checked={settings.soundEffects}
        onCheckedChange={(checked) =>
          setSettings(prev => ({ ...prev, soundEffects: checked }))
        }
      />
      <Switch
        label="Auto-save"
        checked={settings.autoSave}
        onCheckedChange={(checked) =>
          setSettings(prev => ({ ...prev, autoSave: checked }))
        }
      />
    </Flex>
  );
}`}
        />
      </Section>

      <Section title="Usage Guidelines">
        <Text size="3" style={{ color: '#666', marginBottom: 16 }}>
          Best practices for using switches:
        </Text>
        <ul style={{ color: '#666', fontSize: '14px', lineHeight: 1.8 }}>
          <li><strong>Immediate action:</strong> Use switches for settings that take effect immediately</li>
          <li><strong>On/off states:</strong> Switches work best for binary on/off or enabled/disabled states</li>
          <li><strong>Consider Checkbox:</strong> For selections that require confirmation (like a form submit), use Checkbox instead</li>
          <li><strong>Clear labels:</strong> Make it obvious what the switch controls</li>
          <li><strong>Show current state:</strong> Consider displaying the current state alongside the switch</li>
        </ul>
      </Section>

      <Section title="Props">
        <PropTable props={switchProps} />
      </Section>
    </ComponentDoc>
  );
};
