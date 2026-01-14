import { ComponentDoc, PropTable, LiveExample, Section } from '../../components';
import type { PropDefinition } from '../../components';
import { Text } from '@metorial-io/ui';

const useCopyParams: PropDefinition[] = [
  {
    name: 'initialValue',
    type: 'string',
    description: 'Optional initial value to copy',
  },
];

const useCopyReturn: PropDefinition[] = [
  {
    name: 'copy',
    type: '(text: string) => void',
    description: 'Function to copy text to clipboard',
  },
  {
    name: 'copied',
    type: 'boolean',
    description: 'Whether text was recently copied (resets after 2 seconds)',
  },
];

export const UseCopyDoc = () => {
  return (
    <ComponentDoc
      title="useCopy"
      description="A React hook for copying text to the clipboard with automatic feedback state. Provides a simple interface for copy-to-clipboard functionality with built-in success indication."
      importStatement="import { useCopy } from '@metorial-io/ui';"
      package="ui"
    >
      <Section title="Basic Usage" description="Copy text to clipboard with feedback.">
        <LiveExample
          code={`function CopyExample() {
  const { copy, copied } = useCopy();

  return (
    <Flex gap="3" align="center">
      <Button onClick={() => copy('Hello, World!')}>
        {copied ? 'Copied!' : 'Copy Text'}
      </Button>
      {copied && (
        <Text size="2" style={{ color: '#16a34a' }}>
          ✓ Copied to clipboard
        </Text>
      )}
    </Flex>
  );
}`}
        />
      </Section>

      <Section title="With Input Field" description="Copy user input to clipboard.">
        <LiveExample
          code={`function CopyInput() {
  const [text, setText] = useState('Copy me!');
  const { copy, copied } = useCopy();

  return (
    <Flex direction="column" gap="3">
      <Input
        label="Text to copy"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <Button onClick={() => copy(text)} iconLeft={copied ? <RiCheckLine /> : <RiFileCopyLine />}>
        {copied ? 'Copied!' : 'Copy to Clipboard'}
      </Button>
    </Flex>
  );
}`}
        />
      </Section>

      <Section title="Copy Code Snippets" description="Useful for code blocks and examples.">
        <LiveExample
          code={`function CodeCopy() {
  const { copy, copied } = useCopy();

  const codeSnippet = \`import { Button } from '@metorial-io/ui';

function App() {
  return <Button>Click me</Button>;
}\`;

  return (
    <Flex direction="column" gap="2">
      <Flex justify="between" align="center">
        <Text size="2" weight="strong">Example Code</Text>
        <Button
          size="1"
          variant="ghost"
          onClick={() => copy(codeSnippet)}
        >
          {copied ? 'Copied!' : 'Copy'}
        </Button>
      </Flex>
      <pre style={{
        background: '#f8f8f8',
        padding: '16px',
        borderRadius: '6px',
        fontSize: '13px',
        overflow: 'auto'
      }}>
        {codeSnippet}
      </pre>
    </Flex>
  );
}`}
        />
      </Section>

      <Section title="Copy Button with Tooltip" description="Show feedback in a tooltip.">
        <LiveExample
          code={`function CopyWithTooltip() {
  const { copy, copied } = useCopy();
  const apiKey = 'sk_test_1234567890abcdef';

  return (
    <Flex direction="column" gap="3">
      <Flex gap="2" align="center">
        <Text size="2" style={{ fontFamily: 'monospace', color: '#666' }}>
          {apiKey}
        </Text>
        <Tooltip content={copied ? 'Copied!' : 'Copy API key'}>
          <Button
            size="1"
            variant="ghost"
            onClick={() => copy(apiKey)}
            iconLeft={copied ? <RiCheckLine /> : <RiFileCopyLine />}
          />
        </Tooltip>
      </Flex>
    </Flex>
  );
}`}
        />
      </Section>

      <Section title="Multiple Copy Actions" description="Use multiple copy hooks in one component.">
        <LiveExample
          code={`function MultiCopy() {
  const email = useCopy();
  const phone = useCopy();
  const address = useCopy();

  return (
    <Flex direction="column" gap="3">
      <Flex gap="2" align="center">
        <Text size="2">john@example.com</Text>
        <Button
          size="1"
          variant="ghost"
          onClick={() => email.copy('john@example.com')}
        >
          {email.copied ? 'Copied!' : 'Copy'}
        </Button>
      </Flex>
      <Flex gap="2" align="center">
        <Text size="2">+1 (555) 123-4567</Text>
        <Button
          size="1"
          variant="ghost"
          onClick={() => phone.copy('+1 (555) 123-4567')}
        >
          {phone.copied ? 'Copied!' : 'Copy'}
        </Button>
      </Flex>
      <Flex gap="2" align="center">
        <Text size="2">123 Main St, City</Text>
        <Button
          size="1"
          variant="ghost"
          onClick={() => address.copy('123 Main St, City')}
        >
          {address.copied ? 'Copied!' : 'Copy'}
        </Button>
      </Flex>
    </Flex>
  );
}`}
        />
      </Section>

      <Section title="Copy with Notification" description="Show a toast notification on copy.">
        <LiveExample
          code={`function CopyWithToast() {
  const { copy, copied } = useCopy();

  const handleCopy = (text) => {
    copy(text);
    // You could integrate with a toast library here
    console.log('Copied:', text);
  };

  return (
    <Flex gap="3">
      <Button onClick={() => handleCopy('Option 1')}>
        Copy Option 1
      </Button>
      <Button onClick={() => handleCopy('Option 2')}>
        Copy Option 2
      </Button>
      {copied && (
        <Badge color="green">Copied!</Badge>
      )}
    </Flex>
  );
}`}
        />
      </Section>

      <Section title="Usage Guidelines">
        <Text size="3" style={{ color: '#666', marginBottom: 16 }}>
          Best practices for using the useCopy hook:
        </Text>
        <ul style={{ color: '#666', fontSize: '14px', lineHeight: 1.8 }}>
          <li><strong>Visual feedback:</strong> Always show when copy succeeds (button text, icon, or toast)</li>
          <li><strong>Auto-reset:</strong> The copied state automatically resets after 2 seconds</li>
          <li><strong>Accessibility:</strong> Use clear button labels and aria-labels</li>
          <li><strong>Error handling:</strong> The hook handles clipboard API errors gracefully</li>
          <li><strong>Multiple instances:</strong> You can use multiple useCopy hooks in the same component</li>
        </ul>
      </Section>

      <Section title="Parameters">
        <PropTable props={useCopyParams} />
      </Section>

      <Section title="Returns">
        <PropTable props={useCopyReturn} />
      </Section>
    </ComponentDoc>
  );
};
