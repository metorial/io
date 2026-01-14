import styled from 'styled-components';
import { Title, Text } from '@metorial-io/ui';

const Container = styled.section`
  margin: 40px 0;

  &:first-child {
    margin-top: 0;
  }
`;

interface SectionProps {
  title: string;
  description?: string;
  children: React.ReactNode;
  id?: string;
}

export const Section = ({ title, description, children, id }: SectionProps) => {
  return (
    <Container id={id}>
      <Title as="h2" size="6" style={{ marginBottom: 12 }}>
        {title}
      </Title>
      {description && (
        <Text size="3" style={{ marginBottom: 20, color: '#666' }}>{description}</Text>
      )}
      {children}
    </Container>
  );
};
