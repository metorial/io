import { Text } from '@metorial-io/ui';
import type { PropDefinition } from '../../components';
import { ComponentDoc, LiveExample, PropTable, Section } from '../../components';

const tableProps: PropDefinition[] = [
  {
    name: 'headers',
    type: 'string[]',
    required: true,
    description: 'Array of column headers'
  },
  {
    name: 'data',
    type: 'Array<string[] | RowObject>',
    required: true,
    description: 'Array of rows (string arrays) or row objects with href/onClick'
  },
  {
    name: 'padding',
    type: 'string',
    description: 'Custom padding for data'
  }
];

export const TableDoc = () => {
  return (
    <ComponentDoc
      title="Table"
      description="A clean and functional table component for displaying tabular data with support for clickable rows and links."
      importStatement="import { Table } from '@metorial-io/ui-product';"
      package="ui-product"
    >
      <Section
        title="Basic Usage"
        description="Create a simple table with headers and data rows."
      >
        <LiveExample
          code={`<Table
  headers={['Name', 'Email', 'Role']}
  data={[
    ['John Doe', 'john@example.com', 'Admin'],
    ['Jane Smith', 'jane@example.com', 'Editor'],
    ['Bob Johnson', 'bob@example.com', 'Viewer'],
  ]}
/>`}
        />
      </Section>

      <Section
        title="Clickable Rows"
        description="Make rows clickable by passing row objects with onClick handlers."
      >
        <LiveExample
          code={`function ClickableTable() {
  const [clicked, setClicked] = useState('');

  const data = [
    {
      data: ['Alice Brown', 'alice@example.com', 'Manager'],
      onClick: () => setClicked('Clicked: Alice Brown')
    },
    {
      data: ['Charlie Davis', 'charlie@example.com', 'Developer'],
      onClick: () => setClicked('Clicked: Charlie Davis')
    },
    {
      data: ['Diana Evans', 'diana@example.com', 'Designer'],
      onClick: () => setClicked('Clicked: Diana Evans')
    },
  ];

  return (
    <div>
      <Table headers={['Name', 'Email', 'Role']} data={data} />
      {clicked && <Text size="2" style={{ marginTop: 16 }}>{clicked}</Text>}
    </div>
  );
}`}
        />
      </Section>

      <Section
        title="Linked Rows"
        description="Create rows that link to other pages using the href property."
      >
        <LiveExample
          code={`<Table
  headers={['Product', 'Price', 'Stock']}
  data={[
    {
      data: ['Product A', '$99', '50'],
      href: '/products/a'
    },
    {
      data: ['Product B', '$149', '23'],
      href: '/products/b'
    },
    {
      data: ['Product C', '$79', '100'],
      href: '/products/c'
    },
  ]}
/>`}
        />
      </Section>

      <Section title="Usage Guidelines">
        <Text size="3" style={{ color: '#666', marginBottom: 16 }}>
          Best practices for using tables:
        </Text>
        <ul style={{ color: '#666', fontSize: '14px', lineHeight: 1.8 }}>
          <li>
            <strong>Clear headers:</strong> Use descriptive column headers that clearly
            identify the data
          </li>
          <li>
            <strong>Consistent data:</strong> Ensure all rows have the same number of data as
            headers
          </li>
          <li>
            <strong>Appropriate use:</strong> Use tables for tabular data, not for layout
            purposes
          </li>
          <li>
            <strong>Interactive feedback:</strong> Make it clear when rows are clickable (hover
            states)
          </li>
          <li>
            <strong>Mobile considerations:</strong> Consider how your table will display on
            smaller screens
          </li>
        </ul>
      </Section>

      <Section title="Props">
        <PropTable props={tableProps} />
      </Section>
    </ComponentDoc>
  );
};
