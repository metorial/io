import { ComponentDoc, PropTable, LiveExample, Section } from '../../components';
import type { PropDefinition } from '../../components';
import { Text } from '@metorial-io/ui';

const inlineCopyProps: PropDefinition[] = [
  {
    name: 'value',
    type: 'string',
    description: 'The value to copy to clipboard',
  },
  {
    name: 'size',
    type: 'string | number',
    default: '20',
    description: 'Size of the copy icon button',
  },
  {
    name: 'tooltip',
    type: 'string',
    default: "'Copy'",
    description: 'Tooltip text shown on hover',
  },
];

export const InlineCopyDoc = () => {
  return (
    <ComponentDoc
      title="InlineCopy"
      description="A compact inline copy button that appears as an icon. Perfect for adding copy functionality next to text, IDs, or codes without taking up much space."
      importStatement="import { InlineCopy } from '@metorial-io/ui';"
      package="ui"
    >
      <Section title="Basic Usage" description="Add a small copy icon next to any text.">
        <LiveExample
          code={`<Flex align="center" gap="2">
  <Text>user@example.com</Text>
  <InlineCopy value="user@example.com" />
</Flex>`}
        />
      </Section>

      <Section title="With IDs and Codes" description="Perfect for copying identifiers and reference codes.">
        <LiveExample
          code={`<Flex direction="column" gap="3">
  <Flex align="center" gap="2">
    <Text size="2" weight="strong">Order ID:</Text>
    <Text size="2" style={{ fontFamily: 'monospace' }}>ORD-2024-12345</Text>
    <InlineCopy value="ORD-2024-12345" />
  </Flex>

  <Flex align="center" gap="2">
    <Text size="2" weight="strong">Transaction ID:</Text>
    <Text size="2" style={{ fontFamily: 'monospace' }}>TXN-ABC-XYZ-789</Text>
    <InlineCopy value="TXN-ABC-XYZ-789" />
  </Flex>

  <Flex align="center" gap="2">
    <Text size="2" weight="strong">Reference:</Text>
    <Text size="2" style={{ fontFamily: 'monospace' }}>REF-987654</Text>
    <InlineCopy value="REF-987654" />
  </Flex>
</Flex>`}
        />
      </Section>

      <Section title="Custom Size" description="Adjust the size of the copy button.">
        <LiveExample
          code={`<Flex direction="column" gap="3">
  <Flex align="center" gap="2">
    <Text size="1">Small</Text>
    <InlineCopy value="small-value" size={16} />
  </Flex>

  <Flex align="center" gap="2">
    <Text size="2">Default</Text>
    <InlineCopy value="default-value" size={20} />
  </Flex>

  <Flex align="center" gap="2">
    <Text size="3">Large</Text>
    <InlineCopy value="large-value" size={24} />
  </Flex>
</Flex>`}
        />
      </Section>

      <Section title="Custom Tooltip" description="Provide custom tooltip text for better context.">
        <LiveExample
          code={`<Flex direction="column" gap="3">
  <Flex align="center" gap="2">
    <Text>sk_live_abc123xyz789</Text>
    <InlineCopy value="sk_live_abc123xyz789" tooltip="Copy API key" />
  </Flex>

  <Flex align="center" gap="2">
    <Text>https://example.com/webhook</Text>
    <InlineCopy value="https://example.com/webhook" tooltip="Copy webhook URL" />
  </Flex>
</Flex>`}
        />
      </Section>

      <Section title="In Tables" description="Use InlineCopy in table cells for easy copying of data.">
        <LiveExample
          code={`<div style={{ border: '1px solid #e5e5e5', borderRadius: 8, overflow: 'hidden' }}>
  <table style={{ width: '100%', borderCollapse: 'collapse' }}>
    <thead>
      <tr style={{ background: '#f5f5f5', borderBottom: '1px solid #e5e5e5' }}>
        <th style={{ padding: '12px', textAlign: 'left' }}>Name</th>
        <th style={{ padding: '12px', textAlign: 'left' }}>Email</th>
        <th style={{ padding: '12px', textAlign: 'left' }}>ID</th>
      </tr>
    </thead>
    <tbody>
      <tr style={{ borderBottom: '1px solid #e5e5e5' }}>
        <td style={{ padding: '12px' }}>John Doe</td>
        <td style={{ padding: '12px' }}>
          <Flex align="center" gap="2">
            john@example.com
            <InlineCopy value="john@example.com" size={16} />
          </Flex>
        </td>
        <td style={{ padding: '12px' }}>
          <Flex align="center" gap="2">
            <Text style={{ fontFamily: 'monospace' }}>USR-001</Text>
            <InlineCopy value="USR-001" size={16} />
          </Flex>
        </td>
      </tr>
      <tr style={{ borderBottom: '1px solid #e5e5e5' }}>
        <td style={{ padding: '12px' }}>Jane Smith</td>
        <td style={{ padding: '12px' }}>
          <Flex align="center" gap="2">
            jane@example.com
            <InlineCopy value="jane@example.com" size={16} />
          </Flex>
        </td>
        <td style={{ padding: '12px' }}>
          <Flex align="center" gap="2">
            <Text style={{ fontFamily: 'monospace' }}>USR-002</Text>
            <InlineCopy value="USR-002" size={16} />
          </Flex>
        </td>
      </tr>
    </tbody>
  </table>
</div>`}
        />
      </Section>

      <Section title="With Attributes" description="Combine with Attributes component for copyable metadata.">
        <LiveExample
          code={`<Attributes
  attributes={[
    {
      label: 'API Key',
      content: (
        <Flex align="center" gap="2">
          <Text size="2" style={{ fontFamily: 'monospace' }}>
            sk_live_abc123xyz789
          </Text>
          <InlineCopy value="sk_live_abc123xyz789" />
        </Flex>
      )
    },
    {
      label: 'Client ID',
      content: (
        <Flex align="center" gap="2">
          <Text size="2" style={{ fontFamily: 'monospace' }}>
            client_def456uvw012
          </Text>
          <InlineCopy value="client_def456uvw012" />
        </Flex>
      )
    },
    {
      label: 'User ID',
      content: (
        <Flex align="center" gap="2">
          <Text size="2" style={{ fontFamily: 'monospace' }}>
            user_ghi789rst345
          </Text>
          <InlineCopy value="user_ghi789rst345" />
        </Flex>
      )
    }
  ]}
/>`}
        />
      </Section>

      <Section title="Usage Guidelines">
        <Text size="3" style={{ color: '#666', marginBottom: 16 }}>
          Best practices for using InlineCopy:
        </Text>
        <ul style={{ color: '#666', fontSize: '14px', lineHeight: 1.8 }}>
          <li><strong>Inline placement:</strong> Use next to text for a seamless inline copy experience</li>
          <li><strong>Technical data:</strong> Perfect for IDs, codes, emails, URLs, and tokens</li>
          <li><strong>Tooltip clarity:</strong> Customize tooltip text to indicate what will be copied</li>
          <li><strong>Size matching:</strong> Adjust size to match surrounding text size</li>
          <li><strong>Visual feedback:</strong> Icon changes to checkmark and shows toast on copy</li>
          <li><strong>Accessibility:</strong> Button has proper aria-label from tooltip</li>
        </ul>
      </Section>

      <Section title="Props">
        <PropTable props={inlineCopyProps} />
      </Section>
    </ComponentDoc>
  );
};
