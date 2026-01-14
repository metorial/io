import styled from 'styled-components';

const Container = styled.div`
  border: 1px solid #e5e5e5;
  border-radius: 8px;
  overflow: hidden;
  margin: 20px 0;
  background: #f8f8f8;
`;

const Pre = styled.pre`
  margin: 0;
  padding: 20px;
  overflow-x: auto;
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
  font-size: 13px;
  line-height: 1.6;
  color: #333;
`;

const Title = styled.div`
  padding: 8px 16px;
  background: #fafafa;
  border-bottom: 1px solid #e5e5e5;
  font-size: 12px;
  font-weight: 500;
  color: #666;
`;

interface CodeBlockProps {
  code: string;
  title?: string;
}

export const CodeBlock = ({ code, title }: CodeBlockProps) => {
  return (
    <Container>
      {title && <Title>{title}</Title>}
      <Pre>{code.trim()}</Pre>
    </Container>
  );
};
