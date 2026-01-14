import { ComponentDoc, PropTable, LiveExample, Section } from '../../components';
import type { PropDefinition } from '../../components';
import { Text } from '@metorial-io/ui';

const entityProps: PropDefinition[] = [
  {
    name: 'EntityWrapper',
    type: 'component',
    description: 'Main container component with borders and rounded corners',
  },
  {
    name: 'EntityHeader',
    type: 'component',
    description: 'Header section for titles and actions',
  },
  {
    name: 'EntityContent',
    type: 'component',
    description: 'Content area that handles responsive layouts and dividers',
  },
  {
    name: 'EntityFooter',
    type: 'component',
    description: 'Footer section for actions or additional information',
  },
];

export const EntityDoc = () => {
  return (
    <ComponentDoc
      title="Entity"
      description="A card-like component for displaying structured entity information. Perfect for user profiles, project cards, resource listings, and data records."
      importStatement="import { EntityWrapper, EntityHeader, EntityContent, EntityFooter } from '@metorial-io/ui';"
      package="ui"
    >
      <Section title="Basic Usage" description="A simple entity card with header and content.">
        <LiveExample
          code={`<EntityWrapper>
  <EntityHeader>
    <Flex justify="between" align="center" style={{ width: '100%' }}>
      <Text weight="strong" size="4">Project Name</Text>
      <Button size="2" variant="ghost">
        <RiMoreLine />
      </Button>
    </Flex>
  </EntityHeader>
  <EntityContent>
    <Flex direction="column" gap="2" style={{ padding: '15px 0' }}>
      <Text size="2">A modern web application for managing projects.</Text>
      <Text size="2" color="gray600">Last updated: 2 hours ago</Text>
    </Flex>
  </EntityContent>
</EntityWrapper>`}
        />
      </Section>

      <Section title="With Footer" description="Add a footer for actions or additional metadata.">
        <LiveExample
          code={`<EntityWrapper>
  <EntityHeader>
    <Flex align="center" gap="3" style={{ width: '100%' }}>
      <div style={{
        width: 48,
        height: 48,
        borderRadius: '50%',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
      }} />
      <Flex direction="column">
        <Text weight="strong">John Doe</Text>
        <Text size="2" color="gray600">Product Designer</Text>
      </Flex>
    </Flex>
  </EntityHeader>

  <EntityContent>
    <Flex direction="column" gap="2" style={{ padding: '15px 0' }}>
      <Text size="2">Passionate about creating beautiful user experiences.</Text>
      <Flex gap="2">
        <Badge>UI/UX</Badge>
        <Badge>Design Systems</Badge>
      </Flex>
    </Flex>
  </EntityContent>

  <EntityFooter>
    <Flex gap="2">
      <Button size="2" variant="soft" fullWidth>Message</Button>
      <Button size="2" variant="outline" fullWidth>View Profile</Button>
    </Flex>
  </EntityFooter>
</EntityWrapper>`}
        />
      </Section>

      <Section title="Multi-column Content" description="EntityContent automatically handles multiple children with responsive layout.">
        <LiveExample
          code={`<EntityWrapper>
  <EntityHeader>
    <Text weight="strong" size="3">Analytics Overview</Text>
  </EntityHeader>

  <EntityContent>
    <Flex direction="column" gap="3" style={{ padding: '15px 0', flex: 1 }}>
      <Text size="1" weight="strong" color="gray600">USERS</Text>
      <Text size="6" weight="strong">12,543</Text>
      <Text size="2" color="green">+12.5% from last month</Text>
    </Flex>

    <Flex direction="column" gap="3" style={{ padding: '15px 0', flex: 1 }}>
      <Text size="1" weight="strong" color="gray600">REVENUE</Text>
      <Text size="6" weight="strong">$45,231</Text>
      <Text size="2" color="green">+8.2% from last month</Text>
    </Flex>
  </EntityContent>
</EntityWrapper>`}
        />
      </Section>

      <Section title="List of Entities" description="Stack multiple entities to create a list or grid.">
        <LiveExample
          code={`<Flex direction="column" gap="3">
  <EntityWrapper>
    <EntityHeader>
      <Flex justify="between" align="center" style={{ width: '100%' }}>
        <Text weight="strong">Website Redesign</Text>
        <Badge color="blue">In Progress</Badge>
      </Flex>
    </EntityHeader>
    <EntityContent>
      <Text size="2" style={{ padding: '10px 0' }}>
        Redesigning the company website with modern UI
      </Text>
    </EntityContent>
  </EntityWrapper>

  <EntityWrapper>
    <EntityHeader>
      <Flex justify="between" align="center" style={{ width: '100%' }}>
        <Text weight="strong">Mobile App Development</Text>
        <Badge color="green">Completed</Badge>
      </Flex>
    </EntityHeader>
    <EntityContent>
      <Text size="2" style={{ padding: '10px 0' }}>
        Native mobile app for iOS and Android
      </Text>
    </EntityContent>
  </EntityWrapper>

  <EntityWrapper>
    <EntityHeader>
      <Flex justify="between" align="center" style={{ width: '100%' }}>
        <Text weight="strong">API Documentation</Text>
        <Badge color="orange">Pending</Badge>
      </Flex>
    </EntityHeader>
    <EntityContent>
      <Text size="2" style={{ padding: '10px 0' }}>
        Comprehensive API documentation for developers
      </Text>
    </EntityContent>
  </EntityWrapper>
</Flex>`}
        />
      </Section>

      <Section title="Complex Entity" description="Combine all parts for rich entity cards with multiple sections.">
        <LiveExample
          code={`<EntityWrapper>
  <EntityHeader>
    <Flex justify="between" align="center" style={{ width: '100%' }}>
      <Flex align="center" gap="3">
        <div style={{
          width: 40,
          height: 40,
          borderRadius: 8,
          background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <RiFileTextLine color="white" />
        </div>
        <Flex direction="column">
          <Text weight="strong">Q4 Report</Text>
          <Text size="2" color="gray600">Financial Analysis</Text>
        </Flex>
      </Flex>
      <Menu
        items={[
          { id: 'edit', label: 'Edit' },
          { id: 'duplicate', label: 'Duplicate' },
          { type: 'separator' },
          { id: 'delete', label: 'Delete' }
        ]}
        onItemClick={(id) => console.log(id)}
      >
        <Button size="2" variant="ghost">
          <RiMoreLine />
        </Button>
      </Menu>
    </Flex>
  </EntityHeader>

  <EntityContent>
    <Flex direction="column" gap="2" style={{ padding: '15px 0' }}>
      <Text size="2">
        Comprehensive financial analysis and projections for Q4 2024.
      </Text>
      <Flex gap="2">
        <Badge size="1">Finance</Badge>
        <Badge size="1">Reports</Badge>
        <Badge size="1">2024</Badge>
      </Flex>
    </Flex>
  </EntityContent>

  <EntityFooter>
    <Flex justify="between" align="center" style={{ width: '100%' }}>
      <Flex align="center" gap="2">
        <div style={{
          width: 24,
          height: 24,
          borderRadius: '50%',
          background: '#667eea'
        }} />
        <Text size="2" color="gray600">Sarah Johnson</Text>
      </Flex>
      <Text size="2" color="gray600">Updated 3 days ago</Text>
    </Flex>
  </EntityFooter>
</EntityWrapper>`}
        />
      </Section>

      <Section title="Usage Guidelines">
        <Text size="3" style={{ color: '#666', marginBottom: 16 }}>
          Best practices for using Entity components:
        </Text>
        <ul style={{ color: '#666', fontSize: '14px', lineHeight: 1.8 }}>
          <li><strong>Consistent structure:</strong> Use the same entity structure across similar items</li>
          <li><strong>Clear hierarchy:</strong> Use headers for titles, content for details, footer for actions</li>
          <li><strong>Responsive content:</strong> EntityContent handles responsive multi-column layouts</li>
          <li><strong>Action placement:</strong> Put primary actions in the footer for consistency</li>
          <li><strong>Visual identity:</strong> Use avatars, icons, or colors to make entities recognizable</li>
          <li><strong>Lists and grids:</strong> Stack entities vertically or use grid layouts for collections</li>
        </ul>
      </Section>

      <Section title="Components">
        <PropTable props={entityProps} />
      </Section>
    </ComponentDoc>
  );
};
