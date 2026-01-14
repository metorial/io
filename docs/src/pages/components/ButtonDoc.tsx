import { ComponentDoc, PropTable, LiveExample, Section } from '../../components';
import type { PropDefinition } from '../../components';
import { Text } from '@metorial-io/ui';

const buttonProps: PropDefinition[] = [
  {
    name: 'variant',
    type: "'solid' | 'outline' | 'soft' | 'ghost'",
    default: "'solid'",
    description: 'Visual style variant of the button',
  },
  {
    name: 'size',
    type: "'1' | '2' | '3' | '4' | '5'",
    default: "'3'",
    description: 'Size of the button (1 = 26px, 3 = 36px, 5 = 48px)',
  },
  {
    name: 'color',
    type: 'ColorType',
    default: 'gray',
    description: 'Color family for the button. Generally keep default for most buttons.',
  },
  {
    name: 'loading',
    type: 'boolean',
    description: 'Shows loading spinner and disables the button',
  },
  {
    name: 'success',
    type: 'boolean',
    description: 'Shows success state with checkmark',
  },
  {
    name: 'fullWidth',
    type: 'boolean',
    description: 'Makes the button full width',
  },
  {
    name: 'iconLeft',
    type: 'ReactNode',
    description: 'Icon to display on the left side of the button text',
  },
  {
    name: 'iconRight',
    type: 'ReactNode',
    description: 'Icon to display on the right side of the button text',
  },
  {
    name: 'as',
    type: "'button' | 'span' | 'div'",
    default: "'button'",
    description: 'HTML element to render',
  },
  {
    name: 'disabled',
    type: 'boolean',
    description: 'Disables the button',
  },
];

export const ButtonDoc = () => {
  return (
    <ComponentDoc
      title="Button"
      description="A versatile button component with multiple variants, sizes, and states. Use for triggering actions, submitting forms, or navigation."
      importStatement="import { Button } from '@metorial-io/ui';"
      package="ui"
    >
      <Section title="Basic Usage" description="The default button uses the solid variant with default (gray) color.">
        <LiveExample
          code={`<Button>Default Button</Button>`}
        />
      </Section>

      <Section title="Variants" description="Buttons come in four variants: solid (primary actions), outline (secondary actions), ghost (tertiary actions), and soft (subtle interactive elements).">
        <LiveExample
          code={`<Flex gap="3">
  <Button variant="solid">Solid</Button>
  <Button variant="outline">Outline</Button>
  <Button variant="soft">Soft</Button>
  <Button variant="ghost">Ghost</Button>
</Flex>`}
        />
      </Section>

      <Section title="Sizes" description="Buttons support 5 sizes from 1 (26px) to 5 (48px). Size 3 is the default and recommended for most use cases.">
        <LiveExample
          code={`<Flex gap="3" align="center">
  <Button size="1">Size 1</Button>
  <Button size="2">Size 2</Button>
  <Button size="3">Size 3 (Default)</Button>
  <Button size="4">Size 4</Button>
  <Button size="5">Size 5</Button>
</Flex>`}
        />
      </Section>

      <Section title="Colors" description="While buttons support all color variants, it's recommended to use the default gray color for most buttons. Use colors intentionally for specific purposes only.">
        <LiveExample
          code={`<Flex gap="3" wrap="wrap">
  <Button color="gray">Gray (Default)</Button>
  <Button color="blue">Blue</Button>
  <Button color="green">Green</Button>
  <Button color="red">Red</Button>
  <Button color="orange">Orange</Button>
  <Button color="violet">Violet</Button>
</Flex>`}
        />
      </Section>

      <Section title="With Icons" description="Add icons to buttons using the iconLeft and iconRight props. Icons from @remixicon/react work great.">
        <LiveExample
          code={`<Flex gap="3">
  <Button iconLeft={<RiAddLine />}>
    Add Item
  </Button>
  <Button iconRight={<RiArrowRightLine />}>
    Continue
  </Button>
  <Button iconLeft={<RiDownloadLine />} iconRight={<RiArrowDownSLine />}>
    Download
  </Button>
</Flex>`}
        />
      </Section>

      <Section title="Icon Only" description="Create icon-only buttons by only passing an icon without text.">
        <LiveExample
          code={`<Flex gap="3">
  <Button variant="solid"><RiSearchLine /></Button>
  <Button variant="outline"><RiSettingsLine /></Button>
  <Button variant="ghost"><RiMoreLine /></Button>
  <Button variant="soft"><RiHeartLine /></Button>
</Flex>`}
        />
      </Section>

      <Section title="States" description="Buttons support loading and success states for async operations.">
        <LiveExample
          code={`function ButtonStates() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setTimeout(() => setSuccess(false), 2000);
    }, 2000);
  };

  return (
    <Flex gap="3">
      <Button loading={loading} success={success} onClick={handleClick}>
        {success ? 'Saved!' : 'Save Changes'}
      </Button>
      <Button disabled>Disabled Button</Button>
    </Flex>
  );
}`}
        />
      </Section>

      <Section title="Full Width" description="Use the fullWidth prop to make buttons span the full width of their container.">
        <LiveExample
          code={`<Flex direction="column" gap="3">
  <Button fullWidth>Full Width Button</Button>
  <Button fullWidth variant="outline">Full Width Outline</Button>
</Flex>`}
        />
      </Section>

      <Section title="Usage Guidelines">
        <Text size="3" style={{ color: '#666', marginBottom: 16 }}>
          Follow these guidelines for consistent button usage:
        </Text>
        <ul style={{ color: '#666', fontSize: '14px', lineHeight: 1.8 }}>
          <li><strong>Use default colors:</strong> Keep buttons gray/black unless you have a specific reason to use color</li>
          <li><strong>Variant hierarchy:</strong> Solid for primary actions, outline for secondary, ghost for tertiary</li>
          <li><strong>Consistent sizing:</strong> Use size 3 as your default, size 2 for compact UIs, size 4-5 for emphasis</li>
          <li><strong>Icon clarity:</strong> Only use icons that clearly represent the action</li>
          <li><strong>Loading states:</strong> Always show loading state for async operations</li>
          <li><strong>Disabled state:</strong> Use sparingly and provide context why a button is disabled</li>
        </ul>
      </Section>

      <Section title="Props">
        <PropTable props={buttonProps} />
      </Section>
    </ComponentDoc>
  );
};
