import { Text } from '@metorial-io/ui';
import type { PropDefinition } from '../../components';
import { ComponentDoc, LiveExample, PropTable, Section } from '../../components';

const calloutProps: PropDefinition[] = [
  {
    name: 'children',
    type: 'React.ReactNode',
    required: true,
    description: 'Callout content'
  },
  {
    name: 'variant',
    type: "'info' | 'success' | 'warning' | 'error'",
    default: "'info'",
    description: 'Visual variant indicating message type'
  },
  {
    name: 'icon',
    type: 'React.ReactNode',
    description: 'Custom icon to display'
  },
  {
    name: 'title',
    type: 'string',
    description: 'Optional title for the callout'
  }
];

export const CalloutDoc = () => {
  return (
    <ComponentDoc
      title="Callout"
      description="An attention-grabbing component for highlighting important information, tips, warnings, and errors. Features distinct variants with appropriate colors and icons."
      importStatement="import { Callout } from '@metorial-io/ui';"
      package="ui"
    >
      <Section title="Basic Usage" description="Simple callouts for different message types.">
        <LiveExample
          code={`<Flex direction="column" gap="3">
  <Callout color="gray">
    This is an informational message for your users.
  </Callout>
  <Callout color="green">
    Your changes have been saved successfully!
  </Callout>
  <Callout color="orange">
    Please review your settings before continuing.
  </Callout>
  <Callout color="red">
    An error occurred while processing your request.
  </Callout>
</Flex>`}
        />
      </Section>

      <Section title="Usage Guidelines">
        <Text size="3" style={{ color: '#666', marginBottom: 16 }}>
          Best practices for using callouts:
        </Text>
        <ul style={{ color: '#666', fontSize: '14px', lineHeight: 1.8 }}>
          <li>
            <strong>Choose appropriate variant:</strong> Match the variant to the message type
            (info, success, warning, error)
          </li>
          <li>
            <strong>Be concise:</strong> Keep callout messages brief and actionable
          </li>
          <li>
            <strong>Don't overuse:</strong> Too many callouts can reduce their effectiveness
          </li>
          <li>
            <strong>Provide actions:</strong> When possible, include links or buttons for next
            steps
          </li>
          <li>
            <strong>Use titles wisely:</strong> Titles should summarize the message in a few
            words
          </li>
        </ul>
      </Section>

      <Section title="Props">
        <PropTable props={calloutProps} />
      </Section>
    </ComponentDoc>
  );
};
