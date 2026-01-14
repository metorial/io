import { ComponentDoc, PropTable, LiveExample, Section } from '../../components';
import type { PropDefinition } from '../../components';

const flexProps: PropDefinition[] = [
  {
    name: 'direction',
    type: "'row' | 'column'",
    default: "'row'",
    description: 'Flex direction',
  },
  {
    name: 'gap',
    type: "'1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'",
    description: 'Gap between flex items',
  },
  {
    name: 'align',
    type: "'start' | 'center' | 'end' | 'stretch'",
    description: 'Align items on cross axis',
  },
  {
    name: 'justify',
    type: "'start' | 'center' | 'end' | 'between'",
    description: 'Justify content on main axis',
  },
  {
    name: 'wrap',
    type: "'wrap' | 'nowrap'",
    description: 'Allow items to wrap',
  },
];

export const FlexDoc = () => {
  return (
    <ComponentDoc
      title="Flex"
      description="A flexbox layout component for creating flexible and responsive layouts with minimal code."
      importStatement="import { Flex } from '@metorial-io/ui';"
      package="ui"
    >
      <Section title="Basic Usage">
        <LiveExample
          code={`<Flex gap="3">
  <Button>Button 1</Button>
  <Button>Button 2</Button>
  <Button>Button 3</Button>
</Flex>`}
        />
      </Section>

      <Section title="Direction">
        <LiveExample
          code={`<Flex direction="column" gap="3">
  <Button>Button 1</Button>
  <Button>Button 2</Button>
  <Button>Button 3</Button>
</Flex>`}
        />
      </Section>

      <Section title="Alignment">
        <LiveExample
          code={`<Flex direction="column" gap="4">
  <div>
    <Text size="2" weight="medium" style={{ marginBottom: 8 }}>Align Center</Text>
    <Flex gap="3" align="center" style={{ border: '1px solid #e5e5e5', padding: 16 }}>
      <div style={{ height: 40, width: 40, background: '#ddd' }} />
      <div style={{ height: 60, width: 40, background: '#ddd' }} />
      <div style={{ height: 30, width: 40, background: '#ddd' }} />
    </Flex>
  </div>
  <div>
    <Text size="2" weight="medium" style={{ marginBottom: 8 }}>Align Start</Text>
    <Flex gap="3" align="start" style={{ border: '1px solid #e5e5e5', padding: 16 }}>
      <div style={{ height: 40, width: 40, background: '#ddd' }} />
      <div style={{ height: 60, width: 40, background: '#ddd' }} />
      <div style={{ height: 30, width: 40, background: '#ddd' }} />
    </Flex>
  </div>
</Flex>`}
        />
      </Section>

      <Section title="Justify Content">
        <LiveExample
          code={`<Flex direction="column" gap="4">
  <div>
    <Text size="2" weight="medium" style={{ marginBottom: 8 }}>Justify Between</Text>
    <Flex justify="between" style={{ border: '1px solid #e5e5e5', padding: 16 }}>
      <Button size="2">Left</Button>
      <Button size="2">Right</Button>
    </Flex>
  </div>
  <div>
    <Text size="2" weight="medium" style={{ marginBottom: 8 }}>Justify Center</Text>
    <Flex justify="center" gap="3" style={{ border: '1px solid #e5e5e5', padding: 16 }}>
      <Button size="2">Button 1</Button>
      <Button size="2">Button 2</Button>
    </Flex>
  </div>
</Flex>`}
        />
      </Section>

      <Section title="Wrapping">
        <LiveExample
          code={`<Flex wrap="wrap" gap="3" style={{ maxWidth: 300 }}>
  <Button>Button 1</Button>
  <Button>Button 2</Button>
  <Button>Button 3</Button>
  <Button>Button 4</Button>
  <Button>Button 5</Button>
  <Button>Button 6</Button>
</Flex>`}
        />
      </Section>

      <Section title="Props">
        <PropTable props={flexProps} />
      </Section>
    </ComponentDoc>
  );
};
