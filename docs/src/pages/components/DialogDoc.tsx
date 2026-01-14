import { ComponentDoc, PropTable, LiveExample, Section } from '../../components';
import type { PropDefinition } from '../../components';
import { Text } from '@metorial-io/ui';

const dialogProps: PropDefinition[] = [
  {
    name: 'isOpen',
    type: 'boolean',
    description: 'Controls whether the dialog is open',
  },
  {
    name: 'onOpenChange',
    type: '(isOpen: boolean) => void',
    description: 'Callback when the open state changes',
  },
  {
    name: 'variant',
    type: "'slim' | 'padded'",
    default: "'slim'",
    description: 'Visual variant of the dialog (slim for compact, padded for more spacing)',
  },
  {
    name: 'width',
    type: 'number',
    description: 'Custom width for the dialog in pixels',
  },
  {
    name: 'autoCloseOnSubmit',
    type: 'boolean',
    description: 'Whether to automatically close the dialog on form submission',
  },
  {
    name: 'style',
    type: 'React.CSSProperties',
    description: 'Additional inline styles for the dialog wrapper',
  },
];

export const DialogDoc = () => {
  return (
    <ComponentDoc
      title="Dialog"
      description="A modal dialog component for displaying content in an overlay. Built on Radix UI Dialog with full keyboard support and accessibility features."
      importStatement="import { Dialog } from '@metorial-io/ui';"
      package="ui"
    >
      <Section title="Basic Usage" description="A simple dialog with title, description, and actions.">
        <LiveExample
          code={`function BasicDialog() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open Dialog</Button>

      <Dialog.Wrapper isOpen={isOpen} onOpenChange={setIsOpen}>
        <Dialog.Title>Confirm Action</Dialog.Title>
        <Dialog.Description>
          Are you sure you want to perform this action? This cannot be undone.
        </Dialog.Description>
        <Dialog.Actions>
          <Button variant="ghost" onClick={() => setIsOpen(false)}>
            Cancel
          </Button>
          <Button onClick={() => setIsOpen(false)}>
            Confirm
          </Button>
        </Dialog.Actions>
      </Dialog.Wrapper>
    </>
  );
}`}
        />
      </Section>

      <Section title="Padded Variant" description="Use the padded variant for forms or content that needs more breathing room.">
        <LiveExample
          code={`function PaddedDialog() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open Padded Dialog</Button>

      <Dialog.Wrapper isOpen={isOpen} onOpenChange={setIsOpen} variant="padded">
        <Dialog.Title>Create New Project</Dialog.Title>
        <Dialog.Description>
          Fill out the form below to create a new project.
        </Dialog.Description>

        <Flex direction="column" gap="4" style={{ marginTop: 20 }}>
          <Input placeholder="Project name" />
          <Input placeholder="Description" />
        </Flex>

        <Dialog.Actions>
          <Button variant="outline" onClick={() => setIsOpen(false)}>
            Cancel
          </Button>
          <Button onClick={() => setIsOpen(false)}>
            Create Project
          </Button>
        </Dialog.Actions>
      </Dialog.Wrapper>
    </>
  );
}`}
        />
      </Section>

      <Section title="Custom Width" description="Control the width of the dialog for different content types.">
        <LiveExample
          code={`function CustomWidthDialog() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open Wide Dialog</Button>

      <Dialog.Wrapper isOpen={isOpen} onOpenChange={setIsOpen} width={600}>
        <Dialog.Title>Wide Dialog</Dialog.Title>
        <Dialog.Description>
          This dialog has a custom width of 600px, useful for larger forms or content.
        </Dialog.Description>
        <Dialog.Actions>
          <Button onClick={() => setIsOpen(false)}>Close</Button>
        </Dialog.Actions>
      </Dialog.Wrapper>
    </>
  );
}`}
        />
      </Section>

      <Section title="With Form" description="Use autoCloseOnSubmit to close the dialog when a form is submitted.">
        <LiveExample
          code={`function FormDialog() {
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic here
    setIsOpen(false);
  };

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open Form Dialog</Button>

      <Dialog.Wrapper
        isOpen={isOpen}
        onOpenChange={setIsOpen}
        autoCloseOnSubmit
      >
        <form onSubmit={handleSubmit}>
          <Dialog.Title>Sign In</Dialog.Title>
          <Dialog.Description>
            Enter your credentials to continue.
          </Dialog.Description>

          <Flex direction="column" gap="3" style={{ margin: '20px 0' }}>
            <Input type="email" placeholder="Email" required />
            <Input type="password" placeholder="Password" required />
          </Flex>

          <Dialog.Actions>
            <Button variant="outline" type="button" onClick={() => setIsOpen(false)}>
              Cancel
            </Button>
            <Button type="submit">Sign In</Button>
          </Dialog.Actions>
        </form>
      </Dialog.Wrapper>
    </>
  );
}`}
        />
      </Section>

      <Section title="Complex Content" description="Dialogs can contain any content including lists, cards, and complex layouts.">
        <LiveExample
          code={`function ComplexDialog() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open Complex Dialog</Button>

      <Dialog.Wrapper isOpen={isOpen} onOpenChange={setIsOpen} width={500}>
        <Dialog.Title>Select a Template</Dialog.Title>
        <Dialog.Description>
          Choose from one of our pre-built templates to get started.
        </Dialog.Description>

        <Flex direction="column" gap="3" style={{ marginTop: 20 }}>
          <Button variant="outline" fullWidth style={{ textAlign: 'left' }}>
            <Flex direction="column" gap="1">
              <Text weight="strong">Blank Template</Text>
              <Text size="2" color="gray600">Start from scratch</Text>
            </Flex>
          </Button>
          <Button variant="outline" fullWidth style={{ textAlign: 'left' }}>
            <Flex direction="column" gap="1">
              <Text weight="strong">Dashboard Template</Text>
              <Text size="2" color="gray600">Pre-configured dashboard</Text>
            </Flex>
          </Button>
          <Button variant="outline" fullWidth style={{ textAlign: 'left' }}>
            <Flex direction="column" gap="1">
              <Text weight="strong">Report Template</Text>
              <Text size="2" color="gray600">Analytics and reporting</Text>
            </Flex>
          </Button>
        </Flex>

        <Dialog.Actions>
          <Button variant="ghost" onClick={() => setIsOpen(false)}>
            Cancel
          </Button>
        </Dialog.Actions>
      </Dialog.Wrapper>
    </>
  );
}`}
        />
      </Section>

      <Section title="Usage Guidelines">
        <Text size="3" style={{ color: '#666', marginBottom: 16 }}>
          Best practices for using dialogs:
        </Text>
        <ul style={{ color: '#666', fontSize: '14px', lineHeight: 1.8 }}>
          <li><strong>Use sparingly:</strong> Dialogs interrupt user flow, use them only when necessary</li>
          <li><strong>Clear purpose:</strong> Always include a title that clearly states the dialog's purpose</li>
          <li><strong>Escape to close:</strong> Users can press Escape to close dialogs, ensure this is safe</li>
          <li><strong>Focus management:</strong> Dialog automatically traps focus and returns it on close</li>
          <li><strong>Action clarity:</strong> Make primary and secondary actions clear with button variants</li>
          <li><strong>Size appropriately:</strong> Use slim for simple confirmations, padded for forms</li>
        </ul>
      </Section>

      <Section title="Props">
        <PropTable props={dialogProps} />
      </Section>
    </ComponentDoc>
  );
};
