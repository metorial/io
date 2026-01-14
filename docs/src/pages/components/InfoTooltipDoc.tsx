import { ComponentDoc, PropTable, LiveExample, Section } from '../../components';
import type { PropDefinition } from '../../components';
import { Text } from '@metorial-io/ui';

const infoTooltipProps: PropDefinition[] = [
  {
    name: 'children',
    type: 'React.ReactNode',
    description: 'The tooltip content to display',
  },
  {
    name: 'size',
    type: 'string | number',
    default: '20',
    description: 'Size of the info icon',
  },
];

export const InfoTooltipDoc = () => {
  return (
    <ComponentDoc
      title="InfoTooltip"
      description="A small info icon with a tooltip that displays helpful information. Perfect for providing contextual help next to labels, headings, or form fields."
      importStatement="import { InfoTooltip } from '@metorial-io/ui';"
      package="ui"
    >
      <Section title="Basic Usage" description="Add contextual help with a simple info icon.">
        <LiveExample
          code={`<Flex align="center" gap="2">
  <Text weight="strong">Account Type</Text>
  <InfoTooltip>
    Your account type determines which features you have access to.
  </InfoTooltip>
</Flex>`}
        />
      </Section>

      <Section title="With Form Labels" description="Provide helpful information next to form field labels.">
        <LiveExample
          code={`<Flex direction="column" gap="3">
  <div>
    <Flex align="center" gap="2" style={{ marginBottom: 8 }}>
      <Text size="2" weight="strong">Username</Text>
      <InfoTooltip>
        Your username must be unique and between 3-20 characters.
      </InfoTooltip>
    </Flex>
    <Input placeholder="Enter username" />
  </div>

  <div>
    <Flex align="center" gap="2" style={{ marginBottom: 8 }}>
      <Text size="2" weight="strong">API Key</Text>
      <InfoTooltip>
        Your API key is used to authenticate requests to our API. Keep it secure!
      </InfoTooltip>
    </Flex>
    <Input type="password" placeholder="Enter API key" />
  </div>

  <div>
    <Flex align="center" gap="2" style={{ marginBottom: 8 }}>
      <Text size="2" weight="strong">Webhook URL</Text>
      <InfoTooltip>
        We'll send POST requests to this URL when events occur in your account.
      </InfoTooltip>
    </Flex>
    <Input placeholder="https://example.com/webhook" />
  </div>
</Flex>`}
        />
      </Section>

      <Section title="Custom Size" description="Adjust the size of the info icon to match your text.">
        <LiveExample
          code={`<Flex direction="column" gap="3">
  <Flex align="center" gap="2">
    <Text size="1">Small text</Text>
    <InfoTooltip size={16}>This is a smaller info icon</InfoTooltip>
  </Flex>

  <Flex align="center" gap="2">
    <Text size="2">Default text</Text>
    <InfoTooltip size={20}>This is the default size</InfoTooltip>
  </Flex>

  <Flex align="center" gap="2">
    <Text size="3">Larger text</Text>
    <InfoTooltip size={24}>This is a larger info icon</InfoTooltip>
  </Flex>
</Flex>`}
        />
      </Section>

      <Section title="In Settings" description="Use InfoTooltip to explain settings and options.">
        <LiveExample
          code={`<Flex direction="column" gap="4">
  <Flex align="center" gap="2">
    <Checkbox label="Enable notifications" />
    <InfoTooltip>
      Receive email and push notifications for important updates.
    </InfoTooltip>
  </Flex>

  <Flex align="center" gap="2">
    <Checkbox label="Two-factor authentication" />
    <InfoTooltip>
      Add an extra layer of security by requiring a code from your phone.
    </InfoTooltip>
  </Flex>

  <Flex align="center" gap="2">
    <Checkbox label="Data sharing" />
    <InfoTooltip>
      Allow us to share anonymized usage data to improve the product.
    </InfoTooltip>
  </Flex>
</Flex>`}
        />
      </Section>

      <Section title="With Headers" description="Add helpful context to section headers.">
        <LiveExample
          code={`<Flex direction="column" gap="4">
  <Flex align="center" gap="2">
    <Text size="4" weight="strong">Security Settings</Text>
    <InfoTooltip>
      Configure security options to protect your account.
    </InfoTooltip>
  </Flex>

  <Flex align="center" gap="2">
    <Text size="3" weight="strong">Privacy Controls</Text>
    <InfoTooltip>
      Manage who can see your profile and activity.
    </InfoTooltip>
  </Flex>

  <Flex align="center" gap="2">
    <Text size="3" weight="strong">Email Preferences</Text>
    <InfoTooltip>
      Choose which emails you want to receive from us.
    </InfoTooltip>
  </Flex>
</Flex>`}
        />
      </Section>

      <Section title="In Tables" description="Provide context for table column headers.">
        <LiveExample
          code={`<div style={{ border: '1px solid #e5e5e5', borderRadius: 8, overflow: 'hidden' }}>
  <table style={{ width: '100%', borderCollapse: 'collapse' }}>
    <thead>
      <tr style={{ background: '#f5f5f5', borderBottom: '1px solid #e5e5e5' }}>
        <th style={{ padding: '12px', textAlign: 'left' }}>
          <Flex align="center" gap="2">
            Name
          </Flex>
        </th>
        <th style={{ padding: '12px', textAlign: 'left' }}>
          <Flex align="center" gap="2">
            Status
            <InfoTooltip size={16}>
              Current status of the project
            </InfoTooltip>
          </Flex>
        </th>
        <th style={{ padding: '12px', textAlign: 'left' }}>
          <Flex align="center" gap="2">
            Score
            <InfoTooltip size={16}>
              Calculated based on activity and engagement
            </InfoTooltip>
          </Flex>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr style={{ borderBottom: '1px solid #e5e5e5' }}>
        <td style={{ padding: '12px' }}>Project Alpha</td>
        <td style={{ padding: '12px' }}><Badge color="green">Active</Badge></td>
        <td style={{ padding: '12px' }}>92</td>
      </tr>
    </tbody>
  </table>
</div>`}
        />
      </Section>

      <Section title="Usage Guidelines">
        <Text size="3" style={{ color: '#666', marginBottom: 16 }}>
          Best practices for using InfoTooltip:
        </Text>
        <ul style={{ color: '#666', fontSize: '14px', lineHeight: 1.8 }}>
          <li><strong>Supplementary information:</strong> Use for helpful context, not critical information</li>
          <li><strong>Keep it brief:</strong> Tooltip content should be concise and easy to read</li>
          <li><strong>Form fields:</strong> Especially useful for explaining complex or technical fields</li>
          <li><strong>Size matching:</strong> Adjust icon size to match surrounding text</li>
          <li><strong>Hover interaction:</strong> Users must hover to see the tooltip</li>
          <li><strong>Don't overuse:</strong> Too many info icons can clutter the UI</li>
        </ul>
      </Section>

      <Section title="Props">
        <PropTable props={infoTooltipProps} />
      </Section>
    </ComponentDoc>
  );
};
