import { ComponentDoc, PropTable, LiveExample, Section } from '../../components';
import type { PropDefinition } from '../../components';
import { Text } from '@metorial-io/ui';

const attributesProps: PropDefinition[] = [
  {
    name: 'attributes',
    type: 'AttributeItem[]',
    description: 'Array of attribute objects with label and content',
  },
  {
    name: 'itemWidth',
    type: 'string',
    default: "'300px'",
    description: 'Minimum width for each attribute item (used in CSS grid)',
  },
];

export const AttributesDoc = () => {
  return (
    <ComponentDoc
      title="Attributes"
      description="A grid-based component for displaying key-value pairs or attributes. Perfect for showing metadata, properties, or specifications in a structured layout."
      importStatement="import { Attributes } from '@metorial-io/ui';"
      package="ui"
    >
      <Section title="Basic Usage" description="Display a list of attributes in a responsive grid.">
        <LiveExample
          code={`<Attributes
  attributes={[
    { label: 'Name', content: 'John Doe' },
    { label: 'Email', content: 'john@example.com' },
    { label: 'Role', content: 'Administrator' },
    { label: 'Department', content: 'Engineering' }
  ]}
/>`}
        />
      </Section>

      <Section title="With Rich Content" description="Attribute content can include any React components.">
        <LiveExample
          code={`<Attributes
  attributes={[
    {
      label: 'Status',
      content: <Badge color="green">Active</Badge>
    },
    {
      label: 'Created',
      content: <Text size="2">January 15, 2024</Text>
    },
    {
      label: 'Tags',
      content: (
        <Flex gap="2">
          <Badge size="1">React</Badge>
          <Badge size="1">TypeScript</Badge>
        </Flex>
      )
    },
    {
      label: 'Actions',
      content: (
        <Button size="1" variant="soft">
          Edit
        </Button>
      )
    }
  ]}
/>`}
        />
      </Section>

      <Section title="Custom Item Width" description="Control the minimum width of each attribute item.">
        <LiveExample
          code={`<Flex direction="column" gap="4">
  <div>
    <Text size="2" weight="strong" style={{ marginBottom: 10 }}>
      Narrow items (200px)
    </Text>
    <Attributes
      itemWidth="200px"
      attributes={[
        { label: 'ID', content: '12345' },
        { label: 'Type', content: 'Project' },
        { label: 'Status', content: 'Active' },
        { label: 'Priority', content: 'High' }
      ]}
    />
  </div>

  <div>
    <Text size="2" weight="strong" style={{ marginBottom: 10 }}>
      Wide items (400px)
    </Text>
    <Attributes
      itemWidth="400px"
      attributes={[
        { label: 'Title', content: 'Website Redesign Project' },
        { label: 'Description', content: 'Complete redesign of company website' }
      ]}
    />
  </div>
</Flex>`}
        />
      </Section>

      <Section title="User Profile" description="Display user information in an organized grid.">
        <LiveExample
          code={`<Attributes
  attributes={[
    {
      label: 'Full Name',
      content: 'Sarah Johnson'
    },
    {
      label: 'Email Address',
      content: 'sarah.johnson@example.com'
    },
    {
      label: 'Phone Number',
      content: '+1 (555) 123-4567'
    },
    {
      label: 'Location',
      content: 'San Francisco, CA'
    },
    {
      label: 'Job Title',
      content: 'Senior Product Designer'
    },
    {
      label: 'Department',
      content: 'Design & UX'
    },
    {
      label: 'Start Date',
      content: 'March 1, 2022'
    },
    {
      label: 'Employee ID',
      content: 'EMP-2847'
    }
  ]}
/>`}
        />
      </Section>

      <Section title="Product Specifications" description="Show product details and specifications.">
        <LiveExample
          code={`<Attributes
  attributes={[
    {
      label: 'Product Name',
      content: <Text weight="strong">MacBook Pro 16"</Text>
    },
    {
      label: 'SKU',
      content: 'MBP16-2024-512'
    },
    {
      label: 'Price',
      content: <Text weight="strong" color="blue">$2,499.00</Text>
    },
    {
      label: 'Availability',
      content: <Badge color="green">In Stock</Badge>
    },
    {
      label: 'Processor',
      content: 'Apple M3 Pro'
    },
    {
      label: 'Memory',
      content: '32GB Unified Memory'
    },
    {
      label: 'Storage',
      content: '512GB SSD'
    },
    {
      label: 'Display',
      content: '16.2" Liquid Retina XDR'
    }
  ]}
  itemWidth="250px"
/>`}
        />
      </Section>

      <Section title="With Copy Values" description="Combine with InlineCopy for copyable attribute values.">
        <LiveExample
          code={`<Attributes
  attributes={[
    {
      label: 'API Key',
      content: (
        <Flex align="center" gap="2">
          <Text size="2" style={{ fontFamily: 'monospace' }}>
            sk_live_51Abc...xyz789
          </Text>
          <InlineCopy value="sk_live_51Abc...xyz789" />
        </Flex>
      )
    },
    {
      label: 'Webhook URL',
      content: (
        <Flex align="center" gap="2">
          <Text size="2" style={{ fontFamily: 'monospace' }}>
            https://api.example.com/webhook
          </Text>
          <InlineCopy value="https://api.example.com/webhook" />
        </Flex>
      )
    },
    {
      label: 'Client ID',
      content: (
        <Flex align="center" gap="2">
          <Text size="2" style={{ fontFamily: 'monospace' }}>
            client_abc123xyz789
          </Text>
          <InlineCopy value="client_abc123xyz789" />
        </Flex>
      )
    }
  ]}
/>`}
        />
      </Section>

      <Section title="Usage Guidelines">
        <Text size="3" style={{ color: '#666', marginBottom: 16 }}>
          Best practices for using Attributes:
        </Text>
        <ul style={{ color: '#666', fontSize: '14px', lineHeight: 1.8 }}>
          <li><strong>Consistent labels:</strong> Use clear, concise labels that describe the content</li>
          <li><strong>Logical grouping:</strong> Group related attributes together</li>
          <li><strong>Responsive design:</strong> The grid automatically adjusts to container width</li>
          <li><strong>Rich content:</strong> Use badges, buttons, or other components for better UX</li>
          <li><strong>Item width:</strong> Adjust itemWidth based on typical content length</li>
          <li><strong>Visual consistency:</strong> Maintain consistent styling across all attributes</li>
        </ul>
      </Section>

      <Section title="Props">
        <PropTable props={attributesProps} />
      </Section>
    </ComponentDoc>
  );
};
