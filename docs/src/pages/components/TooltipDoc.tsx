import { ComponentDoc, PropTable, LiveExample, Section } from '../../components';
import type { PropDefinition } from '../../components';
import { Text } from '@metorial-io/ui';

const tooltipProps: PropDefinition[] = [
  {
    name: 'content',
    type: 'React.ReactNode',
    description: 'The content to display in the tooltip',
  },
  {
    name: 'children',
    type: 'React.ReactNode',
    description: 'The element that triggers the tooltip on hover',
  },
  {
    name: 'arrow',
    type: 'boolean',
    description: 'Whether to show an arrow pointing to the trigger',
  },
  {
    name: 'delayDuration',
    type: 'number',
    description: 'Delay in milliseconds before showing the tooltip',
  },
  {
    name: 'enabled',
    type: 'boolean',
    description: 'Whether the tooltip is enabled (false disables the tooltip)',
  },
  {
    name: 'side',
    type: "'top' | 'right' | 'bottom' | 'left'",
    default: "'bottom'",
    description: 'The preferred side of the trigger to render the tooltip',
  },
  {
    name: 'align',
    type: "'start' | 'center' | 'end'",
    default: "'center'",
    description: 'The alignment of the tooltip relative to the trigger',
  },
];

export const TooltipDoc = () => {
  return (
    <ComponentDoc
      title="Tooltip"
      description="A tooltip component that displays helpful information on hover. Built on Radix UI Tooltip with smooth animations and smart positioning."
      importStatement="import { Tooltip } from '@metorial-io/ui';"
      package="ui"
    >
      <Section title="Basic Usage" description="A simple tooltip that appears on hover.">
        <LiveExample
          code={`<Tooltip content="This is a helpful tooltip">
  <Button>Hover me</Button>
</Tooltip>`}
        />
      </Section>

      <Section title="With Arrow" description="Add an arrow to point to the trigger element.">
        <LiveExample
          code={`<Flex gap="3">
  <Tooltip content="Save your changes" arrow>
    <Button><RiSaveLine /></Button>
  </Tooltip>

  <Tooltip content="Delete this item" arrow>
    <Button variant="soft" color="red"><RiDeleteBinLine /></Button>
  </Tooltip>

  <Tooltip content="Share with others" arrow>
    <Button variant="outline"><RiShareLine /></Button>
  </Tooltip>
</Flex>`}
        />
      </Section>

      <Section title="Positioning" description="Control which side the tooltip appears on.">
        <LiveExample
          code={`<Flex gap="3" wrap="wrap">
  <Tooltip content="Tooltip on top" side="top" arrow>
    <Button size="2">Top</Button>
  </Tooltip>

  <Tooltip content="Tooltip on right" side="right" arrow>
    <Button size="2">Right</Button>
  </Tooltip>

  <Tooltip content="Tooltip on bottom" side="bottom" arrow>
    <Button size="2">Bottom</Button>
  </Tooltip>

  <Tooltip content="Tooltip on left" side="left" arrow>
    <Button size="2">Left</Button>
  </Tooltip>
</Flex>`}
        />
      </Section>

      <Section title="Alignment" description="Control how the tooltip aligns with its trigger.">
        <LiveExample
          code={`<Flex gap="3" wrap="wrap">
  <Tooltip content="Start aligned" side="top" align="start" arrow>
    <Button size="2">Start</Button>
  </Tooltip>

  <Tooltip content="Center aligned" side="top" align="center" arrow>
    <Button size="2">Center</Button>
  </Tooltip>

  <Tooltip content="End aligned" side="top" align="end" arrow>
    <Button size="2">End</Button>
  </Tooltip>
</Flex>`}
        />
      </Section>

      <Section title="Custom Delay" description="Adjust the delay before the tooltip appears.">
        <LiveExample
          code={`<Flex gap="3">
  <Tooltip content="Instant tooltip" delayDuration={0}>
    <Button size="2">No delay</Button>
  </Tooltip>

  <Tooltip content="Quick tooltip" delayDuration={200}>
    <Button size="2">200ms delay</Button>
  </Tooltip>

  <Tooltip content="Delayed tooltip" delayDuration={1000}>
    <Button size="2">1s delay</Button>
  </Tooltip>
</Flex>`}
        />
      </Section>

      <Section title="Conditional Tooltips" description="Enable or disable tooltips based on conditions.">
        <LiveExample
          code={`function ConditionalTooltip() {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <Flex direction="column" gap="3">
      <Checkbox
        label="Show tooltips"
        checked={showTooltip}
        onCheckedChange={setShowTooltip}
      />

      <Flex gap="3">
        <Tooltip content="This tooltip can be toggled" enabled={showTooltip}>
          <Button>Hover me</Button>
        </Tooltip>

        <Tooltip content="Always disabled" enabled={false}>
          <Button variant="outline">No tooltip</Button>
        </Tooltip>
      </Flex>
    </Flex>
  );
}`}
        />
      </Section>

      <Section title="Rich Content" description="Tooltips automatically handle text wrapping for longer content.">
        <LiveExample
          code={`<Flex gap="3" wrap="wrap">
  <Tooltip
    content="This is a longer tooltip with multiple lines of text that will wrap nicely"
    arrow
  >
    <Button size="2" iconLeft={<RiInformationLine />}>
      Long Text
    </Button>
  </Tooltip>

  <Tooltip
    content="Tooltips use react-wrap-balancer to ensure text is balanced and readable"
    arrow
  >
    <Button size="2" iconLeft={<RiQuestionLine />}>
      Balanced Text
    </Button>
  </Tooltip>
</Flex>`}
        />
      </Section>

      <Section title="On Icon Buttons" description="Tooltips are especially useful on icon-only buttons.">
        <LiveExample
          code={`<Flex gap="2">
  <Tooltip content="Add new item" arrow>
    <Button variant="ghost" size="2"><RiAddLine /></Button>
  </Tooltip>

  <Tooltip content="Search" arrow>
    <Button variant="ghost" size="2"><RiSearchLine /></Button>
  </Tooltip>

  <Tooltip content="Settings" arrow>
    <Button variant="ghost" size="2"><RiSettings3Line /></Button>
  </Tooltip>

  <Tooltip content="Notifications" arrow>
    <Button variant="ghost" size="2"><RiNotificationLine /></Button>
  </Tooltip>

  <Tooltip content="Help" arrow>
    <Button variant="ghost" size="2"><RiQuestionLine /></Button>
  </Tooltip>
</Flex>`}
        />
      </Section>

      <Section title="Usage Guidelines">
        <Text size="3" style={{ color: '#666', marginBottom: 16 }}>
          Best practices for using tooltips:
        </Text>
        <ul style={{ color: '#666', fontSize: '14px', lineHeight: 1.8 }}>
          <li><strong>Keep it short:</strong> Tooltips should be brief, typically one sentence or less</li>
          <li><strong>Supplement, don't replace:</strong> Don't hide critical information in tooltips</li>
          <li><strong>Icon buttons:</strong> Always add tooltips to icon-only buttons for clarity</li>
          <li><strong>Avoid interactive content:</strong> Tooltips disappear on mouse leave, use Popover for interactive content</li>
          <li><strong>Mobile consideration:</strong> Tooltips don't work well on touch devices, provide alternative UI</li>
          <li><strong>Accessibility:</strong> Ensure your UI is understandable even without tooltips</li>
        </ul>
      </Section>

      <Section title="Props">
        <PropTable props={tooltipProps} />
      </Section>
    </ComponentDoc>
  );
};
