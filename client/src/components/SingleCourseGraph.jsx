import { Box, Typography } from "@mui/material";
import {
  BarPlot,
  ChartContainer,
  ChartsXAxis,
  ChartsYAxis,
  LinePlot,
} from "@mui/x-charts";
import React from "react";
import { useLocation } from "react-router-dom";

const valueFormatter = (value) => `${value}%`;

const series = [
  {
    type: "bar",
    stack: "",
    yAxisKey: "general",
    color: "#42a5f5",
    data: [80, 75, 70, 60, 65],
    valueFormatter,
  },
  {
    type: "line",
    yAxisKey: "general",
    color: "#f44336",
    data: [60, 60, 60, 60, 60],
  },
];

export default function SingleCourseGraph() {
  const location = useLocation();

  return (
    <Box sx={{ position: "relative", top: "80%" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* <BarChart
        xAxis={[
          {
            scaleType: "band",
            data: ["CO1", "CO2", "CO3", "CO4", "CO5"],
            id: "barCategories",
          },
        ]}
        series={[{ data: [80, 75, 70, 60, 65],color: "#42a5f5" , valueFormatter }]}
        width={800}
        height={400}
      /> */}
        <ChartContainer
          series={series}
          width={800}
          height={400}
          xAxis={[
            {
              id: "courseOutcome",
              data: ["CO1", "CO2", "CO3", "CO4", "CO5"],
              scaleType: "band",
            },
          ]}
          yAxis={[
            { id: "general", scaleType: "linear" },
            { id: "general", scaleType: "linear" },
          ]}
        >
          <BarPlot />
          <LinePlot />
          <ChartsXAxis
            label="Course Outcome"
            position="bottom"
            axisId="courseOutcome"
          />
          <ChartsYAxis label="Performance" position="left" axisId="general" />
          {/* <ChartsYAxis label="Threshold" position="right" axisId="threshold" /> */}
        </ChartContainer>
      </Box>
      <Typography variant="body1" gutterBottom>
        Figure: {location.state.exam} {location.state.course}
      </Typography>
    </Box>
  );
}
