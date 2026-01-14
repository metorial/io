import { ComponentDoc, PropTable, LiveExample, Section } from '../../components';
import type { PropDefinition } from '../../components';
import { Text } from '@metorial-io/ui';

const controlProps: PropDefinition[] = [
  {
    name: 'items',
    type: 'ControlItem[]',
    description: 'Array of items with id and label',
  },
  {
    name: 'value',
    type: 'string',
    description: 'The currently selected item ID',
  },
  {
    name: 'onChange',
    type: '(value: string) => void',
    description: 'Callback when selection changes',
  },
];

export const ControlDoc = () => {
  return (
    <ComponentDoc
      title="Control"
      description="A segmented control component for switching between related options. Features a smooth animated indicator and compact design, perfect for view switching and filtering."
      importStatement="import { Control } from '@metorial-io/ui';"
      package="ui"
    >
      <Section title="Basic Usage" description="A simple segmented control with two options.">
        <LiveExample
          code={`function BasicControl() {
  const [view, setView] = useState('grid');

  return (
    <Control
      value={view}
      onChange={setView}
      items={[
        { id: 'grid', label: 'Grid' },
        { id: 'list', label: 'List' }
      ]}
    />
  );
}`}
        />
      </Section>

      <Section title="Multiple Options" description="Control supports multiple options with smooth transitions.">
        <LiveExample
          code={`function MultiOptionControl() {
  const [view, setView] = useState('day');

  return (
    <Flex direction="column" gap="3">
      <Control
        value={view}
        onChange={setView}
        items={[
          { id: 'day', label: 'Day' },
          { id: 'week', label: 'Week' },
          { id: 'month', label: 'Month' },
          { id: 'year', label: 'Year' }
        ]}
      />

      <Text size="2" color="gray600">
        Selected view: {view}
      </Text>
    </Flex>
  );
}`}
        />
      </Section>

      <Section title="View Switcher" description="Use Control as a view switcher with content that changes based on selection.">
        <LiveExample
          code={`function ViewSwitcher() {
  const [view, setView] = useState('preview');

  return (
    <Flex direction="column" gap="4">
      <Control
        value={view}
        onChange={setView}
        items={[
          { id: 'preview', label: 'Preview' },
          { id: 'code', label: 'Code' }
        ]}
      />

      {view === 'preview' && (
        <div style={{ padding: 20, border: '1px solid #e5e5e5', borderRadius: 8 }}>
          <Text>This is the preview view</Text>
        </div>
      )}

      {view === 'code' && (
        <div style={{ padding: 20, border: '1px solid #e5e5e5', borderRadius: 8 }}>
          <Text style={{ fontFamily: 'monospace' }}>const code = "example";</Text>
        </div>
      )}
    </Flex>
  );
}`}
        />
      </Section>

      <Section title="Filter Control" description="Use Control for filtering content or data.">
        <LiveExample
          code={`function FilterControl() {
  const [filter, setFilter] = useState('all');

  const items = [
    { id: 1, name: 'Task 1', status: 'active' },
    { id: 2, name: 'Task 2', status: 'completed' },
    { id: 3, name: 'Task 3', status: 'active' },
    { id: 4, name: 'Task 4', status: 'archived' }
  ];

  const filteredItems = filter === 'all'
    ? items
    : items.filter(item => item.status === filter);

  return (
    <Flex direction="column" gap="4">
      <Control
        value={filter}
        onChange={setFilter}
        items={[
          { id: 'all', label: 'All' },
          { id: 'active', label: 'Active' },
          { id: 'completed', label: 'Completed' },
          { id: 'archived', label: 'Archived' }
        ]}
      />

      <Flex direction="column" gap="2">
        {filteredItems.map(item => (
          <div
            key={item.id}
            style={{
              padding: 12,
              border: '1px solid #e5e5e5',
              borderRadius: 6
            }}
          >
            <Text>{item.name}</Text>
          </div>
        ))}
      </Flex>
    </Flex>
  );
}`}
        />
      </Section>

      <Section title="Time Range Selector" description="Control works great for selecting time ranges or periods.">
        <LiveExample
          code={`function TimeRangeControl() {
  const [range, setRange] = useState('7d');

  return (
    <Flex direction="column" gap="3">
      <Flex justify="between" align="center">
        <Text weight="strong">Analytics</Text>
        <Control
          value={range}
          onChange={setRange}
          items={[
            { id: '24h', label: '24h' },
            { id: '7d', label: '7d' },
            { id: '30d', label: '30d' },
            { id: '90d', label: '90d' }
          ]}
        />
      </Flex>

      <div style={{ padding: 20, border: '1px solid #e5e5e5', borderRadius: 8 }}>
        <Text size="2" color="gray600">
          Showing data for the last {range}
        </Text>
      </div>
    </Flex>
  );
}`}
        />
      </Section>

      <Section title="Display Mode Toggle" description="Toggle between different display modes or formats.">
        <LiveExample
          code={`function DisplayModeControl() {
  const [mode, setMode] = useState('card');

  const projects = [
    { name: 'Project Alpha', status: 'Active' },
    { name: 'Project Beta', status: 'In Progress' },
    { name: 'Project Gamma', status: 'Completed' }
  ];

  return (
    <Flex direction="column" gap="4">
      <Flex justify="between" align="center">
        <Text weight="strong">Projects</Text>
        <Control
          value={mode}
          onChange={setMode}
          items={[
            { id: 'card', label: 'Card' },
            { id: 'table', label: 'Table' },
            { id: 'compact', label: 'Compact' }
          ]}
        />
      </Flex>

      {mode === 'card' && (
        <Flex direction="column" gap="2">
          {projects.map((project, i) => (
            <div
              key={i}
              style={{
                padding: 16,
                border: '1px solid #e5e5e5',
                borderRadius: 8
              }}
            >
              <Text weight="strong">{project.name}</Text>
              <Text size="2" color="gray600">{project.status}</Text>
            </div>
          ))}
        </Flex>
      )}

      {mode === 'table' && (
        <div style={{ border: '1px solid #e5e5e5', borderRadius: 8 }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ background: '#f5f5f5' }}>
                <th style={{ padding: 12, textAlign: 'left' }}>Name</th>
                <th style={{ padding: 12, textAlign: 'left' }}>Status</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((project, i) => (
                <tr key={i} style={{ borderTop: '1px solid #e5e5e5' }}>
                  <td style={{ padding: 12 }}>{project.name}</td>
                  <td style={{ padding: 12 }}>{project.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {mode === 'compact' && (
        <Flex direction="column" gap="1">
          {projects.map((project, i) => (
            <Text key={i} size="2">
              {project.name} - {project.status}
            </Text>
          ))}
        </Flex>
      )}
    </Flex>
  );
}`}
        />
      </Section>

      <Section title="Usage Guidelines">
        <Text size="3" style={{ color: '#666', marginBottom: 16 }}>
          Best practices for using Control:
        </Text>
        <ul style={{ color: '#666', fontSize: '14px', lineHeight: 1.8 }}>
          <li><strong>Related options:</strong> Use for switching between closely related views or modes</li>
          <li><strong>Limited choices:</strong> Works best with 2-5 options; use Select for more</li>
          <li><strong>Instant switching:</strong> Changes take effect immediately without confirmation</li>
          <li><strong>Short labels:</strong> Keep labels concise (1-2 words) for clean appearance</li>
          <li><strong>Visual feedback:</strong> Animated indicator clearly shows selected state</li>
          <li><strong>Not for forms:</strong> Use for UI state, not for form data (use Radio instead)</li>
        </ul>
      </Section>

      <Section title="Props">
        <PropTable props={controlProps} />
      </Section>
    </ComponentDoc>
  );
};
