import styled from 'styled-components';

export const StatisticsCard = styled.section`
  display: block;
  width: 360px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  border-radius: 8px;
  border: 2px grey solid;
`;

export const Title = styled.h2`
  text-align: center;
`;

export const StatList = styled.ul`
  display: flex;
`;

export const StatItem = styled.li`
  display: flex;
  flex-direction: column;
  padding: 20px 0;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`;

export const Label = styled.span``;

export const Percentage = styled.span``;
