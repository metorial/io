import { ComponentDoc, PropTable, LiveExample, Section } from '../../components';
import type { PropDefinition } from '../../components';
import { Text } from '@metorial-io/ui';

const alertProps: PropDefinition[] = [
  {
    name: 'children',
    type: 'React.ReactNode',
    required: true,
    description: 'Alert content',
  },
  {
    name: 'variant',
    type: "'info' | 'success' | 'warning' | 'error'",
    default: "'info'",
    description: 'Visual variant indicating alert type',
  },
  {
    name: 'onClose',
    type: '() => void',
    description: 'Callback when close button is clicked',
  },
  {
    name: 'title',
    type: 'string',
    description: 'Optional title for the alert',
  },
];

export const AlertDoc = () => {
  return (
    <ComponentDoc
      title="Alert"
      description="A dismissible alert component for temporary notifications and messages. Similar to Callout but with a close button for user dismissal."
      importStatement="import { Alert } from '@metorial-io/ui';"
      package="ui"
    >
      <Section title="Basic Usage" description="Dismissible alerts with close buttons.">
        <LiveExample
          code={`function BasicAlerts() {
  const [showInfo, setShowInfo] = useState(true);
  const [showSuccess, setShowSuccess] = useState(true);

  return (
    <Flex direction="column" gap="3">
      {showInfo && (
        <Alert variant="info" onClose={() => setShowInfo(false)}>
          New features are now available! Check out what's new in the changelog.
        </Alert>
      )}
      {showSuccess && (
        <Alert variant="success" onClose={() => setShowSuccess(false)}>
          Your profile has been updated successfully.
        </Alert>
      )}
    </Flex>
  );
}`}
        />
      </Section>

      <Section title="With Titles" description="Add titles to alerts for better structure.">
        <LiveExample
          code={`function AlertsWithTitles() {
  const [showWarning, setShowWarning] = useState(true);
  const [showError, setShowError] = useState(true);

  return (
    <Flex direction="column" gap="3">
      {showWarning && (
        <Alert
          variant="warning"
          title="Storage almost full"
          onClose={() => setShowWarning(false)}
        >
          You're using 95% of your storage. Consider upgrading your plan or removing old files.
        </Alert>
      )}
      {showError && (
        <Alert
          variant="error"
          title="Connection lost"
          onClose={() => setShowError(false)}
        >
          Unable to reach the server. Please check your internet connection.
        </Alert>
      )}
    </Flex>
  );
}`}
        />
      </Section>

      <Section title="Temporary Alerts" description="Auto-dismiss alerts after a timeout.">
        <LiveExample
          code={`function TemporaryAlert() {
  const [showAlert, setShowAlert] = useState(false);

  const showTemporaryAlert = () => {
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 3000);
  };

  return (
    <Flex direction="column" gap="3">
      <Button onClick={showTemporaryAlert}>
        Show Temporary Alert
      </Button>
      {showAlert && (
        <Alert variant="success" onClose={() => setShowAlert(false)}>
          Action completed! This alert will disappear in 3 seconds.
        </Alert>
      )}
    </Flex>
  );
}`}
        />
      </Section>

      <Section title="Info Alert" description="For general information and announcements.">
        <LiveExample
          code={`function InfoAlert() {
  const [show, setShow] = useState(true);

  return show ? (
    <Alert variant="info" title="New update available" onClose={() => setShow(false)}>
      Version 2.0 is now available with improved performance and new features.
    </Alert>
  ) : (
    <Button onClick={() => setShow(true)}>Show Alert</Button>
  );
}`}
        />
      </Section>

      <Section title="Success Alert" description="For positive confirmations and success messages.">
        <LiveExample
          code={`function SuccessAlert() {
  const [show, setShow] = useState(true);

  return show ? (
    <Alert variant="success" title="Changes saved" onClose={() => setShow(false)}>
      All your changes have been saved successfully.
    </Alert>
  ) : (
    <Button onClick={() => setShow(true)}>Show Alert</Button>
  );
}`}
        />
      </Section>

      <Section title="Warning Alert" description="For important warnings that need attention.">
        <LiveExample
          code={`function WarningAlert() {
  const [show, setShow] = useState(true);

  return show ? (
    <Alert variant="warning" title="Unsaved changes" onClose={() => setShow(false)}>
      You have unsaved changes. Make sure to save before leaving this page.
    </Alert>
  ) : (
    <Button onClick={() => setShow(true)}>Show Alert</Button>
  );
}`}
        />
      </Section>

      <Section title="Error Alert" description="For errors and critical issues.">
        <LiveExample
          code={`function ErrorAlert() {
  const [show, setShow] = useState(true);

  return show ? (
    <Alert variant="error" title="Failed to upload" onClose={() => setShow(false)}>
      The file upload failed. Please try again or contact support if the issue persists.
    </Alert>
  ) : (
    <Button onClick={() => setShow(true)}>Show Alert</Button>
  );
}`}
        />
      </Section>

      <Section title="Usage Guidelines">
        <Text size="3" style={{ color: '#666', marginBottom: 16 }}>
          Best practices for using alerts:
        </Text>
        <ul style={{ color: '#666', fontSize: '14px', lineHeight: 1.8 }}>
          <li><strong>Always dismissible:</strong> Users should always be able to close alerts</li>
          <li><strong>Temporary messages:</strong> Use alerts for messages that don't need to persist</li>
          <li><strong>Auto-dismiss consideration:</strong> For success messages, consider auto-dismissing after a few seconds</li>
          <li><strong>Position wisely:</strong> Place alerts near the content they relate to</li>
          <li><strong>Callout vs Alert:</strong> Use Callout for persistent information, Alert for dismissible messages</li>
        </ul>
      </Section>

      <Section title="Props">
        <PropTable props={alertProps} />
      </Section>
    </ComponentDoc>
  );
};
