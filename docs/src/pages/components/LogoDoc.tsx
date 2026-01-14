import { ComponentDoc, PropTable, LiveExample, Section } from '../../components';
import type { PropDefinition } from '../../components';
import { Text } from '@metorial-io/ui';

const logoProps: PropDefinition[] = [
  {
    name: 'src',
    type: 'string',
    required: true,
    description: 'Image URL for the logo',
  },
  {
    name: 'alt',
    type: 'string',
    required: true,
    description: 'Alt text for the logo',
  },
  {
    name: 'size',
    type: 'number | string',
    default: '32',
    description: 'Size (width) of the logo in pixels',
  },
  {
    name: 'href',
    type: 'string',
    description: 'If provided, logo becomes a clickable link',
  },
];

export const LogoDoc = () => {
  return (
    <ComponentDoc
      title="Logo"
      description="A component for displaying brand logos with optional link functionality. Maintains aspect ratio and supports various sizes."
      importStatement="import { Logo } from '@metorial-io/ui';"
      package="ui"
    >
      <Section title="Basic Usage" description="Display a logo image.">
        <LiveExample
          code={`<Logo
  src="https://via.placeholder.com/150x50/4F46E5/FFFFFF?text=Logo"
  alt="Company Logo"
/>`}
        />
      </Section>

      <Section title="Different Sizes" description="Control logo size with the size prop.">
        <LiveExample
          code={`<Flex direction="column" gap="4" align="start">
  <Logo
    src="https://via.placeholder.com/150x50/4F46E5/FFFFFF?text=Logo"
    alt="Small Logo"
    size={24}
  />
  <Logo
    src="https://via.placeholder.com/150x50/4F46E5/FFFFFF?text=Logo"
    alt="Medium Logo"
    size={32}
  />
  <Logo
    src="https://via.placeholder.com/150x50/4F46E5/FFFFFF?text=Logo"
    alt="Large Logo"
    size={48}
  />
  <Logo
    src="https://via.placeholder.com/150x50/4F46E5/FFFFFF?text=Logo"
    alt="Extra Large Logo"
    size={64}
  />
</Flex>`}
        />
      </Section>

      <Section title="As a Link" description="Make the logo clickable by providing an href.">
        <LiveExample
          code={`<Logo
  src="https://via.placeholder.com/150x50/4F46E5/FFFFFF?text=Logo"
  alt="Company Logo"
  href="/"
  size={40}
/>`}
        />
      </Section>

      <Section title="In Navigation" description="Common pattern of logo in a navigation bar.">
        <LiveExample
          code={`<Flex
  align="center"
  justify="between"
  style={{
    padding: '16px 24px',
    borderBottom: '1px solid #e5e5e5',
  }}
>
  <Logo
    src="https://via.placeholder.com/150x50/4F46E5/FFFFFF?text=Brand"
    alt="Brand"
    href="/"
    size={36}
  />
  <Flex gap="4">
    <Button variant="ghost">Products</Button>
    <Button variant="ghost">Pricing</Button>
    <Button variant="ghost">About</Button>
    <Button>Sign In</Button>
  </Flex>
</Flex>`}
        />
      </Section>

      <Section title="With Text" description="Logo paired with brand name.">
        <LiveExample
          code={`<Flex gap="3" align="center">
  <Logo
    src="https://via.placeholder.com/50x50/4F46E5/FFFFFF?text=L"
    alt="Logo"
    size={40}
  />
  <Title size="6" weight="bold">Brand Name</Title>
</Flex>`}
        />
      </Section>

      <Section title="Footer Logo" description="Centered logo in footer context.">
        <LiveExample
          code={`<Flex
  direction="column"
  align="center"
  gap="3"
  style={{
    padding: '40px',
    borderTop: '1px solid #e5e5e5',
    background: '#fafafa',
  }}
>
  <Logo
    src="https://via.placeholder.com/150x50/4F46E5/FFFFFF?text=Company"
    alt="Company"
    size={32}
  />
  <Text size="2" style={{ color: '#666' }}>
    © 2024 Company Name. All rights reserved.
  </Text>
</Flex>`}
        />
      </Section>

      <Section title="Usage Guidelines">
        <Text size="3" style={{ color: '#666', marginBottom: 16 }}>
          Best practices for using logos:
        </Text>
        <ul style={{ color: '#666', fontSize: '14px', lineHeight: 1.8 }}>
          <li><strong>Always provide alt text:</strong> Essential for accessibility and SEO</li>
          <li><strong>Link to home:</strong> Navigation logos typically link to the homepage</li>
          <li><strong>Consistent sizing:</strong> Maintain consistent logo size across similar contexts</li>
          <li><strong>SVG preferred:</strong> Use SVG format for crisp logos at any size</li>
          <li><strong>Aspect ratio:</strong> Logo component maintains the image's aspect ratio</li>
        </ul>
      </Section>

      <Section title="Props">
        <PropTable props={logoProps} />
      </Section>
    </ComponentDoc>
  );
};
