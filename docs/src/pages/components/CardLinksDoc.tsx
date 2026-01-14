import { ComponentDoc, PropTable, LiveExample, Section } from '../../components';
import type { PropDefinition } from '../../components';
import { Text } from '@metorial-io/ui';

const cardLinksProps: PropDefinition[] = [
  {
    name: 'CardLinks.Items',
    type: 'component',
    description: 'Grid container for card link items',
  },
  {
    name: 'CardLinks.Link',
    type: 'component',
    description: 'Individual card link with hover effects and navigation',
  },
  {
    name: 'CardLinks.Group',
    type: 'component',
    description: 'Container for grouping related card links',
  },
  {
    name: 'CardLinks.GroupPanel',
    type: 'component',
    description: 'Styled panel with background for grouped card links',
  },
  {
    name: 'CardLinks.GroupTitle',
    type: 'component',
    description: 'Title heading for card link groups',
  },
  {
    name: 'CardLinks.GroupPreTitle',
    type: 'component',
    description: 'Subtitle or category label above group title',
  },
];

export const CardLinksDoc = () => {
  return (
    <ComponentDoc
      title="CardLinks"
      description="Interactive card components for navigation. Perfect for dashboards, resource lists, or action menus with hover effects and clear visual hierarchy."
      importStatement="import { CardLinks } from '@metorial-io/ui';"
      package="ui"
    >
      <Section title="Basic Usage" description="A grid of clickable card links.">
        <LiveExample
          code={`<CardLinks.Items>
  <CardLinks.Link
    to="/projects"
    title="Projects"
    description="View and manage your projects"
  />
  <CardLinks.Link
    to="/team"
    title="Team"
    description="Manage team members and roles"
  />
  <CardLinks.Link
    to="/settings"
    title="Settings"
    description="Configure your account settings"
  />
  <CardLinks.Link
    to="/analytics"
    title="Analytics"
    description="View insights and analytics"
  />
</CardLinks.Items>`}
        />
      </Section>

      <Section title="Grouped Cards" description="Group related card links together.">
        <LiveExample
          code={`<Flex direction="column" gap="4">
  <CardLinks.Group>
    <CardLinks.GroupTitle>Getting Started</CardLinks.GroupTitle>
    <CardLinks.Items>
      <CardLinks.Link
        to="/docs/installation"
        title="Installation"
        description="Install and set up the library"
      />
      <CardLinks.Link
        to="/docs/quick-start"
        title="Quick Start"
        description="Get started in 5 minutes"
      />
      <CardLinks.Link
        to="/docs/examples"
        title="Examples"
        description="View example implementations"
      />
    </CardLinks.Items>
  </CardLinks.Group>

  <CardLinks.Group>
    <CardLinks.GroupTitle>Components</CardLinks.GroupTitle>
    <CardLinks.Items>
      <CardLinks.Link
        to="/docs/button"
        title="Button"
        description="Interactive button component"
      />
      <CardLinks.Link
        to="/docs/input"
        title="Input"
        description="Form input component"
      />
      <CardLinks.Link
        to="/docs/dialog"
        title="Dialog"
        description="Modal dialog component"
      />
    </CardLinks.Items>
  </CardLinks.Group>
</Flex>`}
        />
      </Section>

      <Section title="With Panel Background" description="Use GroupPanel for a highlighted background.">
        <LiveExample
          code={`<CardLinks.Group>
  <CardLinks.GroupPanel>
    <CardLinks.GroupPreTitle>Featured</CardLinks.GroupPreTitle>
    <CardLinks.GroupTitle>Popular Resources</CardLinks.GroupTitle>

    <CardLinks.Items>
      <CardLinks.Link
        to="/guides/api"
        title="API Guide"
        description="Complete API reference"
      />
      <CardLinks.Link
        to="/guides/authentication"
        title="Authentication"
        description="Secure your application"
      />
      <CardLinks.Link
        to="/guides/deployment"
        title="Deployment"
        description="Deploy to production"
      />
    </CardLinks.Items>
  </CardLinks.GroupPanel>
</CardLinks.Group>`}
        />
      </Section>

      <Section title="Dashboard Navigation" description="Use card links for dashboard section navigation.">
        <LiveExample
          code={`<Flex direction="column" gap="4">
  <Text size="5" weight="strong">Dashboard</Text>

  <CardLinks.Group>
    <CardLinks.GroupTitle>Overview</CardLinks.GroupTitle>
    <CardLinks.Items>
      <CardLinks.Link
        to="/dashboard/overview"
        title="Overview"
        description="See your activity summary"
      />
      <CardLinks.Link
        to="/dashboard/recent"
        title="Recent Activity"
        description="View recent updates"
      />
    </CardLinks.Items>
  </CardLinks.Group>

  <CardLinks.Group>
    <CardLinks.GroupTitle>Management</CardLinks.GroupTitle>
    <CardLinks.Items>
      <CardLinks.Link
        to="/dashboard/users"
        title="Users"
        description="Manage user accounts"
      />
      <CardLinks.Link
        to="/dashboard/content"
        title="Content"
        description="Manage your content"
      />
      <CardLinks.Link
        to="/dashboard/reports"
        title="Reports"
        description="Generate and view reports"
      />
    </CardLinks.Items>
  </CardLinks.Group>
</Flex>`}
        />
      </Section>

      <Section title="Action Cards" description="Use card links for actions and workflows.">
        <LiveExample
          code={`<CardLinks.Items>
  <CardLinks.Link
    to="/new/project"
    title="Create Project"
    description="Start a new project from scratch"
  />
  <CardLinks.Link
    to="/import"
    title="Import Project"
    description="Import an existing project"
  />
  <CardLinks.Link
    to="/templates"
    title="Use Template"
    description="Start from a pre-built template"
  />
  <CardLinks.Link
    to="/examples"
    title="Clone Example"
    description="Clone from example projects"
  />
</CardLinks.Items>`}
        />
      </Section>

      <Section title="Multi-section Layout" description="Organize complex navigation with multiple sections.">
        <LiveExample
          code={`<Flex direction="column" gap="5">
  <CardLinks.Group>
    <CardLinks.GroupPanel>
      <CardLinks.GroupPreTitle>Documentation</CardLinks.GroupPreTitle>
      <CardLinks.GroupTitle>Core Concepts</CardLinks.GroupTitle>
      <CardLinks.Items>
        <CardLinks.Link
          to="/docs/components"
          title="Components"
          description="Building blocks for your UI"
        />
        <CardLinks.Link
          to="/docs/hooks"
          title="Hooks"
          description="React hooks for common tasks"
        />
      </CardLinks.Items>
    </CardLinks.GroupPanel>
  </CardLinks.Group>

  <CardLinks.Group>
    <CardLinks.GroupTitle>Resources</CardLinks.GroupTitle>
    <CardLinks.Items>
      <CardLinks.Link
        to="/blog"
        title="Blog"
        description="Latest news and updates"
      />
      <CardLinks.Link
        to="/community"
        title="Community"
        description="Join our community"
      />
      <CardLinks.Link
        to="/support"
        title="Support"
        description="Get help when you need it"
      />
    </CardLinks.Items>
  </CardLinks.Group>
</Flex>`}
        />
      </Section>

      <Section title="Usage Guidelines">
        <Text size="3" style={{ color: '#666', marginBottom: 16 }}>
          Best practices for using CardLinks:
        </Text>
        <ul style={{ color: '#666', fontSize: '14px', lineHeight: 1.8 }}>
          <li><strong>Clear titles:</strong> Use concise, descriptive titles that indicate destination</li>
          <li><strong>Helpful descriptions:</strong> Add brief descriptions to explain what users will find</li>
          <li><strong>Logical grouping:</strong> Group related links together with clear section titles</li>
          <li><strong>Grid layout:</strong> The auto-fill grid adapts to container width</li>
          <li><strong>Visual feedback:</strong> Cards have hover effects and scale animation</li>
          <li><strong>Navigation purpose:</strong> Use for navigation, not for actions (use buttons instead)</li>
        </ul>
      </Section>

      <Section title="Components">
        <PropTable props={cardLinksProps} />
      </Section>
    </ComponentDoc>
  );
};
