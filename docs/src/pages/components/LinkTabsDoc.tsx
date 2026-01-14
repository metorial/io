import { ComponentDoc, PropTable, LiveExample, Section } from '../../components';
import type { PropDefinition } from '../../components';
import { Text } from '@metorial-io/ui';

const linkTabsProps: PropDefinition[] = [
  {
    name: 'current',
    type: 'string',
    description: 'The current URL path to match against tabs',
  },
  {
    name: 'links',
    type: 'LinkItem[]',
    description: 'Array of link items with to (path) and label',
  },
  {
    name: 'tabIndicator',
    type: 'boolean',
    default: 'true',
    description: 'Whether to show the background indicator behind the active tab',
  },
  {
    name: 'lineIndicator',
    type: 'boolean',
    default: 'true',
    description: 'Whether to show the line indicator below the active tab',
  },
  {
    name: 'height',
    type: 'number',
    default: '30',
    description: 'Height of each tab in pixels',
  },
  {
    name: 'gap',
    type: 'number',
    default: '20',
    description: 'Gap between tabs in pixels',
  },
  {
    name: 'variant',
    type: "'soft' | 'outline'",
    default: "'soft'",
    description: 'Visual style of the tab indicator',
  },
  {
    name: 'padding',
    type: 'object',
    description: 'Padding around the tabs (left, right, top, bottom)',
  },
  {
    name: 'margin',
    type: 'object',
    description: 'Margin around the tabs (top, bottom)',
  },
  {
    name: 'maxWidth',
    type: 'number | string',
    default: "'100%'",
    description: 'Maximum width of the tabs container',
  },
];

export const LinkTabsDoc = () => {
  return (
    <ComponentDoc
      title="LinkTabs"
      description="A navigation tabs component that integrates with your router. Automatically matches the current URL to highlight the active tab with smart path matching."
      importStatement="import { LinkTabs } from '@metorial-io/ui';"
      package="ui"
    >
      <Section title="Basic Usage" description="Navigation tabs that work with your router.">
        <LiveExample
          code={`function BasicLinkTabs() {
  // In a real app, this would come from your router
  const currentPath = window.location.pathname;

  return (
    <LinkTabs
      current={currentPath}
      links={[
        { to: '/dashboard', label: 'Dashboard' },
        { to: '/projects', label: 'Projects' },
        { to: '/team', label: 'Team' }
      ]}
    />
  );
}`}
        />
      </Section>

      <Section title="Smart Path Matching" description="LinkTabs intelligently matches nested routes. If you're on /projects/123, the Projects tab will be active.">
        <LiveExample
          code={`function SmartMatchingTabs() {
  // Simulating a nested route
  const currentPath = '/projects/project-123/settings';

  return (
    <Flex direction="column" gap="3">
      <Text size="2" color="gray600">
        Current path: {currentPath}
      </Text>

      <LinkTabs
        current={currentPath}
        links={[
          { to: '/', label: 'Home' },
          { to: '/projects', label: 'Projects' },
          { to: '/team', label: 'Team' },
          { to: '/settings', label: 'Settings' }
        ]}
      />

      <Text size="2" color="gray600">
        Notice how "Projects" is active even though the exact path doesn't match
      </Text>
    </Flex>
  );
}`}
        />
      </Section>

      <Section title="Variants" description="Choose between soft and outline tab indicators.">
        <LiveExample
          code={`function LinkTabVariants() {
  const currentPath = '/dashboard';

  const links = [
    { to: '/dashboard', label: 'Dashboard' },
    { to: '/analytics', label: 'Analytics' },
    { to: '/reports', label: 'Reports' }
  ];

  return (
    <Flex direction="column" gap="5">
      <div>
        <Text size="2" weight="strong" style={{ marginBottom: 10 }}>
          Soft Variant
        </Text>
        <LinkTabs current={currentPath} links={links} variant="soft" />
      </div>

      <div>
        <Text size="2" weight="strong" style={{ marginBottom: 10 }}>
          Outline Variant
        </Text>
        <LinkTabs current={currentPath} links={links} variant="outline" />
      </div>
    </Flex>
  );
}`}
        />
      </Section>

      <Section title="Custom Styling" description="Customize the appearance with height, gap, and spacing options.">
        <LiveExample
          code={`function CustomLinkTabs() {
  const currentPath = '/home';

  return (
    <LinkTabs
      current={currentPath}
      links={[
        { to: '/home', label: 'Home' },
        { to: '/products', label: 'Products' },
        { to: '/about', label: 'About' },
        { to: '/contact', label: 'Contact' }
      ]}
      height={40}
      gap={30}
      padding={{ left: 20, right: 20, bottom: 10 }}
      margin={{ bottom: 20 }}
    />
  );
}`}
        />
      </Section>

      <Section title="Minimal Style" description="Hide indicators for a simpler navigation style.">
        <LiveExample
          code={`function MinimalLinkTabs() {
  const currentPath = '/inbox';

  return (
    <LinkTabs
      current={currentPath}
      links={[
        { to: '/inbox', label: 'Inbox' },
        { to: '/sent', label: 'Sent' },
        { to: '/drafts', label: 'Drafts' },
        { to: '/archive', label: 'Archive' }
      ]}
      tabIndicator={false}
      lineIndicator={true}
    />
  );
}`}
        />
      </Section>

      <Section title="With Sub-navigation" description="Use LinkTabs for main navigation and secondary navigation within sections.">
        <LiveExample
          code={`function SubNavigation() {
  const mainPath = '/settings';
  const subPath = '/settings/account';

  return (
    <Flex direction="column" gap="4">
      <LinkTabs
        current={mainPath}
        links={[
          { to: '/dashboard', label: 'Dashboard' },
          { to: '/settings', label: 'Settings' },
          { to: '/help', label: 'Help' }
        ]}
      />

      <LinkTabs
        current={subPath}
        links={[
          { to: '/settings/account', label: 'Account' },
          { to: '/settings/security', label: 'Security' },
          { to: '/settings/notifications', label: 'Notifications' },
          { to: '/settings/billing', label: 'Billing' }
        ]}
        variant="outline"
        height={32}
      />
    </Flex>
  );
}`}
        />
      </Section>

      <Section title="Usage Guidelines">
        <Text size="3" style={{ color: '#666', marginBottom: 16 }}>
          Best practices for using LinkTabs:
        </Text>
        <ul style={{ color: '#666', fontSize: '14px', lineHeight: 1.8 }}>
          <li><strong>Primary navigation:</strong> Use LinkTabs for main navigation that changes page content</li>
          <li><strong>Routing integration:</strong> Works with any router (React Router, Next.js, etc.)</li>
          <li><strong>Smart matching:</strong> Automatically handles nested routes and sub-paths</li>
          <li><strong>Consistent structure:</strong> Keep the same navigation structure across related pages</li>
          <li><strong>Mobile responsive:</strong> Tabs automatically scroll horizontally on small screens</li>
          <li><strong>SEO friendly:</strong> Uses real links for better search engine indexing</li>
        </ul>
      </Section>

      <Section title="Props">
        <PropTable props={linkTabsProps} />
      </Section>
    </ComponentDoc>
  );
};
