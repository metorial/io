import { ComponentDoc, PropTable, LiveExample, Section } from '../../components';
import type { PropDefinition } from '../../components';
import { Text } from '@metorial-io/ui';

const atomFunction: PropDefinition[] = [
  {
    name: 'initialValue',
    type: 'T',
    required: true,
    description: 'Initial value for the atom',
  },
];

const useAtomParams: PropDefinition[] = [
  {
    name: 'atom',
    type: 'Atom<T>',
    required: true,
    description: 'The atom to subscribe to',
  },
];

const useAtomReturn: PropDefinition[] = [
  {
    name: '[value, setValue]',
    type: '[T, (value: T) => void]',
    description: 'Tuple of current value and setter function (like useState)',
  },
];

export const UseAtomDoc = () => {
  return (
    <ComponentDoc
      title="atom & useAtom"
      description="A lightweight state management solution using atoms. Create global state atoms that can be shared across components without prop drilling. Similar to Jotai or Recoil but simplified."
      importStatement="import { atom, useAtom } from '@metorial-io/ui';"
      package="ui"
    >
      <Section title="Basic Usage" description="Create and use a simple atom.">
        <LiveExample
          code={`// Outside component - create atoms at module level
const countAtom = atom(0);
const nameAtom = atom('');

function AtomExample() {
  const [count, setCount] = useAtom(countAtom);
  const [name, setName] = useAtom(nameAtom);

  return (
    <Flex direction="column" gap="3">
      <Flex gap="2" align="center">
        <Text size="3">Count: {count}</Text>
        <Button size="2" onClick={() => setCount(count + 1)}>
          Increment
        </Button>
      </Flex>
      <Input
        label="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </Flex>
  );
}`}
        />
      </Section>

      <Section title="Shared State" description="Share state between multiple components.">
        <LiveExample
          code={`const themeAtom = atom('light');

function ThemeSwitcher() {
  const [theme, setTheme] = useAtom(themeAtom);

  return (
    <Flex gap="2">
      <Button
        variant={theme === 'light' ? 'solid' : 'outline'}
        onClick={() => setTheme('light')}
      >
        Light
      </Button>
      <Button
        variant={theme === 'dark' ? 'solid' : 'outline'}
        onClick={() => setTheme('dark')}
      >
        Dark
      </Button>
    </Flex>
  );
}

function ThemeDisplay() {
  const [theme] = useAtom(themeAtom);

  return (
    <Text size="2" style={{ color: '#666' }}>
      Current theme: <strong>{theme}</strong>
    </Text>
  );
}

function SharedStateExample() {
  return (
    <Flex direction="column" gap="3">
      <ThemeSwitcher />
      <ThemeDisplay />
    </Flex>
  );
}`}
        />
      </Section>

      <Section title="Complex State" description="Use atoms with objects and arrays.">
        <LiveExample
          code={`const userAtom = atom({
  name: 'John Doe',
  email: 'john@example.com',
  role: 'admin'
});

function ComplexAtomExample() {
  const [user, setUser] = useAtom(userAtom);

  const updateName = (name) => {
    setUser({ ...user, name });
  };

  const updateRole = (role) => {
    setUser({ ...user, role });
  };

  return (
    <Flex direction="column" gap="3">
      <Input
        label="Name"
        value={user.name}
        onChange={(e) => updateName(e.target.value)}
      />
      <Select
        label="Role"
        value={user.role}
        onChange={updateRole}
        options={[
          { value: 'admin', label: 'Admin' },
          { value: 'editor', label: 'Editor' },
          { value: 'viewer', label: 'Viewer' },
        ]}
      />
      <Text size="2" style={{ color: '#666' }}>
        User: {user.name} ({user.role})
      </Text>
    </Flex>
  );
}`}
        />
      </Section>

      <Section title="List Management" description="Manage lists with atom state.">
        <LiveExample
          code={`const todosAtom = atom([]);

function TodoList() {
  const [todos, setTodos] = useAtom(todosAtom);
  const [newTodo, setNewTodo] = useState('');

  const addTodo = () => {
    if (newTodo.trim()) {
      setTodos([...todos, { id: Date.now(), text: newTodo, done: false }]);
      setNewTodo('');
    }
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, done: !todo.done } : todo
    ));
  };

  return (
    <Flex direction="column" gap="3">
      <Flex gap="2">
        <Input
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add a todo..."
        />
        <Button onClick={addTodo}>Add</Button>
      </Flex>
      <Flex direction="column" gap="2">
        {todos.map(todo => (
          <Flex key={todo.id} gap="2" align="center">
            <Checkbox
              checked={todo.done}
              onCheckedChange={() => toggleTodo(todo.id)}
            />
            <Text
              size="2"
              style={{
                textDecoration: todo.done ? 'line-through' : 'none',
                color: todo.done ? '#999' : 'inherit'
              }}
            >
              {todo.text}
            </Text>
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
}`}
        />
      </Section>

      <Section title="Usage Guidelines">
        <Text size="3" style={{ color: '#666', marginBottom: 16 }}>
          Best practices for using atoms:
        </Text>
        <ul style={{ color: '#666', fontSize: '14px', lineHeight: 1.8 }}>
          <li><strong>Module-level creation:</strong> Create atoms outside components, at the module level</li>
          <li><strong>Global state only:</strong> Use atoms for truly global state, not local component state</li>
          <li><strong>Immutable updates:</strong> Always create new objects/arrays when updating, don't mutate</li>
          <li><strong>Type safety:</strong> Atoms are fully typed in TypeScript</li>
          <li><strong>Performance:</strong> Components only re-render when their specific atom changes</li>
          <li><strong>Simple API:</strong> Works just like useState but shared across components</li>
        </ul>
      </Section>

      <Section title="atom() Function">
        <PropTable props={atomFunction} />
      </Section>

      <Section title="useAtom() Parameters">
        <PropTable props={useAtomParams} />
      </Section>

      <Section title="useAtom() Returns">
        <PropTable props={useAtomReturn} />
      </Section>
    </ComponentDoc>
  );
};
