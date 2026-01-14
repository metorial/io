import { ComponentDoc, PropTable, LiveExample, Section } from '../../components';
import type { PropDefinition } from '../../components';
import { Text } from '@metorial-io/ui';

const popoverProps: PropDefinition[] = [
  {
    name: 'trigger',
    type: 'React.ReactNode',
    description: 'The element that triggers the popover',
  },
  {
    name: 'children',
    type: 'React.ReactNode',
    description: 'Content to display in the popover',
  },
  {
    name: 'arrow',
    type: 'boolean',
    description: 'Whether to show an arrow pointing to the trigger',
  },
  {
    name: 'open',
    type: 'boolean',
    description: 'Controlled open state',
  },
  {
    name: 'onOpenChange',
    type: '(open: boolean) => void',
    description: 'Callback when the open state changes',
  },
  {
    name: 'sideOffset',
    type: 'number',
    description: 'Distance in pixels from the trigger',
  },
  {
    name: 'alignOffset',
    type: 'number',
    description: 'Offset in pixels along the alignment axis',
  },
  {
    name: 'operationKey',
    type: 'string',
    description: 'When this value changes, the popover will close',
  },
];

export const PopoverDoc = () => {
  return (
    <ComponentDoc
      title="Popover"
      description="A floating content container that appears near a trigger element. Built on Radix UI Popover with smooth animations and smart positioning."
      importStatement="import { Popover } from '@metorial-io/ui';"
      package="ui"
    >
      <Section title="Basic Usage" description="A simple popover with custom content.">
        <LiveExample
          code={`function BasicPopover() {
  return (
    <Popover trigger={<Button>Open Popover</Button>}>
      <Popover.Content>
        <Flex direction="column" gap="2">
          <Text weight="strong">Popover Content</Text>
          <Text size="2" color="gray600">
            This is a simple popover with custom content.
          </Text>
        </Flex>
      </Popover.Content>
    </Popover>
  );
}`}
        />
      </Section>

      <Section title="With Arrow" description="Add an arrow to point to the trigger element.">
        <LiveExample
          code={`function PopoverWithArrow() {
  return (
    <Popover
      trigger={<Button variant="outline">Show Info</Button>}
      arrow
    >
      <Popover.Content>
        <Flex direction="column" gap="2">
          <Text weight="strong" size="2">Quick Tip</Text>
          <Text size="2" color="gray600">
            Popovers are great for contextual information that doesn't require immediate action.
          </Text>
        </Flex>
      </Popover.Content>
    </Popover>
  );
}`}
        />
      </Section>

      <Section title="Interactive Content" description="Popovers can contain interactive elements like buttons and forms.">
        <LiveExample
          code={`function InteractivePopover() {
  const [value, setValue] = useState('');

  return (
    <Popover trigger={<Button>Quick Actions</Button>}>
      <Popover.Content style={{ minWidth: 250 }}>
        <Flex direction="column" gap="3">
          <Text weight="strong">Quick Actions</Text>
          <Input
            placeholder="Search..."
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <Flex direction="column" gap="2">
            <Button variant="soft" size="2" fullWidth>Create New</Button>
            <Button variant="soft" size="2" fullWidth>Import</Button>
            <Button variant="soft" size="2" fullWidth>Export</Button>
          </Flex>
        </Flex>
      </Popover.Content>
    </Popover>
  );
}`}
        />
      </Section>

      <Section title="Controlled State" description="Control the open state of the popover externally.">
        <LiveExample
          code={`function ControlledPopover() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Flex direction="column" gap="3">
      <Flex gap="2">
        <Button size="2" onClick={() => setIsOpen(!isOpen)}>
          Toggle Popover
        </Button>
        <Button size="2" variant="outline" onClick={() => setIsOpen(false)}>
          Close Popover
        </Button>
      </Flex>

      <Popover
        trigger={<Button>Trigger Element</Button>}
        open={isOpen}
        onOpenChange={setIsOpen}
      >
        <Popover.Content>
          <Flex direction="column" gap="2">
            <Text weight="strong">Controlled Popover</Text>
            <Text size="2" color="gray600">
              This popover's state is controlled externally.
            </Text>
            <Button size="2" onClick={() => setIsOpen(false)}>
              Close
            </Button>
          </Flex>
        </Popover.Content>
      </Popover>
    </Flex>
  );
}`}
        />
      </Section>

      <Section title="Custom Positioning" description="Adjust the position and alignment of the popover.">
        <LiveExample
          code={`function CustomPositionPopover() {
  return (
    <Flex gap="3" wrap="wrap">
      <Popover
        trigger={<Button size="2">No Offset</Button>}
        arrow
      >
        <Popover.Content>
          <Text size="2">Default positioning</Text>
        </Popover.Content>
      </Popover>

      <Popover
        trigger={<Button size="2">Side Offset</Button>}
        sideOffset={15}
        arrow
      >
        <Popover.Content>
          <Text size="2">More space from trigger</Text>
        </Popover.Content>
      </Popover>

      <Popover
        trigger={<Button size="2">Align Offset</Button>}
        alignOffset={20}
        arrow
      >
        <Popover.Content>
          <Text size="2">Shifted alignment</Text>
        </Popover.Content>
      </Popover>
    </Flex>
  );
}`}
        />
      </Section>

      <Section title="Rich Content" description="Display complex content like lists, images, or cards in popovers.">
        <LiveExample
          code={`function RichContentPopover() {
  return (
    <Popover trigger={<Button iconLeft={<RiUserLine />}>User Info</Button>}>
      <Popover.Content style={{ minWidth: 280 }}>
        <Flex direction="column" gap="3">
          <Flex align="center" gap="3">
            <div style={{
              width: 48,
              height: 48,
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
            }} />
            <Flex direction="column" gap="1">
              <Text weight="strong">John Doe</Text>
              <Text size="2" color="gray600">john@example.com</Text>
            </Flex>
          </Flex>

          <Flex direction="column" gap="2">
            <Flex justify="between">
              <Text size="2" color="gray600">Projects</Text>
              <Text size="2" weight="strong">24</Text>
            </Flex>
            <Flex justify="between">
              <Text size="2" color="gray600">Tasks</Text>
              <Text size="2" weight="strong">156</Text>
            </Flex>
          </Flex>

          <Button variant="soft" size="2" fullWidth>View Profile</Button>
        </Flex>
      </Popover.Content>
    </Popover>
  );
}`}
        />
      </Section>

      <Section title="Usage Guidelines">
        <Text size="3" style={{ color: '#666', marginBottom: 16 }}>
          Best practices for using popovers:
        </Text>
        <ul style={{ color: '#666', fontSize: '14px', lineHeight: 1.8 }}>
          <li><strong>Non-critical content:</strong> Use popovers for supplementary information, not critical actions</li>
          <li><strong>Keep it concise:</strong> Popover content should be brief and scannable</li>
          <li><strong>Avoid nesting:</strong> Don't open popovers from within other popovers</li>
          <li><strong>Close on action:</strong> Close the popover after users complete their action</li>
          <li><strong>Mobile consideration:</strong> Ensure popover content is readable on small screens</li>
          <li><strong>Use Popover.Content:</strong> Wrap content in Popover.Content for consistent styling</li>
        </ul>
      </Section>

      <Section title="Props">
        <PropTable props={popoverProps} />
      </Section>
    </ComponentDoc>
  );
};
