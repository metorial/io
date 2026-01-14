import { Text, theme, Title } from '@metorial-io/ui';
import styled from 'styled-components';
import { CodeBlock } from '../components';

const Container = styled.div`
  max-width: 1200px;
`;

const Header = styled.header`
  margin-bottom: 40px;
  padding-bottom: 30px;
  border-bottom: 1px solid #e5e5e5;
`;

const ColorSection = styled.section`
  margin: 40px 0;
`;

const ColorGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 32px;
  margin: 24px 0;
`;

const ColorFamily = styled.div``;

const ColorFamilyTitle = styled.div`
  font-weight: 600;
  margin-bottom: 12px;
  display: block;
  text-transform: capitalize;
  font-size: 16px;
`;

const ColorSwatches = styled.div`
  border: 1px solid #e5e5e5;
  border-radius: 8px;
  overflow: hidden;
`;

const ColorSwatch = styled.div<{ $color: string; $shade: number }>`
  background: ${props => props.$color};
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
  font-size: 12px;
  color: ${props => (props.$shade >= 500 ? '#fff' : '#000')};
`;

const ShadeNumber = styled.span`
  font-weight: 600;
`;

const ColorValue = styled.span`
  opacity: 0.8;
`;

const colorFamilies = [
  'gray',
  'blue',
  'green',
  'red',
  'orange',
  'yellow',
  'violet',
  'pink',
  'cyan',
  'indigo',
  'iris'
] as const;

const shades = [100, 200, 300, 400, 500, 600, 700, 800, 900] as const;

export const Colors = () => {
  return (
    <Container>
      <Header>
        <Title as="h1" size="8">
          Color System
        </Title>
        <Text
          size="3"
          style={{ color: '#666', margin: '16px 0', display: 'block', lineHeight: 1.6 }}
        >
          The Metorial IO design system includes a comprehensive color palette with 14 color
          families, each with 9 carefully crafted shades. Use these colors for buttons, badges,
          text, and other UI elements.
        </Text>
      </Header>

      <ColorSection>
        <Title as="h2" size="6">
          Usage
        </Title>
        <Text size="3" style={{ color: '#666', margin: '16px 0' }}>
          Colors can be used with the <code>color</code> prop on components like Button, Badge,
          and Text:
        </Text>
        <CodeBlock
          code={`import { Button, Badge, Text } from '@metorial-io/ui';

// Button with color
<Button color="blue">Blue Button</Button>

// Badge with color
<Badge color="green">Success</Badge>

// Text with color (specify exact shade)
<Text color="red500">Error message</Text>`}
        />
      </ColorSection>

      <ColorSection>
        <Title as="h2" size="6">
          Default Usage
        </Title>
        <Text size="3" style={{ color: '#666', margin: '16px 0' }}>
          <strong>Important:</strong> For most use cases, buttons and form elements should use
          the default colors (black/gray). Only use colored variants for specific purposes:
        </Text>
        <ul style={{ color: '#666', fontSize: '14px', lineHeight: 1.6 }}>
          <li>
            <strong>Green:</strong> Success states, positive actions, confirmations
          </li>
          <li>
            <strong>Red:</strong> Destructive actions, errors, warnings
          </li>
          <li>
            <strong>Blue:</strong> Information, links, neutral accent
          </li>
          <li>
            <strong>Other colors:</strong> Specific branding or categorization needs
          </li>
        </ul>
      </ColorSection>

      <ColorSection>
        <Title as="h2" size="6">
          Color Palette
        </Title>
        <ColorGrid>
          {colorFamilies.map(family => {
            return (
              <ColorFamily key={family}>
                <ColorFamilyTitle>{family}</ColorFamilyTitle>
                <ColorSwatches>
                  {shades.map(shade => {
                    const colorKey = `${family}${shade}` as keyof typeof theme.colors;
                    const colorValue = theme.colors[colorKey];
                    return (
                      <ColorSwatch key={shade} $color={colorValue as string} $shade={shade}>
                        <ShadeNumber>{shade}</ShadeNumber>
                        <ColorValue>{colorValue}</ColorValue>
                      </ColorSwatch>
                    );
                  })}
                </ColorSwatches>
              </ColorFamily>
            );
          })}
        </ColorGrid>
      </ColorSection>

      <ColorSection>
        <Title as="h2" size="6">
          Shading Scale
        </Title>
        <Text size="3" style={{ color: '#666', margin: '16px 0' }}>
          Each color family uses a consistent shading scale:
        </Text>
        <ul style={{ color: '#666', fontSize: '14px', lineHeight: 1.8 }}>
          <li>
            <strong>100-300:</strong> Light shades, suitable for backgrounds and subtle accents
          </li>
          <li>
            <strong>400-600:</strong> Medium shades, the primary range for most UI elements
          </li>
          <li>
            <strong>700-900:</strong> Dark shades, for text, borders, and emphasis
          </li>
        </ul>
      </ColorSection>
    </Container>
  );
};
