import { Text } from '@metorial-io/ui';
import type { PropDefinition } from '../../components';
import { ComponentDoc, LiveExample, PropTable, Section } from '../../components';

const spinnerProps: PropDefinition[] = [
  {
    name: 'size',
    type: "'1' | '2' | '3' | '4' | '5'",
    default: "'3'",
    description: 'Size of the spinner'
  },
  {
    name: 'color',
    type: 'ColorType',
    default: 'gray',
    description: 'Color of the spinner'
  }
];

export const SpinnerDoc = () => {
  return (
    <ComponentDoc
      title="Spinner"
      description="A loading spinner component for indicating processing or loading states. Animated with CSS for smooth performance."
      importStatement="import { Spinner } from '@metorial-io/ui';"
      package="ui"
    >
      <Section title="Basic Usage" description="A simple loading spinner.">
        <LiveExample
          code={`<Flex gap="4" align="center">
  <Spinner />
  <Text size="2" style={{ color: '#666' }}>Loading...</Text>
</Flex>`}
        />
      </Section>

      <Section title="Sizes" description="Spinners support 5 different sizes.">
        <LiveExample
          code={`<Flex gap="4" align="center">
  <Spinner size="1" />
  <Spinner size="2" />
  <Spinner size="3" />
  <Spinner size="4" />
  <Spinner size="5" />
</Flex>`}
        />
      </Section>

      <Section title="Colors" description="Spinners can use any color from the design system.">
        <LiveExample
          code={`<Flex gap="4" align="center" style={{ flexWrap: 'wrap' }}>
  <Spinner color="gray" />
  <Spinner color="blue" />
  <Spinner color="green" />
  <Spinner color="red" />
  <Spinner color="violet" />
  <Spinner color="orange" />
</Flex>`}
        />
      </Section>

      <Section
        title="In Buttons"
        description="Common pattern of showing a spinner in a loading button."
      >
        <LiveExample
          code={`function LoadingButton() {
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <Button
      onClick={handleClick}
      disabled={loading}
      iconLeft={loading ? <Spinner size="2" color="gray" /> : null}
      loading={loading}
    >
      Click me
    </Button>
  );
}`}
        />
      </Section>

      <Section
        title="Centered Loading State"
        description="Full-width centered loading indicator."
      >
        <LiveExample
          code={`<Flex
  direction="column"
  align="center"
  justify="center"
  gap="3"
  style={{ padding: '60px', border: '1px solid #e5e5e5', borderRadius: 8 }}
>
  <Spinner size="4" color="blue" />
  <Text size="3" style={{ color: '#666' }}>
    Loading your data...
  </Text>
</Flex>`}
        />
      </Section>

      <Section title="Inline with Text" description="Spinner inline with text content.">
        <LiveExample
          code={`<Flex gap="2" align="center">
  <Spinner size="2" />
  <Text size="2">Fetching latest updates</Text>
</Flex>`}
        />
      </Section>

      <Section title="Usage Guidelines">
        <Text size="3" style={{ color: '#666', marginBottom: 16 }}>
          Best practices for using spinners:
        </Text>
        <ul style={{ color: '#666', fontSize: '14px', lineHeight: 1.8 }}>
          <li>
            <strong>Provide context:</strong> Always pair with text explaining what's loading
          </li>
          <li>
            <strong>Appropriate sizing:</strong> Match spinner size to its context (small in
            buttons, larger for page loads)
          </li>
          <li>
            <strong>Color contrast:</strong> Use colors that are visible against the background
          </li>
          <li>
            <strong>Don't overuse:</strong> Only show spinners when necessary for clarity
          </li>
          <li>
            <strong>Consider skeleton loaders:</strong> For complex UIs, skeleton screens may
            provide better UX
          </li>
        </ul>
      </Section>

      <Section title="Props">
        <PropTable props={spinnerProps} />
      </Section>
    </ComponentDoc>
  );
};
