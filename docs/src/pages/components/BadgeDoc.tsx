import { ComponentDoc, PropTable, LiveExample, Section } from '../../components';
import type { PropDefinition } from '../../components';
import { Text } from '@metorial-io/ui';

const badgeProps: PropDefinition[] = [
  {
    name: 'children',
    type: 'React.ReactNode',
    required: true,
    description: 'Badge content',
  },
  {
    name: 'variant',
    type: "'solid' | 'soft' | 'outline'",
    default: "'soft'",
    description: 'Visual style variant',
  },
  {
    name: 'size',
    type: "'1' | '2' | '3'",
    default: "'2'",
    description: 'Size of the badge',
  },
  {
    name: 'color',
    type: 'ColorType',
    default: 'gray',
    description: 'Badge color',
  },
];

export const BadgeDoc = () => {
  return (
    <ComponentDoc
      title="Badge"
      description="A small label component for displaying status, categories, counts, and other metadata. Available in multiple colors, sizes, and variants."
      importStatement="import { Badge } from '@metorial-io/ui';"
      package="ui"
    >
      <Section title="Basic Usage" description="Simple badges with default styling.">
        <LiveExample
          code={`<Flex gap="2">
  <Badge>Default</Badge>
  <Badge color="blue">Info</Badge>
  <Badge color="green">Success</Badge>
  <Badge color="red">Error</Badge>
</Flex>`}
        />
      </Section>

      <Section title="Variants" description="Badges come in three visual variants.">
        <LiveExample
          code={`<Flex direction="column" gap="3">
  <Flex gap="2">
    <Badge variant="solid" color="blue">Solid</Badge>
    <Badge variant="soft" color="blue">Soft</Badge>
    <Badge variant="outline" color="blue">Outline</Badge>
  </Flex>
  <Flex gap="2">
    <Badge variant="solid" color="green">Solid</Badge>
    <Badge variant="soft" color="green">Soft</Badge>
    <Badge variant="outline" color="green">Outline</Badge>
  </Flex>
  <Flex gap="2">
    <Badge variant="solid" color="red">Solid</Badge>
    <Badge variant="soft" color="red">Soft</Badge>
    <Badge variant="outline" color="red">Outline</Badge>
  </Flex>
</Flex>`}
        />
      </Section>

      <Section title="Sizes" description="Badges support 3 different sizes.">
        <LiveExample
          code={`<Flex gap="3" align="center">
  <Badge size="1">Small</Badge>
  <Badge size="2">Medium</Badge>
  <Badge size="3">Large</Badge>
</Flex>`}
        />
      </Section>

      <Section title="All Colors" description="Badges can use any color from the design system.">
        <LiveExample
          code={`<Flex gap="2" style={{ flexWrap: 'wrap' }}>
  <Badge color="gray">Gray</Badge>
  <Badge color="blue">Blue</Badge>
  <Badge color="green">Green</Badge>
  <Badge color="red">Red</Badge>
  <Badge color="orange">Orange</Badge>
  <Badge color="yellow">Yellow</Badge>
  <Badge color="violet">Violet</Badge>
  <Badge color="pink">Pink</Badge>
  <Badge color="cyan">Cyan</Badge>
  <Badge color="indigo">Indigo</Badge>
  <Badge color="iris">Iris</Badge>
  <Badge color="teal">Teal</Badge>
  <Badge color="plum">Plum</Badge>
  <Badge color="amber">Amber</Badge>
</Flex>`}
        />
      </Section>

      <Section title="Status Badges" description="Common use case for status indicators.">
        <LiveExample
          code={`<Flex direction="column" gap="3">
  <Flex gap="2" align="center">
    <Text size="2" style={{ width: 100 }}>Active:</Text>
    <Badge color="green" variant="soft">Active</Badge>
  </Flex>
  <Flex gap="2" align="center">
    <Text size="2" style={{ width: 100 }}>Pending:</Text>
    <Badge color="yellow" variant="soft">Pending</Badge>
  </Flex>
  <Flex gap="2" align="center">
    <Text size="2" style={{ width: 100 }}>Failed:</Text>
    <Badge color="red" variant="soft">Failed</Badge>
  </Flex>
  <Flex gap="2" align="center">
    <Text size="2" style={{ width: 100 }}>Draft:</Text>
    <Badge color="gray" variant="soft">Draft</Badge>
  </Flex>
</Flex>`}
        />
      </Section>

      <Section title="With Count" description="Badges work well for displaying counts.">
        <LiveExample
          code={`<Flex gap="3">
  <Flex gap="2" align="center">
    <Text size="3">Inbox</Text>
    <Badge color="blue" size="1">12</Badge>
  </Flex>
  <Flex gap="2" align="center">
    <Text size="3">Unread</Text>
    <Badge color="red" size="1">3</Badge>
  </Flex>
  <Flex gap="2" align="center">
    <Text size="3">Starred</Text>
    <Badge color="amber" size="1">7</Badge>
  </Flex>
</Flex>`}
        />
      </Section>

      <Section title="Category Tags" description="Use badges for categorization and tagging.">
        <LiveExample
          code={`<Flex direction="column" gap="3">
  <Flex gap="2" style={{ flexWrap: 'wrap' }}>
    <Badge variant="outline">React</Badge>
    <Badge variant="outline">TypeScript</Badge>
    <Badge variant="outline">UI Components</Badge>
    <Badge variant="outline">Design System</Badge>
  </Flex>
  <Text size="2" style={{ color: '#666' }}>
    Outline variant works well for tags and categories
  </Text>
</Flex>`}
        />
      </Section>

      <Section title="Usage Guidelines">
        <Text size="3" style={{ color: '#666', marginBottom: 16 }}>
          Best practices for using badges:
        </Text>
        <ul style={{ color: '#666', fontSize: '14px', lineHeight: 1.8 }}>
          <li><strong>Status indication:</strong> Use color meaningfully (green = success, red = error, etc.)</li>
          <li><strong>Keep text short:</strong> Badges work best with 1-2 words or short numbers</li>
          <li><strong>Soft variant default:</strong> Soft variant works for most use cases</li>
          <li><strong>Outline for tags:</strong> Outline variant works well for categories and tags</li>
          <li><strong>Solid for emphasis:</strong> Use solid variant when you need high contrast</li>
        </ul>
      </Section>

      <Section title="Props">
        <PropTable props={badgeProps} />
      </Section>
    </ComponentDoc>
  );
};
