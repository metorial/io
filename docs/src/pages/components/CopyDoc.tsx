import { Text } from '@metorial-io/ui';
import type { PropDefinition } from '../../components';
import { ComponentDoc, LiveExample, PropTable, Section } from '../../components';

const copyProps: PropDefinition[] = [
  {
    name: 'value',
    type: 'string',
    description: 'The text value to display'
  },
  {
    name: 'copyValue',
    type: 'string',
    description: 'Optional different value to copy (if different from displayed value)'
  },
  {
    name: 'label',
    type: 'string',
    description: 'Optional label displayed above the copy box'
  }
];

const useCopyProps: PropDefinition[] = [
  {
    name: 'copied',
    type: 'boolean',
    description: 'Whether the value has been recently copied'
  },
  {
    name: 'copy',
    type: '(value?: string) => void',
    description: 'Function to copy the value to clipboard'
  }
];

export const CopyDoc = () => {
  return (
    <ComponentDoc
      title="Copy"
      description="A component for displaying text with a click-to-copy feature. Shows visual feedback when content is copied to the clipboard."
      importStatement="import { Copy, useCopy } from '@metorial-io/ui';"
      package="ui"
    >
      <Section
        title="Basic Usage"
        description="Display copyable text with automatic copy feedback."
      >
        <LiveExample code={`<Copy value="npm install @metorial-io/ui" />`} />
      </Section>

      <Section title="With Label" description="Add a label above the copy box for context.">
        <LiveExample
          code={`<Flex direction="column" gap="3">
  <Copy
    label="Installation Command"
    value="npm install @metorial-io/ui"
  />

  <Copy
    label="Import Statement"
    value="import { Button, Input } from '@metorial-io/ui';"
  />
</Flex>`}
        />
      </Section>

      <Section
        title="Different Copy Value"
        description="Display one value but copy a different one."
      >
        <LiveExample
          code={`<Copy
  label="API Key"
  value="sk_live_************************xyz789"
  copyValue="sk_live_abc123xyz789"
/>`}
        />
      </Section>

      <Section title="Long Text" description="Copy component handles long text with wrapping.">
        <LiveExample
          code={`<Copy
  label="API Endpoint"
  value="https://api.example.com/v1/users/12345/projects/67890/analytics?from=2024-01-01&to=2024-12-31&format=json"
/>`}
        />
      </Section>

      <Section
        title="Multiple Copy Blocks"
        description="Stack multiple copy components for different values."
      >
        <LiveExample
          code={`<Flex direction="column" gap="3">
  <Copy
    label="Public Key"
    value="pk_test_abc123XYZ456DEF789GHI012JKL345MNO678"
  />

  <Copy
    label="Secret Key"
    value="sk_test_abc123XYZ456DEF789GHI012JKL345MNO678"
  />

  <Copy
    label="Webhook Secret"
    value="whsec_abc123def456ghi789jkl012mno345pqr678stu"
  />
</Flex>`}
        />
      </Section>

      <Section
        title="Using useCopy Hook"
        description="Build custom copy functionality with the useCopy hook."
      >
        <LiveExample
          code={`function CustomCopyButton() {
  const { copied, copy } = useCopy('Hello, World!');

  return (
    <Flex direction="column" gap="3">
      <Button
        onClick={() => copy()}
        iconLeft={copied ? <RiCheckLine /> : <RiFileCopyLine />}
      >
        {copied ? 'Copied!' : 'Copy Text'}
      </Button>

      <Text size="2" color="gray600">
        Click the button to copy "Hello, World!" to clipboard
      </Text>
    </Flex>
  );
}`}
        />
      </Section>

      <Section
        title="Custom Copy Component"
        description="Create custom UI with the useCopy hook."
      >
        <LiveExample
          code={`function CustomCopyField() {
  const apiKey = 'sk_live_abc123xyz789';
  const { copied, copy } = useCopy(apiKey);

  return (
    <Flex direction="column" gap="2">
      <Text size="2" weight="strong">API Key</Text>
      <Flex gap="2">
        <Input
          value={apiKey}
          readOnly
          style={{ fontFamily: 'monospace', flex: 1 }}
        />
        <Button
          onClick={() => copy()}
          variant={copied ? 'soft' : 'outline'}
          iconLeft={copied ? <RiCheckLine /> : <RiFileCopyLine />}
        >
          {copied ? 'Copied' : 'Copy'}
        </Button>
      </Flex>
    </Flex>
  );
}`}
        />
      </Section>

      <Section title="Usage Guidelines">
        <Text size="3" style={{ color: '#666', marginBottom: 16 }}>
          Best practices for using Copy:
        </Text>
        <ul style={{ color: '#666', fontSize: '14px', lineHeight: 1.8 }}>
          <li>
            <strong>Technical content:</strong> Use for API keys, tokens, commands, and code
            snippets
          </li>
          <li>
            <strong>Clear labels:</strong> Always label what is being copied for context
          </li>
          <li>
            <strong>Visual feedback:</strong> Component shows clear feedback when content is
            copied
          </li>
          <li>
            <strong>Toast notification:</strong> A success toast appears when copying
          </li>
          <li>
            <strong>Sensitive data:</strong> Consider masking sensitive values in the display
          </li>
          <li>
            <strong>Custom UI:</strong> Use useCopy hook for custom copy implementations
          </li>
        </ul>
      </Section>

      <Section title="Copy Props">
        <PropTable props={copyProps} />
      </Section>

      <Section title="useCopy Hook Return">
        <PropTable props={useCopyProps} />
      </Section>
    </ComponentDoc>
  );
};
