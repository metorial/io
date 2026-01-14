import { ComponentDoc, PropTable, LiveExample, Section } from '../../components';
import type { PropDefinition } from '../../components';
import { Text } from '@metorial-io/ui';

const orProps: PropDefinition[] = [
  {
    name: 'text',
    type: 'string',
    default: "'or'",
    description: 'The text to display between the divider lines',
  },
];

export const OrDoc = () => {
  return (
    <ComponentDoc
      title="Or"
      description="A simple divider component with text, commonly used to separate alternative options in forms or between different action groups."
      importStatement="import { Or } from '@metorial-io/ui';"
      package="ui"
    >
      <Section title="Basic Usage" description="A divider with 'or' text in the middle.">
        <LiveExample
          code={`<Flex direction="column" gap="3">
  <Button fullWidth>Sign in with Google</Button>
  <Or />
  <Button fullWidth variant="outline">Sign in with Email</Button>
</Flex>`}
        />
      </Section>

      <Section title="Custom Text" description="Change the text to suit your needs.">
        <LiveExample
          code={`<Flex direction="column" gap="4">
  <div>
    <Button fullWidth>Import from File</Button>
    <Or text="or" />
    <Button fullWidth variant="outline">Enter Manually</Button>
  </div>

  <div>
    <Button fullWidth>Create New Project</Button>
    <Or text="or use existing" />
    <Button fullWidth variant="outline">Select Template</Button>
  </div>

  <div>
    <Button fullWidth>Pay with Card</Button>
    <Or text="or" />
    <Button fullWidth variant="outline">Pay with PayPal</Button>
  </div>
</Flex>`}
        />
      </Section>

      <Section title="In Forms" description="Use Or to separate different sign-in or sign-up methods.">
        <LiveExample
          code={`<Flex direction="column" gap="3" style={{ maxWidth: 400 }}>
  <Button fullWidth iconLeft={<RiGoogleFill />}>
    Continue with Google
  </Button>
  <Button fullWidth iconLeft={<RiGithubFill />}>
    Continue with GitHub
  </Button>

  <Or />

  <Input placeholder="Email address" type="email" />
  <Input placeholder="Password" type="password" />
  <Button fullWidth>Sign In</Button>
</Flex>`}
        />
      </Section>

      <Section title="Between Action Groups" description="Separate different sets of actions or choices.">
        <LiveExample
          code={`<Flex direction="column" gap="3">
  <Flex direction="column" gap="2">
    <Text size="2" weight="strong">Quick Actions</Text>
    <Button variant="soft" fullWidth>Save Draft</Button>
    <Button variant="soft" fullWidth>Preview</Button>
  </Flex>

  <Or text="or" />

  <Flex direction="column" gap="2">
    <Text size="2" weight="strong">Final Actions</Text>
    <Button fullWidth>Publish Now</Button>
    <Button fullWidth variant="outline">Schedule</Button>
  </Flex>
</Flex>`}
        />
      </Section>

      <Section title="Multiple Or Dividers" description="Use multiple Or dividers to separate more than two options.">
        <LiveExample
          code={`<Flex direction="column" gap="3">
  <Button fullWidth variant="soft">
    Upload from Computer
  </Button>

  <Or text="or" />

  <Button fullWidth variant="soft">
    Import from URL
  </Button>

  <Or text="or" />

  <Button fullWidth variant="soft">
    Choose from Library
  </Button>

  <Or text="or" />

  <Button fullWidth variant="outline">
    Skip for Now
  </Button>
</Flex>`}
        />
      </Section>

      <Section title="Horizontal Layout" description="Or works in horizontal layouts too with proper flex settings.">
        <LiveExample
          code={`<Flex align="center" gap="3">
  <Button>Option A</Button>
  <Or />
  <Button>Option B</Button>
  <Or />
  <Button>Option C</Button>
</Flex>`}
        />
      </Section>

      <Section title="Usage Guidelines">
        <Text size="3" style={{ color: '#666', marginBottom: 16 }}>
          Best practices for using Or:
        </Text>
        <ul style={{ color: '#666', fontSize: '14px', lineHeight: 1.8 }}>
          <li><strong>Alternative options:</strong> Use to separate mutually exclusive choices</li>
          <li><strong>Authentication flows:</strong> Perfect for dividing social login from email/password</li>
          <li><strong>Keep it simple:</strong> The default 'or' text works for most cases</li>
          <li><strong>Visual hierarchy:</strong> Creates clear visual separation between option groups</li>
          <li><strong>Vertical layouts:</strong> Works best in vertical (column) flex layouts</li>
          <li><strong>Don't overuse:</strong> Too many Or dividers can fragment the UI</li>
        </ul>
      </Section>

      <Section title="Props">
        <PropTable props={orProps} />
      </Section>
    </ComponentDoc>
  );
};
