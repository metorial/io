import styled from 'styled-components';
import { Text } from '@metorial-io/ui';

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
  background: white;
  border: 1px solid #e5e5e5;
  border-radius: 8px;
  overflow: hidden;
`;

const Thead = styled.thead`
  background: #fafafa;
  border-bottom: 1px solid #e5e5e5;
`;

const Th = styled.th`
  text-align: left;
  padding: 12px 16px;
  font-size: 13px;
  font-weight: 600;
  color: #666;
`;

const Td = styled.td`
  padding: 12px 16px;
  border-bottom: 1px solid #f0f0f0;
  font-size: 14px;
  vertical-align: top;

  &:first-child {
    font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
    font-size: 13px;
    color: #c7254e;
    background: #f9f2f4;
  }
`;

const Tr = styled.tr`
  &:last-child td {
    border-bottom: none;
  }
`;

const Code = styled.code`
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
  font-size: 12px;
  background: #f5f5f5;
  padding: 2px 6px;
  border-radius: 3px;
  color: #333;
`;

const Badge = styled.span<{ $type: 'required' | 'optional' }>`
  display: inline-block;
  padding: 2px 8px;
  border-radius: 3px;
  font-size: 11px;
  font-weight: 500;
  margin-left: 8px;
  background: ${props => props.$type === 'required' ? '#fff5f5' : '#f0f9ff'};
  color: ${props => props.$type === 'required' ? '#c41e3a' : '#0369a1'};
`;

export interface PropDefinition {
  name: string;
  type: string;
  default?: string;
  required?: boolean;
  description: string;
}

interface PropTableProps {
  props: PropDefinition[];
}

export const PropTable = ({ props }: PropTableProps) => {
  return (
    <Table>
      <Thead>
        <Tr>
          <Th>Prop</Th>
          <Th>Type</Th>
          <Th>Default</Th>
          <Th>Description</Th>
        </Tr>
      </Thead>
      <tbody>
        {props.map((prop) => (
          <Tr key={prop.name}>
            <Td>
              {prop.name}
              {prop.required && <Badge $type="required">required</Badge>}
            </Td>
            <Td>
              <Code>{prop.type}</Code>
            </Td>
            <Td>
              {prop.default ? <Code>{prop.default}</Code> : <Text size="2" color="gray500">—</Text>}
            </Td>
            <Td>{prop.description}</Td>
          </Tr>
        ))}
      </tbody>
    </Table>
  );
};
