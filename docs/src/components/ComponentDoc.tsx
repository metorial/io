import styled from 'styled-components';
import { Title, Text, Badge, Flex } from '@metorial-io/ui';

const Container = styled.div`
  max-width: 1200px;
`;

const Header = styled.header`
  margin-bottom: 40px;
  padding-bottom: 30px;
  border-bottom: 1px solid #e5e5e5;
`;

const ImportCode = styled.code`
  display: block;
  background: #f8f8f8;
  padding: 12px 16px;
  border-radius: 6px;
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
  font-size: 13px;
  border: 1px solid #e5e5e5;
  margin-top: 20px;
`;

interface ComponentDocProps {
  title: string;
  description: string;
  importStatement: string;
  package?: 'ui' | 'ui-product' | 'layout' | 'data-hooks';
  children: React.ReactNode;
}

export const ComponentDoc = ({
  title,
  description,
  importStatement,
  package: pkg = 'ui',
  children,
}: ComponentDocProps) => {
  const packageColors = {
    ui: 'blue',
    'ui-product': 'green',
    layout: 'violet',
    'data-hooks': 'orange',
  } as const;

  const packageLabels = {
    ui: '@metorial-io/ui',
    'ui-product': '@metorial-io/ui-product',
    layout: '@metorial-io/layout',
    'data-hooks': '@metorial-io/data-hooks',
  } as const;

  return (
    <Container>
      <Header>
        <Flex gap="3" align="center" style={{ marginBottom: 12 }}>
          <Title as="h1" size="8">
            {title}
          </Title>
          <Badge color={packageColors[pkg]} size="2">
            {packageLabels[pkg]}
          </Badge>
        </Flex>
        <Text size="3" style={{ color: '#666', marginBottom: 16 }}>{description}</Text>
        <ImportCode>{importStatement}</ImportCode>
      </Header>
      {children}
    </Container>
  );
};
