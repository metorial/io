import { ComponentDoc, PropTable, LiveExample, Section } from '../../components';
import type { PropDefinition } from '../../components';
import { Text } from '@metorial-io/ui';

const menuProps: PropDefinition[] = [
  {
    name: 'children',
    type: 'React.ReactNode',
    description: 'The trigger element for the menu',
  },
  {
    name: 'items',
    type: 'MenuItem[]',
    description: 'Array of menu items or separators',
  },
  {
    name: 'onItemClick',
    type: '(id: string) => void',
    description: 'Callback when a menu item is clicked',
  },
  {
    name: 'title',
    type: 'string',
    description: 'Optional title displayed at the top of the menu',
  },
  {
    name: 'label',
    type: 'string',
    description: 'Aria-label for the menu trigger',
  },
  {
    name: 'setIsOpen',
    type: '(isOpen: boolean) => void',
    description: 'Callback to control menu open state externally',
  },
];

export const MenuDoc = () => {
  return (
    <ComponentDoc
      title="Menu"
      description="A dropdown menu component for displaying a list of actions or options. Built on Radix UI Dropdown Menu with keyboard navigation and accessibility support."
      importStatement="import { Menu } from '@metorial-io/ui';"
      package="ui"
    >
      <Section title="Basic Usage" description="A simple dropdown menu with clickable items.">
        <LiveExample
          code={`function BasicMenu() {
  const handleItemClick = (id: string) => {
    console.log('Clicked:', id);
  };

  return (
    <Menu
      items={[
        { id: 'edit', label: 'Edit' },
        { id: 'duplicate', label: 'Duplicate' },
        { id: 'delete', label: 'Delete' }
      ]}
      onItemClick={handleItemClick}
    >
      <Button iconRight={<RiArrowDownSLine />}>
        Actions
      </Button>
    </Menu>
  );
}`}
        />
      </Section>

      <Section title="With Descriptions" description="Add helpful descriptions to menu items for better clarity.">
        <LiveExample
          code={`function MenuWithDescriptions() {
  const handleItemClick = (id: string) => {
    console.log('Clicked:', id);
  };

  return (
    <Menu
      items={[
        {
          id: 'export-pdf',
          label: 'Export as PDF',
          description: 'Download a PDF version of this document'
        },
        {
          id: 'export-csv',
          label: 'Export as CSV',
          description: 'Download data in CSV format'
        },
        {
          id: 'export-json',
          label: 'Export as JSON',
          description: 'Download raw JSON data'
        }
      ]}
      onItemClick={handleItemClick}
    >
      <Button iconLeft={<RiDownloadLine />}>
        Export
      </Button>
    </Menu>
  );
}`}
        />
      </Section>

      <Section title="With Title" description="Add a title to the menu for better context.">
        <LiveExample
          code={`function MenuWithTitle() {
  const handleItemClick = (id: string) => {
    console.log('Clicked:', id);
  };

  return (
    <Menu
      title="Project Actions"
      items={[
        { id: 'settings', label: 'Settings' },
        { id: 'members', label: 'Manage Members' },
        { id: 'analytics', label: 'View Analytics' }
      ]}
      onItemClick={handleItemClick}
    >
      <Button variant="ghost">
        <RiMoreLine />
      </Button>
    </Menu>
  );
}`}
        />
      </Section>

      <Section title="With Separators" description="Use separators to group related menu items.">
        <LiveExample
          code={`function MenuWithSeparators() {
  const handleItemClick = (id: string) => {
    console.log('Clicked:', id);
  };

  return (
    <Menu
      items={[
        { id: 'profile', label: 'Profile' },
        { id: 'settings', label: 'Settings' },
        { type: 'separator' },
        { id: 'help', label: 'Help & Support' },
        { id: 'docs', label: 'Documentation' },
        { type: 'separator' },
        { id: 'logout', label: 'Log Out' }
      ]}
      onItemClick={handleItemClick}
    >
      <Button variant="outline">
        Account
      </Button>
    </Menu>
  );
}`}
        />
      </Section>

      <Section title="Disabled Items" description="Disable menu items that are not currently available.">
        <LiveExample
          code={`function MenuWithDisabledItems() {
  const handleItemClick = (id: string) => {
    console.log('Clicked:', id);
  };

  return (
    <Menu
      items={[
        { id: 'copy', label: 'Copy' },
        { id: 'cut', label: 'Cut' },
        { id: 'paste', label: 'Paste', disabled: true },
        { type: 'separator' },
        { id: 'undo', label: 'Undo', disabled: true },
        { id: 'redo', label: 'Redo', disabled: true }
      ]}
      onItemClick={handleItemClick}
    >
      <Button variant="ghost">
        Edit
      </Button>
    </Menu>
  );
}`}
        />
      </Section>

      <Section title="Icon Button Trigger" description="Use an icon button as the menu trigger for compact UIs.">
        <LiveExample
          code={`function IconMenuTrigger() {
  const handleItemClick = (id: string) => {
    console.log('Clicked:', id);
  };

  return (
    <Flex gap="3">
      <Menu
        label="More options"
        items={[
          { id: 'share', label: 'Share' },
          { id: 'archive', label: 'Archive' },
          { id: 'delete', label: 'Delete' }
        ]}
        onItemClick={handleItemClick}
      >
        <Button variant="ghost" size="2">
          <RiMoreLine />
        </Button>
      </Menu>

      <Menu
        label="Settings menu"
        items={[
          { id: 'general', label: 'General' },
          { id: 'security', label: 'Security' },
          { id: 'notifications', label: 'Notifications' }
        ]}
        onItemClick={handleItemClick}
      >
        <Button variant="soft" size="2">
          <RiSettings3Line />
        </Button>
      </Menu>
    </Flex>
  );
}`}
        />
      </Section>

      <Section title="Usage Guidelines">
        <Text size="3" style={{ color: '#666', marginBottom: 16 }}>
          Best practices for using menus:
        </Text>
        <ul style={{ color: '#666', fontSize: '14px', lineHeight: 1.8 }}>
          <li><strong>Clear labels:</strong> Use concise, action-oriented labels for menu items</li>
          <li><strong>Group related items:</strong> Use separators to organize menu items logically</li>
          <li><strong>Limit items:</strong> Keep menus under 10 items; consider sub-menus for more options</li>
          <li><strong>Descriptions for clarity:</strong> Add descriptions when actions need explanation</li>
          <li><strong>Keyboard navigation:</strong> Users can navigate with arrow keys and select with Enter</li>
          <li><strong>Disabled state:</strong> Clearly indicate when actions are unavailable</li>
        </ul>
      </Section>

      <Section title="Props">
        <PropTable props={menuProps} />
      </Section>
    </ComponentDoc>
  );
};
