import { ComponentDoc, PropTable, LiveExample, Section } from '../../components';
import type { PropDefinition } from '../../components';
import { Text } from '@metorial-io/ui';

const tabsProps: PropDefinition[] = [
  {
    name: 'current',
    type: 'string',
    description: 'The ID or path of the currently active tab',
  },
  {
    name: 'tabs',
    type: 'TabItem[]',
    description: 'Array of tab items with label and either id or to (for links)',
  },
  {
    name: 'action',
    type: '(id: string) => void',
    description: 'Callback when a tab is clicked',
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

export const TabsDoc = () => {
  return (
    <ComponentDoc
      title="Tabs"
      description="A tabs component for switching between different views or content sections. Features smooth animations and supports both controlled state and routing."
      importStatement="import { Tabs } from '@metorial-io/ui';"
      package="ui"
    >
      <Section title="Basic Usage" description="Simple tabs with controlled state.">
        <LiveExample
          code={`function BasicTabs() {
  const [current, setCurrent] = useState('overview');

  return (
    <Flex direction="column" gap="4">
      <Tabs
        current={current}
        tabs={[
          { id: 'overview', label: 'Overview' },
          { id: 'analytics', label: 'Analytics' },
          { id: 'settings', label: 'Settings' }
        ]}
        action={setCurrent}
      />

      <div>
        {current === 'overview' && <Text>Overview content</Text>}
        {current === 'analytics' && <Text>Analytics content</Text>}
        {current === 'settings' && <Text>Settings content</Text>}
      </div>
    </Flex>
  );
}`}
        />
      </Section>

      <Section title="Variants" description="Choose between soft (filled) and outline variants.">
        <LiveExample
          code={`function TabVariants() {
  const [currentSoft, setCurrentSoft] = useState('tab1');
  const [currentOutline, setCurrentOutline] = useState('tab1');

  const tabs = [
    { id: 'tab1', label: 'Projects' },
    { id: 'tab2', label: 'Tasks' },
    { id: 'tab3', label: 'Team' }
  ];

  return (
    <Flex direction="column" gap="5">
      <div>
        <Text size="2" weight="strong" style={{ marginBottom: 10 }}>
          Soft Variant (default)
        </Text>
        <Tabs
          current={currentSoft}
          tabs={tabs}
          action={setCurrentSoft}
          variant="soft"
        />
      </div>

      <div>
        <Text size="2" weight="strong" style={{ marginBottom: 10 }}>
          Outline Variant
        </Text>
        <Tabs
          current={currentOutline}
          tabs={tabs}
          action={setCurrentOutline}
          variant="outline"
        />
      </div>
    </Flex>
  );
}`}
        />
      </Section>

      <Section title="Custom Styling" description="Customize height, gap, and indicators.">
        <LiveExample
          code={`function CustomTabs() {
  const [current, setCurrent] = useState('home');

  return (
    <Flex direction="column" gap="4">
      <Tabs
        current={current}
        tabs={[
          { id: 'home', label: 'Home' },
          { id: 'products', label: 'Products' },
          { id: 'about', label: 'About' }
        ]}
        action={setCurrent}
        height={40}
        gap={30}
      />
    </Flex>
  );
}`}
        />
      </Section>

      <Section title="Without Indicators" description="Hide the tab and line indicators for a minimal look.">
        <LiveExample
          code={`function MinimalTabs() {
  const [current, setCurrent] = useState('all');

  return (
    <Tabs
      current={current}
      tabs={[
        { id: 'all', label: 'All' },
        { id: 'active', label: 'Active' },
        { id: 'completed', label: 'Completed' },
        { id: 'archived', label: 'Archived' }
      ]}
      action={setCurrent}
      tabIndicator={false}
      lineIndicator={true}
    />
  );
}`}
        />
      </Section>

      <Section title="With Routing" description="Use tabs with navigation by providing 'to' instead of 'id'.">
        <LiveExample
          code={`function RoutedTabs() {
  const currentPath = window.location.pathname;

  return (
    <Tabs
      current={currentPath}
      tabs={[
        { to: '/dashboard', label: 'Dashboard' },
        { to: '/projects', label: 'Projects' },
        { to: '/team', label: 'Team' },
        { to: '/settings', label: 'Settings' }
      ]}
      action={(path) => console.log('Navigate to:', path)}
    />
  );
}`}
        />
      </Section>

      <Section title="Custom Padding and Margin" description="Control spacing around the tabs.">
        <LiveExample
          code={`function TabsWithSpacing() {
  const [current, setCurrent] = useState('inbox');

  return (
    <Tabs
      current={current}
      tabs={[
        { id: 'inbox', label: 'Inbox' },
        { id: 'sent', label: 'Sent' },
        { id: 'drafts', label: 'Drafts' }
      ]}
      action={setCurrent}
      padding={{ left: 20, right: 20, top: 10, bottom: 15 }}
      margin={{ top: 10, bottom: 20 }}
    />
  );
}`}
        />
      </Section>

      <Section title="Usage Guidelines">
        <Text size="3" style={{ color: '#666', marginBottom: 16 }}>
          Best practices for using tabs:
        </Text>
        <ul style={{ color: '#666', fontSize: '14px', lineHeight: 1.8 }}>
          <li><strong>Logical grouping:</strong> Use tabs to organize related content into clear categories</li>
          <li><strong>Limit tab count:</strong> Keep to 5-7 tabs maximum for better usability</li>
          <li><strong>Clear labels:</strong> Use short, descriptive labels that clearly indicate content</li>
          <li><strong>Persist state:</strong> Remember the active tab when users navigate away and return</li>
          <li><strong>Mobile consideration:</strong> Tabs automatically scroll horizontally on smaller screens</li>
          <li><strong>Keyboard navigation:</strong> Users can navigate tabs with arrow keys</li>
        </ul>
      </Section>

      <Section title="Props">
        <PropTable props={tabsProps} />
      </Section>
    </ComponentDoc>
  );
};
