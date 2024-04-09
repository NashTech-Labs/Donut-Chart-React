import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import { useDrawingArea } from '@mui/x-charts/hooks';
import { styled } from '@mui/material/styles';

const size = {
  width: 400,
  height: 200,
};

const StyledText = styled('text')(({ theme }) => ({
  fill: theme.palette.text.primary,
  textAnchor: 'middle',
  dominantBaseline: 'central',
  fontSize: 18,
  fontWeight: 600,
}));

function DonutCenterLabel({ children }) {
  const { width, height, left, top } = useDrawingArea();
  return (
    <StyledText x={left + width / 2} y={top + height / 2}>
      {children}
    </StyledText>
  );
}

export default function DonutChart({ data }) {
  return (
    <PieChart
      series={[{ data, innerRadius: 60, paddingAngle: 2, cornerRadius: 5 }]}
      {...size}
    >
      <DonutCenterLabel>Employees</DonutCenterLabel>
    </PieChart>
  );
}
