import { ComponentDoc, PropTable, LiveExample, Section } from '../../components';
import type { PropDefinition } from '../../components';
import { Text } from '@metorial-io/ui';

const spacerProps: PropDefinition[] = [
  {
    name: 'size',
    type: 'string | number',
    description: 'Sets both width and height (e.g., "20px" or 20)',
  },
  {
    name: 'height',
    type: 'string | number',
    description: 'Sets only the height',
  },
  {
    name: 'width',
    type: 'string | number',
    description: 'Sets only the width',
  },
  {
    name: 'grow',
    type: 'boolean',
    description: 'Makes the spacer grow to fill available space (flex-grow: 1)',
  },
  {
    name: 'shrink',
    type: 'boolean',
    default: 'false',
    description: 'Controls whether the spacer can shrink (flex-shrink)',
  },
];

export const SpacerDoc = () => {
  return (
    <ComponentDoc
      title="Spacer"
      description="A simple utility component for adding space between elements. More flexible than margins and useful for layout control in flex containers."
      importStatement="import { Spacer } from '@metorial-io/ui';"
      package="ui"
    >
      <Section title="Basic Usage" description="Add fixed vertical or horizontal space between elements.">
        <LiveExample
          code={`<Flex direction="column">
  <Button>First Button</Button>
  <Spacer size={20} />
  <Button>Second Button</Button>
  <Spacer size={40} />
  <Button>Third Button</Button>
</Flex>`}
        />
      </Section>

      <Section title="Vertical Spacing" description="Use height prop for vertical spacing in column layouts.">
        <LiveExample
          code={`<Flex direction="column">
  <Text>Top Section</Text>
  <Spacer height={30} />
  <Text>Middle Section</Text>
  <Spacer height={60} />
  <Text>Bottom Section</Text>
</Flex>`}
        />
      </Section>

      <Section title="Horizontal Spacing" description="Use width prop for horizontal spacing in row layouts.">
        <LiveExample
          code={`<Flex align="center">
  <Button size="2">Left</Button>
  <Spacer width={20} />
  <Button size="2">Center</Button>
  <Spacer width={40} />
  <Button size="2">Right</Button>
</Flex>`}
        />
      </Section>

      <Section title="Growing Spacer" description="Use grow prop to push elements apart in flex containers.">
        <LiveExample
          code={`<Flex align="center">
  <Text>Left aligned</Text>
  <Spacer grow />
  <Text>Right aligned</Text>
</Flex>`}
        />
      </Section>

      <Section title="Multiple Growing Spacers" description="Use multiple growing spacers to distribute space evenly.">
        <LiveExample
          code={`<Flex align="center">
  <Button size="2">Start</Button>
  <Spacer grow />
  <Button size="2">Center</Button>
  <Spacer grow />
  <Button size="2">End</Button>
</Flex>`}
        />
      </Section>

      <Section title="Mixed Spacing" description="Combine fixed and growing spacers for complex layouts.">
        <LiveExample
          code={`<Flex align="center">
  <Button size="2" iconLeft={<RiHomeLine />}>
    Home
  </Button>
  <Spacer width={10} />
  <Button size="2" iconLeft={<RiSearchLine />}>
    Search
  </Button>
  <Spacer grow />
  <Button size="2" variant="outline">Settings</Button>
  <Spacer width={10} />
  <Button size="2">Profile</Button>
</Flex>`}
        />
      </Section>

      <Section title="String Values" description="Spacer accepts CSS string values for more flexibility.">
        <LiveExample
          code={`<Flex direction="column">
  <Text>Using pixel values</Text>
  <Spacer height="20px" />

  <Text>Using rem values</Text>
  <Spacer height="2rem" />

  <Text>Using viewport units</Text>
  <Spacer height="5vh" />

  <Text>End of list</Text>
</Flex>`}
        />
      </Section>

      <Section title="Usage Guidelines">
        <Text size="3" style={{ color: '#666', marginBottom: 16 }}>
          Best practices for using spacers:
        </Text>
        <ul style={{ color: '#666', fontSize: '14px', lineHeight: 1.8 }}>
          <li><strong>Prefer gap:</strong> Use Flex gap prop for even spacing between multiple items</li>
          <li><strong>Dynamic layouts:</strong> Use grow for responsive layouts that adapt to container size</li>
          <li><strong>Fixed spacing:</strong> Use size, height, or width for consistent spacing</li>
          <li><strong>Visual separation:</strong> Use larger spacers to create visual breaks between sections</li>
          <li><strong>Alignment:</strong> Growing spacers are perfect for pushing elements to opposite ends</li>
          <li><strong>Simple solution:</strong> Spacers are cleaner than complex margin/padding calculations</li>
        </ul>
      </Section>

      <Section title="Props">
        <PropTable props={spacerProps} />
      </Section>
    </ComponentDoc>
  );
};
