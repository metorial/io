import { ComponentDoc, PropTable, LiveExample, Section } from '../../components';
import type { PropDefinition } from '../../components';
import { Text } from '@metorial-io/ui';

const groupProps: PropDefinition[] = [
  {
    name: 'Group.Wrapper',
    type: 'component',
    description: 'Container component that wraps all group content with borders',
  },
  {
    name: 'Group.Header',
    type: 'component',
    description: 'Header section with title, description, and optional actions',
  },
  {
    name: 'Group.HeaderRow',
    type: 'component',
    description: 'Custom header row for more control over header layout',
  },
  {
    name: 'Group.Row',
    type: 'component',
    description: 'Main content row for group body content',
  },
  {
    name: 'Group.Content',
    type: 'component',
    description: 'Padded content area within a row',
  },
  {
    name: 'Group.Footer',
    type: 'component',
    description: 'Footer section for actions or additional information',
  },
];

export const GroupDoc = () => {
  return (
    <ComponentDoc
      title="Group"
      description="A layout component for grouping related content with headers, sections, and footers. Perfect for settings panels, forms, and structured content."
      importStatement="import { Group } from '@metorial-io/ui';"
      package="ui"
    >
      <Section title="Basic Usage" description="A simple group with header and content.">
        <LiveExample
          code={`<Group.Wrapper>
  <Group.Header
    title="Account Settings"
    description="Manage your account preferences"
  />
  <Group.Content>
    <Flex direction="column" gap="3">
      <Input placeholder="Full name" />
      <Input type="email" placeholder="Email address" />
      <Button>Save Changes</Button>
    </Flex>
  </Group.Content>
</Group.Wrapper>`}
        />
      </Section>

      <Section title="With Header Actions" description="Add actions to the header for quick access to common operations.">
        <LiveExample
          code={`<Group.Wrapper>
  <Group.Header
    title="Team Members"
    description="Manage your team members and permissions"
    actions={
      <Button size="2" iconLeft={<RiAddLine />}>
        Add Member
      </Button>
    }
  />
  <Group.Content>
    <Flex direction="column" gap="2">
      <Text>john@example.com - Admin</Text>
      <Text>jane@example.com - Editor</Text>
      <Text>bob@example.com - Viewer</Text>
    </Flex>
  </Group.Content>
</Group.Wrapper>`}
        />
      </Section>

      <Section title="Multiple Sections" description="Use multiple rows to create distinct sections within a group.">
        <LiveExample
          code={`<Group.Wrapper>
  <Group.Header title="Project Settings" />

  <Group.Row>
    <Group.Content>
      <Flex direction="column" gap="3">
        <Text weight="strong">General</Text>
        <Input placeholder="Project name" />
        <Input placeholder="Description" />
      </Flex>
    </Group.Content>
  </Group.Row>

  <Group.Row>
    <Group.Content>
      <Flex direction="column" gap="3">
        <Text weight="strong">Visibility</Text>
        <Checkbox label="Public project" />
        <Checkbox label="Allow comments" />
      </Flex>
    </Group.Content>
  </Group.Row>

  <Group.Footer>
    <Flex gap="2">
      <Button variant="outline">Cancel</Button>
      <Button>Save Changes</Button>
    </Flex>
  </Group.Footer>
</Group.Wrapper>`}
        />
      </Section>

      <Section title="With Footer" description="Add a footer for actions or additional information.">
        <LiveExample
          code={`<Group.Wrapper>
  <Group.Header
    title="Notification Preferences"
    description="Choose how you want to be notified"
  />
  <Group.Content>
    <Flex direction="column" gap="3">
      <Checkbox label="Email notifications" defaultChecked />
      <Checkbox label="Push notifications" />
      <Checkbox label="SMS notifications" />
    </Flex>
  </Group.Content>
  <Group.Footer>
    <Flex justify="between" style={{ width: '100%' }}>
      <Text size="2" color="gray600">
        Last updated: 2 hours ago
      </Text>
      <Button size="2">Update Preferences</Button>
    </Flex>
  </Group.Footer>
</Group.Wrapper>`}
        />
      </Section>

      <Section title="Stacked Groups" description="Stack multiple groups vertically for organized content sections.">
        <LiveExample
          code={`<Flex direction="column" gap="4">
  <Group.Wrapper>
    <Group.Header
      title="Personal Information"
      description="Your personal details"
    />
    <Group.Content>
      <Flex direction="column" gap="3">
        <Input placeholder="First name" />
        <Input placeholder="Last name" />
      </Flex>
    </Group.Content>
  </Group.Wrapper>

  <Group.Wrapper>
    <Group.Header
      title="Security"
      description="Manage your security settings"
    />
    <Group.Content>
      <Flex direction="column" gap="3">
        <Button variant="soft" fullWidth>Change Password</Button>
        <Button variant="soft" fullWidth>Enable 2FA</Button>
      </Flex>
    </Group.Content>
  </Group.Wrapper>

  <Group.Wrapper>
    <Group.Header
      title="Danger Zone"
      description="Irreversible actions"
    />
    <Group.Content>
      <Button variant="soft" color="red" fullWidth>
        Delete Account
      </Button>
    </Group.Content>
  </Group.Wrapper>
</Flex>`}
        />
      </Section>

      <Section title="Custom Header Row" description="Use HeaderRow for custom header layouts when you need more control.">
        <LiveExample
          code={`<Group.Wrapper>
  <Group.HeaderRow>
    <Flex justify="between" align="center" style={{ width: '100%' }}>
      <Flex align="center" gap="3">
        <div style={{
          width: 40,
          height: 40,
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
        }} />
        <Flex direction="column">
          <Text weight="strong">Premium Plan</Text>
          <Text size="2" color="gray600">$29/month</Text>
        </Flex>
      </Flex>
      <Button size="2" variant="outline">Upgrade</Button>
    </Flex>
  </Group.HeaderRow>

  <Group.Content>
    <Flex direction="column" gap="2">
      <Text size="2">Unlimited projects</Text>
      <Text size="2">Priority support</Text>
      <Text size="2">Advanced analytics</Text>
    </Flex>
  </Group.Content>
</Group.Wrapper>`}
        />
      </Section>

      <Section title="Usage Guidelines">
        <Text size="3" style={{ color: '#666', marginBottom: 16 }}>
          Best practices for using groups:
        </Text>
        <ul style={{ color: '#666', fontSize: '14px', lineHeight: 1.8 }}>
          <li><strong>Logical sections:</strong> Use groups to organize related content into clear sections</li>
          <li><strong>Clear headers:</strong> Always include descriptive titles and optional descriptions</li>
          <li><strong>Consistent spacing:</strong> Use Group.Content for consistent padding across sections</li>
          <li><strong>Action placement:</strong> Put primary actions in the footer, quick actions in the header</li>
          <li><strong>Stack vertically:</strong> Use Flex with gap to stack multiple groups</li>
          <li><strong>Settings pages:</strong> Perfect for settings and configuration pages</li>
        </ul>
      </Section>

      <Section title="Components">
        <PropTable props={groupProps} />
      </Section>
    </ComponentDoc>
  );
};
