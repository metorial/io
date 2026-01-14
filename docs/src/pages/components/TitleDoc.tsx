import { ComponentDoc, PropTable, LiveExample, Section } from '../../components';
import type { PropDefinition } from '../../components';
import { Text } from '@metorial-io/ui';

const titleProps: PropDefinition[] = [
  {
    name: 'size',
    type: "'1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'",
    default: "'6'",
    description: 'Font size (1 = 12px, 6 = 24px, 9 = 60px)',
  },
  {
    name: 'weight',
    type: "'light' | 'regular' | 'medium' | 'strong' | 'bold'",
    default: "'bold'",
    description: 'Font weight',
  },
  {
    name: 'as',
    type: "'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'",
    default: "'h2'",
    description: 'HTML heading element to render',
  },
  {
    name: 'color',
    type: 'ColorType',
    description: 'Text color (e.g., "red500", "blue600")',
  },
  {
    name: 'align',
    type: "'left' | 'center' | 'right'",
    description: 'Text alignment',
  },
  {
    name: 'children',
    type: 'React.ReactNode',
    required: true,
    description: 'Title content',
  },
];

export const TitleDoc = () => {
  return (
    <ComponentDoc
      title="Title"
      description="A heading component for page titles, section headers, and emphasized text. Supports all heading sizes with semantic HTML elements."
      importStatement="import { Title } from '@metorial-io/ui';"
      package="ui"
    >
      <Section title="Basic Usage" description="Simple titles with different semantic elements.">
        <LiveExample
          code={`<Flex direction="column" gap="4">
  <Title as="h1" size="9">Page Title (h1)</Title>
  <Title as="h2" size="7">Section Title (h2)</Title>
  <Title as="h3" size="5">Subsection Title (h3)</Title>
</Flex>`}
        />
      </Section>

      <Section title="All Sizes" description="Titles support 9 different sizes.">
        <LiveExample
          code={`<Flex direction="column" gap="3">
  <Title size="1">Size 1 - 12px</Title>
  <Title size="2">Size 2 - 14px</Title>
  <Title size="3">Size 3 - 16px</Title>
  <Title size="4">Size 4 - 18px</Title>
  <Title size="5">Size 5 - 20px</Title>
  <Title size="6">Size 6 - 24px (default)</Title>
  <Title size="7">Size 7 - 28px</Title>
  <Title size="8">Size 8 - 35px</Title>
  <Title size="9">Size 9 - 60px</Title>
</Flex>`}
        />
      </Section>

      <Section title="Font Weights" description="Different font weights for emphasis.">
        <LiveExample
          code={`<Flex direction="column" gap="3">
  <Title weight="light">Light Title</Title>
  <Title weight="regular">Regular Title</Title>
  <Title weight="medium">Medium Title</Title>
  <Title weight="strong">Strong Title</Title>
  <Title weight="bold">Bold Title (default)</Title>
</Flex>`}
        />
      </Section>

      <Section title="Colors" description="Titles can use any color from the design system.">
        <LiveExample
          code={`<Flex direction="column" gap="3">
  <Title color="blue600">Blue Title</Title>
  <Title color="green600">Green Title</Title>
  <Title color="red600">Red Title</Title>
  <Title color="violet600">Violet Title</Title>
  <Title color="gray800">Gray Title</Title>
</Flex>`}
        />
      </Section>

      <Section title="Text Alignment" description="Control text alignment.">
        <LiveExample
          code={`<Flex direction="column" gap="3">
  <Title align="left">Left Aligned</Title>
  <Title align="center">Center Aligned</Title>
  <Title align="right">Right Aligned</Title>
</Flex>`}
        />
      </Section>

      <Section title="Semantic HTML" description="Use the correct heading element for accessibility while controlling visual size.">
        <LiveExample
          code={`<Flex direction="column" gap="4">
  <Title as="h1" size="9">
    Main Page Heading
  </Title>
  <Title as="h2" size="7">
    Section Heading
  </Title>
  <Title as="h3" size="5">
    Subsection Heading
  </Title>
  <Text size="3">
    The 'as' prop sets the HTML element (h1, h2, etc.) for proper document
    structure, while 'size' controls the visual appearance.
  </Text>
</Flex>`}
        />
      </Section>

      <Section title="Usage Guidelines">
        <Text size="3" style={{ color: '#666', marginBottom: 16 }}>
          Best practices for using titles:
        </Text>
        <ul style={{ color: '#666', fontSize: '14px', lineHeight: 1.8 }}>
          <li><strong>Semantic structure:</strong> Use the 'as' prop to maintain proper heading hierarchy</li>
          <li><strong>One h1 per page:</strong> Each page should have exactly one h1 element</li>
          <li><strong>Visual vs semantic:</strong> The 'size' prop controls appearance, 'as' controls semantics</li>
          <li><strong>Consistent sizing:</strong> Use larger sizes (7-9) for page titles, medium (5-6) for sections</li>
          <li><strong>Default colors:</strong> Titles use default black/gray colors unless you have a specific reason to use color</li>
        </ul>
      </Section>

      <Section title="Props">
        <PropTable props={titleProps} />
      </Section>
    </ComponentDoc>
  );
};
