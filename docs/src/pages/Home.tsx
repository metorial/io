import styled from 'styled-components';
import { Title, Text, Button, Badge, Flex } from '@metorial-io/ui';
import { RiArrowRightLine } from '@remixicon/react';
import { Link } from 'react-router-dom';
import { CodeBlock } from '../components';

const Container = styled.div`
  max-width: 900px;
`;

const Hero = styled.div`
  margin-bottom: 60px;
  padding: 60px 0;
  border-bottom: 1px solid #e5e5e5;
`;

const Section = styled.section`
  margin: 50px 0;
`;

const GuidelineList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 24px 0;
`;

const GuidelineItem = styled.li`
  padding: 16px 0;
  border-bottom: 1px solid #f0f0f0;

  &:last-child {
    border-bottom: none;
  }
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 24px;
  margin: 32px 0;
`;

const FeatureCard = styled.div`
  padding: 24px;
  border: 1px solid #e5e5e5;
  border-radius: 8px;
  background: white;
`;

export const Home = () => {
  return (
    <Container>
      <Hero>
        <Title as="h1" size="9" style={{ marginBottom: 16 }}>
          Metorial IO UI Kit
        </Title>
        <Text size="4" style={{ color: '#666', marginBottom: 32, maxWidth: 600, display: 'block' }}>
          A comprehensive, accessible, and beautifully designed component library built with React, TypeScript, and Styled Components. Create consistent and delightful user experiences with ease.
        </Text>
        <Flex gap="3">
          <Link to="/components/button">
            <Button iconRight={<RiArrowRightLine />}>
              Explore Components
            </Button>
          </Link>
          <Link to="/colors">
            <Button variant="outline">
              View Colors
            </Button>
          </Link>
        </Flex>
      </Hero>

      <Section>
        <Title as="h2" size="7" style={{ marginBottom: 16 }}>
          Getting Started
        </Title>
        <Text size="3" style={{ color: '#666', marginBottom: 24, display: 'block' }}>
          Install the packages you need from the Metorial IO ecosystem:
        </Text>
        <CodeBlock
          code={`# Core UI components
npm install @metorial-io/ui

# Product-specific components (requires @metorial-io/ui)
npm install @metorial-io/ui-product

# Layout components (requires @metorial-io/ui)
npm install @metorial-io/layout`}
        />
        <Text size="3" style={{ marginTop: 16, display: 'block', color: '#666' }}>
          Then import the components you need:
        </Text>
        <CodeBlock
          code={`import { Button, Input, Text } from '@metorial-io/ui';
