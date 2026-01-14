import { ComponentDoc, PropTable, LiveExample, Section } from '../../components';
import type { PropDefinition } from '../../components';
import { Text } from '@metorial-io/ui';

const textProps: PropDefinition[] = [
  {
    name: 'size',
    type: "'1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'",
    default: "'2'",
    description: 'Font size (1 = 12px, 2 = 14px, 9 = 60px)',
  },
  {
    name: 'weight',
    type: "'light' | 'regular' | 'medium' | 'strong' | 'bold'",
    default: "'regular'",
    description: 'Font weight',
  },
  {
    name: 'align',
    type: "'left' | 'center' | 'right'",
    description: 'Text alignment',
  },
  {
    name: 'wrap',
    type: "'wrap' | 'nowrap' | 'balance'",
    description: 'Text wrapping behavior',
  },
  {
    name: 'color',
    type: 'keyof typeof theme.colors',
    description: 'Text color from theme (e.g., "blue500", "red700")',
  },
  {
    name: 'transform',
    type: "'uppercase' | 'lowercase' | 'capitalize'",
    description: 'Text transformation',
  },
  {
    name: 'truncate',
    type: 'boolean',
    description: 'Truncate text with ellipsis',
  },
  {
    name: 'balance',
    type: 'boolean',
    description: 'Enable text-wrap: balance for better line breaks',
  },
  {
    name: 'as',
    type: "'p' | 'span' | 'div' | 'label' | 'time' | 'pre'",
    default: "'p'",
    description: 'HTML element to render',
  },
];

export const TextDoc = () => {
  return (
    <ComponentDoc
      title="Text"
      description="A versatile text component for all your typography needs, supporting various sizes, weights, colors, and semantic HTML elements."
      importStatement="import { Text } from '@metorial-io/ui';"
      package="ui"
    >
      <Section title="Basic Usage" description="The Text component defaults to size 2 (14px) with regular weight.">
        <LiveExample
          code={`<Text>This is a paragraph of text using the default size and weight.</Text>`}
        />
      </Section>

      <Section title="Sizes" description="Text supports 9 sizes from 1 (12px) to 9 (60px). Size 2 (14px) is the default body text size.">
        <LiveExample
          code={`<Flex direction="column" gap="2">
  <Text size="1">Size 1 - 12px (small text, captions)</Text>
  <Text size="2">Size 2 - 14px (default body text)</Text>
  <Text size="3">Size 3 - 16px (large body text)</Text>
  <Text size="4">Size 4 - 18px (small headings)</Text>
  <Text size="5">Size 5 - 20px</Text>
  <Text size="6">Size 6 - 24px</Text>
  <Text size="7">Size 7 - 28px</Text>
  <Text size="8">Size 8 - 35px</Text>
  <Text size="9">Size 9 - 60px (hero text)</Text>
</Flex>`}
        />
      </Section>

      <Section title="Weights" description="Control the font weight for emphasis and hierarchy.">
        <LiveExample
          code={`<Flex direction="column" gap="2">
  <Text weight="light">Light weight text</Text>
  <Text weight="regular">Regular weight text (default)</Text>
  <Text weight="medium">Medium weight text</Text>
  <Text weight="strong">Strong weight text</Text>
  <Text weight="bold">Bold weight text</Text>
</Flex>`}
        />
      </Section>

      <Section title="Colors" description="Use theme colors for semantic meaning. Specify exact shade for precise control.">
        <LiveExample
          code={`<Flex direction="column" gap="2">
  <Text color="blue600">Blue text</Text>
  <Text color="green700">Green text for success</Text>
  <Text color="red600">Red text for errors</Text>
  <Text color="orange600">Orange text for warnings</Text>
  <Text color="gray600">Gray text for muted content</Text>
</Flex>`}
        />
      </Section>

      <Section title="Alignment" description="Control text alignment within its container.">
        <LiveExample
          code={`<Flex direction="column" gap="3">
  <Text align="left">Left aligned text (default)</Text>
  <Text align="center">Center aligned text</Text>
  <Text align="right">Right aligned text</Text>
</Flex>`}
        />
      </Section>

      <Section title="Transformation" description="Apply text transformations for styling.">
        <LiveExample
          code={`<Flex direction="column" gap="2">
  <Text transform="uppercase">Uppercase text</Text>
  <Text transform="lowercase">LOWERCASE TEXT</Text>
  <Text transform="capitalize">capitalize each word</Text>
</Flex>`}
        />
      </Section>

      <Section title="Truncation" description="Truncate long text with an ellipsis.">
        <LiveExample
          code={`<div style={{ maxWidth: 300 }}>
  <Text truncate>
    This is a very long piece of text that will be truncated with an ellipsis when it exceeds the container width.
  </Text>
</div>`}
        />
      </Section>

      <Section title="Semantic Elements" description="Use the 'as' prop to render the appropriate HTML element while maintaining visual styling.">
        <LiveExample
          code={`<Flex direction="column" gap="2">
  <Text as="p">Paragraph element</Text>
  <Text as="span">Inline span element</Text>
  <Text as="label" weight="medium">Label element</Text>
  <Text as="time">Time element</Text>
  <Text as="div">Div element</Text>
</Flex>`}
        />
      </Section>

      <Section title="Usage Guidelines">
        <Text size="3" style={{ color: '#666', marginBottom: 16 }}>
          Best practices for typography:
        </Text>
        <ul style={{ color: '#666', fontSize: '14px', lineHeight: 1.8 }}>
          <li><strong>Default size:</strong> Use size 2 for body text, size 1 for captions and small text</li>
          <li><strong>Hierarchy:</strong> Use size and weight together to create clear visual hierarchy</li>
          <li><strong>Color sparingly:</strong> Use colored text for semantic meaning (errors, success) not decoration</li>
          <li><strong>Semantic HTML:</strong> Always use the appropriate element with the 'as' prop</li>
          <li><strong>Readability:</strong> Avoid using uppercase for long text, it reduces readability</li>
          <li><strong>Line length:</strong> Keep line length between 50-75 characters for optimal readability</li>
        </ul>
      </Section>

      <Section title="Props">
        <PropTable props={textProps} />
      </Section>
    </ComponentDoc>
  );
};
