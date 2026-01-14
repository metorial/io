import { ComponentDoc, PropTable, LiveExample, Section } from '../../components';
import type { PropDefinition } from '../../components';
import { Text } from '@metorial-io/ui';

const useDialogParams: PropDefinition[] = [
  {
    name: 'initialState',
    type: 'boolean',
    default: 'false',
    description: 'Initial open/closed state of the dialog',
  },
];

const useDialogReturn: PropDefinition[] = [
  {
    name: 'isOpen',
    type: 'boolean',
    description: 'Current open state of the dialog',
  },
  {
    name: 'open',
    type: '() => void',
    description: 'Function to open the dialog',
  },
  {
    name: 'close',
    type: '() => void',
    description: 'Function to close the dialog',
  },
  {
    name: 'toggle',
    type: '() => void',
    description: 'Function to toggle the dialog state',
  },
];

export const UseDialogDoc = () => {
  return (
    <ComponentDoc
      title="useDialog"
      description="A React hook for managing dialog/modal state. Provides simple open/close/toggle functions for controlling dialog visibility."
      importStatement="import { useDialog } from '@metorial-io/ui';"
      package="ui"
    >
      <Section title="Basic Usage" description="Control a dialog with open/close functions.">
        <LiveExample
          code={`function DialogExample() {
  const dialog = useDialog();

  return (
    <>
      <Button onClick={dialog.open}>
        Open Dialog
      </Button>
      <Dialog
        isOpen={dialog.isOpen}
        onClose={dialog.close}
        title="Example Dialog"
      >
        <Text size="3">This is a dialog controlled by useDialog hook.</Text>
        <Flex gap="2" style={{ marginTop: 24 }}>
          <Button onClick={dialog.close}>Close</Button>
        </Flex>
      </Dialog>
    </>
  );
}`}
        />
      </Section>

      <Section title="With Toggle" description="Use toggle function to switch state.">
        <LiveExample
          code={`function ToggleDialog() {
  const dialog = useDialog();

  return (
    <>
      <Button onClick={dialog.toggle}>
        {dialog.isOpen ? 'Close' : 'Open'} Dialog
      </Button>
      <Dialog
        isOpen={dialog.isOpen}
        onClose={dialog.close}
        title="Toggle Dialog"
      >
        <Text size="3">Click the button to toggle this dialog.</Text>
      </Dialog>
    </>
  );
}`}
        />
      </Section>

      <Section title="Initial Open State" description="Start with the dialog open.">
        <LiveExample
          code={`function InitiallyOpen() {
  const dialog = useDialog(true);

  return (
    <>
      <Text size="2" style={{ color: '#666', marginBottom: 16 }}>
        Dialog is {dialog.isOpen ? 'open' : 'closed'}
      </Text>
      <Button onClick={dialog.toggle}>
        Toggle Dialog
      </Button>
      <Dialog
        isOpen={dialog.isOpen}
        onClose={dialog.close}
        title="Initially Open"
      >
        <Text size="3">This dialog starts in an open state.</Text>
        <Button onClick={dialog.close} style={{ marginTop: 16 }}>
          Close
        </Button>
      </Dialog>
    </>
  );
}`}
        />
      </Section>

      <Section title="Multiple Dialogs" description="Manage multiple independent dialogs.">
        <LiveExample
          code={`function MultipleDialogs() {
  const settings = useDialog();
  const confirm = useDialog();
  const help = useDialog();

  return (
    <>
      <Flex gap="2">
        <Button onClick={settings.open}>Settings</Button>
        <Button onClick={confirm.open} color="red">Delete</Button>
        <Button onClick={help.open} variant="outline">Help</Button>
      </Flex>

      <Dialog isOpen={settings.isOpen} onClose={settings.close} title="Settings">
        <Text size="3">Settings dialog content</Text>
        <Button onClick={settings.close} style={{ marginTop: 16 }}>Close</Button>
      </Dialog>

      <Dialog isOpen={confirm.isOpen} onClose={confirm.close} title="Confirm Delete">
        <Text size="3">Are you sure you want to delete this item?</Text>
        <Flex gap="2" style={{ marginTop: 16 }}>
          <Button color="red" onClick={confirm.close}>Delete</Button>
          <Button variant="outline" onClick={confirm.close}>Cancel</Button>
        </Flex>
      </Dialog>

      <Dialog isOpen={help.isOpen} onClose={help.close} title="Help">
        <Text size="3">Help information goes here.</Text>
        <Button onClick={help.close} style={{ marginTop: 16 }}>Got it</Button>
      </Dialog>
    </>
  );
}`}
        />
      </Section>

      <Section title="Confirmation Dialog" description="Common pattern for confirmation dialogs.">
        <LiveExample
          code={`function ConfirmDialog() {
  const dialog = useDialog();
  const [confirmed, setConfirmed] = useState(false);

  const handleConfirm = () => {
    setConfirmed(true);
    dialog.close();
    setTimeout(() => setConfirmed(false), 3000);
  };

  return (
    <>
      <Flex direction="column" gap="3">
        <Button onClick={dialog.open} color="red">
          Delete Account
        </Button>
        {confirmed && (
          <Alert variant="success" onClose={() => setConfirmed(false)}>
            Action confirmed successfully!
          </Alert>
        )}
      </Flex>

      <Dialog
        isOpen={dialog.isOpen}
        onClose={dialog.close}
        title="Confirm Action"
      >
        <Text size="3" style={{ marginBottom: 16 }}>
          This action cannot be undone. Are you sure you want to continue?
        </Text>
        <Flex gap="2">
          <Button color="red" onClick={handleConfirm}>
            Confirm
          </Button>
          <Button variant="outline" onClick={dialog.close}>
            Cancel
          </Button>
        </Flex>
      </Dialog>
    </>
  );
}`}
        />
      </Section>

      <Section title="Usage Guidelines">
        <Text size="3" style={{ color: '#666', marginBottom: 16 }}>
          Best practices for using the useDialog hook:
        </Text>
        <ul style={{ color: '#666', fontSize: '14px', lineHeight: 1.8 }}>
          <li><strong>One hook per dialog:</strong> Create a separate useDialog instance for each dialog</li>
          <li><strong>Close on action:</strong> Remember to close the dialog after completing an action</li>
          <li><strong>Escape key:</strong> The Dialog component automatically closes on Escape key</li>
          <li><strong>Backdrop click:</strong> Dialog closes when clicking outside by default</li>
          <li><strong>State management:</strong> The hook manages only open/closed state, not dialog content</li>
        </ul>
      </Section>

      <Section title="Parameters">
        <PropTable props={useDialogParams} />
      </Section>

      <Section title="Returns">
        <PropTable props={useDialogReturn} />
      </Section>
    </ComponentDoc>
  );
};