import { Table, Box } from '@metorial-io/ui-product';
import { LargePaneLayout, SidebarPane } from '@metorial-io/layout';`}
        />
      </Section>

      <Section>
        <Title as="h2" size="7" style={{ marginBottom: 16 }}>
          Packages
        </Title>
        <FeatureGrid>
          <FeatureCard>
            <Badge color="blue" size="2" style={{ marginBottom: 12 }}>
              @metorial-io/ui
            </Badge>
            <Text size="3" weight="strong" style={{ marginBottom: 8, display: 'block' }}>Core Components</Text>
            <Text size="2" style={{ color: '#666' }}>
              46+ essential UI components including buttons, inputs, dialogs, and more. Built on Radix UI primitives for accessibility.
            </Text>
          </FeatureCard>
          <FeatureCard>
            <Badge color="green" size="2" style={{ marginBottom: 12 }}>
              @metorial-io/ui-product
            </Badge>
            <Text size="3" weight="strong" style={{ marginBottom: 8, display: 'block' }}>Product Components</Text>
            <Text size="2" style={{ color: '#666' }}>
              Higher-level components like tables, boxes, and grids designed for building product interfaces quickly.
            </Text>
          </FeatureCard>
          <FeatureCard>
            <Badge color="violet" size="2" style={{ marginBottom: 12 }}>
              @metorial-io/layout
            </Badge>
            <Text size="3" weight="strong" style={{ marginBottom: 8, display: 'block' }}>Layout System</Text>
            <Text size="2" style={{ color: '#666' }}>
              Complete layout components for application structure including sidebars, breadcrumbs, and content panels.
            </Text>
          </FeatureCard>
        </FeatureGrid>
      </Section>

      <Section>
        <Title as="h2" size="7" style={{ marginBottom: 16 }}>
          Design Guidelines
        </Title>
        <GuidelineList>
          <GuidelineItem>
            <Text size="3" weight="strong" style={{ marginBottom: 8, display: 'block' }}>Use Default Colors</Text>
            <Text size="2" style={{ color: '#666' }}>
              Buttons and form elements should generally use the default colors (black/gray). Only use colored variants for specific, intentional purposes like success states or warnings.
            </Text>
          </GuidelineItem>
          <GuidelineItem>
            <Text size="3" weight="strong" style={{ marginBottom: 8, display: 'block' }}>Consistent Sizing</Text>
            <Text size="2" style={{ color: '#666' }}>
              Use size 3 as the default for most interactive elements (buttons, inputs). Size 2 for compact interfaces, size 4-5 for prominent actions.
            </Text>
          </GuidelineItem>
          <GuidelineItem>
            <Text size="3" weight="strong" style={{ marginBottom: 8, display: 'block' }}>Appropriate Variants</Text>
            <Text size="2" style={{ color: '#666' }}>
              Use solid buttons for primary actions, outline for secondary actions, ghost for tertiary actions, and soft for subtle interactive elements.
            </Text>
          </GuidelineItem>
          <GuidelineItem>
            <Text size="3" weight="strong" style={{ marginBottom: 8, display: 'block' }}>Accessibility First</Text>
            <Text size="2" style={{ color: '#666' }}>
              All components are built with accessibility in mind using Radix UI primitives. Always provide labels for form inputs and meaningful content for screen readers.
            </Text>
          </GuidelineItem>
          <GuidelineItem>
            <Text size="3" weight="strong" style={{ marginBottom: 8, display: 'block' }}>Semantic HTML</Text>
            <Text size="2" style={{ color: '#666' }}>
              Use the appropriate semantic element for your content. Text and Title components support the 'as' prop to render the correct HTML element while maintaining visual styling.
            </Text>
          </GuidelineItem>
        </GuidelineList>
      </Section>

      <Section>
        <Title as="h2" size="7" style={{ marginBottom: 16 }}>
          Features
        </Title>
        <GuidelineList>
          <GuidelineItem>
            <Text size="3" weight="strong" style={{ marginBottom: 8, display: 'block' }}>TypeScript Support</Text>
            <Text size="2" style={{ color: '#666' }}>
              Fully typed components with comprehensive TypeScript definitions for improved developer experience and type safety.
            </Text>
          </GuidelineItem>
          <GuidelineItem>
            <Text size="3" weight="strong" style={{ marginBottom: 8, display: 'block' }}>Styled Components</Text>
            <Text size="2" style={{ color: '#666' }}>
              Built with styled-components for scoped styling, theming support, and dynamic styling based on props.
            </Text>
          </GuidelineItem>
          <GuidelineItem>
            <Text size="3" weight="strong" style={{ marginBottom: 8, display: 'block' }}>Radix UI Primitives</Text>
            <Text size="2" style={{ color: '#666' }}>
              Interactive components use Radix UI primitives, ensuring accessibility, keyboard navigation, and ARIA attributes out of the box.
            </Text>
          </GuidelineItem>
          <GuidelineItem>
            <Text size="3" weight="strong" style={{ marginBottom: 8, display: 'block' }}>Framer Motion</Text>
            <Text size="2" style={{ color: '#666' }}>
              Smooth animations and transitions powered by Framer Motion for delightful user interactions.
            </Text>
          </GuidelineItem>
          <GuidelineItem>
            <Text size="3" weight="strong" style={{ marginBottom: 8, display: 'block' }}>Comprehensive Color System</Text>
            <Text size="2" style={{ color: '#666' }}>
              14 color families with 9 shades each, providing flexibility while maintaining visual consistency across your application.
            </Text>
          </GuidelineItem>
        </GuidelineList>
      </Section>
    </Container>
  );
};
