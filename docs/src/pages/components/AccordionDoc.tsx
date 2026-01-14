import { ComponentDoc, PropTable, LiveExample, Section } from '../../components';
import type { PropDefinition } from '../../components';
import { Text } from '@metorial-io/ui';

const accordionProps: PropDefinition[] = [
  {
    name: 'items',
    type: 'AccordionItem[]',
    description: 'Array of accordion items with title, content, and optional defaultOpen',
  },
  {
    name: 'type',
    type: "'single' | 'multiple'",
    default: "'single'",
    description: 'Whether only one item can be open at a time or multiple',
  },
  {
    name: 'disabled',
    type: 'boolean',
    description: 'Disables all accordion items',
  },
];

const accordionSingleProps: PropDefinition[] = [
  {
    name: 'title',
    type: 'React.ReactNode',
    description: 'The title shown in the accordion header',
  },
  {
    name: 'children',
    type: 'React.ReactNode',
    description: 'The content to display when expanded',
  },
  {
    name: 'defaultOpen',
    type: 'boolean',
    description: 'Whether the accordion item is open by default',
  },
  {
    name: 'disabled',
    type: 'boolean',
    description: 'Disables the accordion item',
  },
];

export const AccordionDoc = () => {
  return (
    <ComponentDoc
      title="Accordion"
      description="An accordion component for displaying collapsible content sections. Built on Radix UI Accordion with smooth animations and keyboard support."
      importStatement="import { Accordion, AccordionSingle } from '@metorial-io/ui';"
      package="ui"
    >
      <Section title="Basic Usage" description="A simple accordion with multiple collapsible items.">
        <LiveExample
          code={`<Accordion
  items={[
    {
      title: 'What is React?',
      content: 'React is a JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called components.'
    },
    {
      title: 'What is TypeScript?',
      content: 'TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.'
    },
    {
      title: 'What is Vite?',
      content: 'Vite is a build tool that aims to provide a faster and leaner development experience for modern web projects.'
    }
  ]}
/>`}
        />
      </Section>

      <Section title="Single Item" description="Use AccordionSingle for a single collapsible section.">
        <LiveExample
          code={`<AccordionSingle title="Advanced Settings">
  <Flex direction="column" gap="3">
    <Text size="2">Configure advanced options for your application.</Text>
    <Checkbox label="Enable debug mode" />
    <Checkbox label="Show performance metrics" />
    <Checkbox label="Enable experimental features" />
  </Flex>
</AccordionSingle>`}
        />
      </Section>

      <Section title="Multiple Open" description="Allow multiple accordion items to be open simultaneously.">
        <LiveExample
          code={`<Accordion
  type="multiple"
  items={[
    {
      title: 'Getting Started',
      content: 'Install the package using npm install @metorial-io/ui and import the components you need.',
      defaultOpen: true
    },
    {
      title: 'Configuration',
      content: 'Configure your application by setting up the theme provider and any global settings.',
      defaultOpen: true
    },
    {
      title: 'Deployment',
      content: 'Deploy your application to production using your preferred hosting platform.'
    }
  ]}
/>`}
        />
      </Section>

      <Section title="Default Open" description="Set accordion items to be open by default.">
        <LiveExample
          code={`<Accordion
  items={[
    {
      title: 'Frequently Asked Question',
      content: 'This section is open by default to highlight important information.',
      defaultOpen: true
    },
    {
      title: 'Additional Information',
      content: 'This section is closed by default and can be expanded when needed.'
    },
    {
      title: 'More Details',
      content: 'This section is also closed by default.'
    }
  ]}
/>`}
        />
      </Section>

      <Section title="Rich Content" description="Accordion items can contain any content including forms, lists, and interactive elements.">
        <LiveExample
          code={`<Accordion
  items={[
    {
      title: 'Personal Information',
      content: (
        <Flex direction="column" gap="3">
          <Input placeholder="First Name" />
          <Input placeholder="Last Name" />
          <Input type="email" placeholder="Email" />
        </Flex>
      )
    },
    {
      title: 'Preferences',
      content: (
        <Flex direction="column" gap="3">
          <Checkbox label="Email notifications" defaultChecked />
          <Checkbox label="SMS notifications" />
          <Checkbox label="Push notifications" defaultChecked />
        </Flex>
      )
    },
    {
      title: 'Billing',
      content: (
        <Flex direction="column" gap="3">
          <Text size="2" color="gray600">
            Your current plan: Professional
          </Text>
          <Button variant="soft" size="2">Upgrade Plan</Button>
        </Flex>
      )
    }
  ]}
/>`}
        />
      </Section>

      <Section title="Disabled State" description="Disable all accordion items when interactions should be prevented.">
        <LiveExample
          code={`function DisabledAccordion() {
  const [disabled, setDisabled] = useState(false);

  return (
    <Flex direction="column" gap="3">
      <Checkbox
        label="Disable accordion"
        checked={disabled}
        onCheckedChange={setDisabled}
      />

      <Accordion
        disabled={disabled}
        items={[
          {
            title: 'Section 1',
            content: 'This section can be disabled along with all others.'
          },
          {
            title: 'Section 2',
            content: 'Try toggling the checkbox above to disable the accordion.'
          }
        ]}
      />
    </Flex>
  );
}`}
        />
      </Section>

      <Section title="Usage Guidelines">
        <Text size="3" style={{ color: '#666', marginBottom: 16 }}>
          Best practices for using accordions:
        </Text>
        <ul style={{ color: '#666', fontSize: '14px', lineHeight: 1.8 }}>
          <li><strong>Organize information:</strong> Use accordions to break down complex information into digestible sections</li>
          <li><strong>Clear titles:</strong> Use descriptive titles that clearly indicate what content is hidden</li>
          <li><strong>Single vs Multiple:</strong> Use single type for FAQs, multiple type for forms or settings</li>
          <li><strong>Default open:</strong> Open important sections by default to ensure visibility</li>
          <li><strong>Don't nest deeply:</strong> Avoid nesting accordions within accordions for better UX</li>
          <li><strong>Mobile friendly:</strong> Accordions are especially useful on mobile for saving screen space</li>
        </ul>
      </Section>

      <Section title="Accordion Props">
        <PropTable props={accordionProps} />
      </Section>

      <Section title="AccordionSingle Props">
        <PropTable props={accordionSingleProps} />
      </Section>
    </ComponentDoc>
  );
};
