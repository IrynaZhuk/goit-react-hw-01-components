import styled from 'styled-components';

export const TransactionTable = styled.table`
  margin-top: 40px;
  margin-right: auto;
  margin-left: auto;
  width: 600px;
  text-align: center;
  border: 2px grey solid;
`;

export const TableHead = styled.thead``;

export const TableRow = styled.tr`
  :nth-of-type(2n + 2) {
    background-color: #d3d3d3;
  }
`;

export const TableHeader = styled.th`
  font-size: 700;
  padding: 8px 0;
  color: #ffffff;
  background-color: #add8e6;
`;

export const TableBody = styled.tbody``;

export const TableData = styled.td`
  padding: 4px 0;
`;
