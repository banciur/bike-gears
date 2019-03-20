import * as React from "react";
import { Line } from "react-chartjs-2";

import { AppState } from "../App";

const SPEED_MIN = 0;
const SPEED_MAX = 70;

// const CADENCE_MIN = 0;
const CADENCE_MAX = 150;

/*
{
      fill: false,
      label: "1-5",
      data: [
        {
          x: 10,
          y: 20,
        },
        {
          x: 15,
          y: 25,
        },
      ],
    },

 */

const options = {
  scales: {
    xAxes: [
      {
        type: "linear",
        scaleLabel: {
          display: true,
          labelString: "speed",
        },
        ticks: {
          beginAtZero: true,
          max: SPEED_MAX,
        },
      },
    ],
    yAxes: [
      {
        type: "linear",
        scaleLabel: {
          display: true,
          labelString: "cadence",
        },
        ticks: {
          beginAtZero: true,
          max: CADENCE_MAX,
        },
      },
    ],
  },
};

// export const ChartComponent: React.FunctionComponent<AppState> = ({ chainGearbox, riderPreferences, wheel }) => {
export const ChartComponent: React.FunctionComponent<AppState> = ({ chainGearbox, riderPreferences }) => {
  const data = {
    datasets: [] as any,
  };

  data.datasets.push({
    fill: false,
    label: "min preferred cadence",
    data: [
      {
        x: 0,
        y: riderPreferences.minCadence,
      },
      {
        x: SPEED_MAX + 10,
        y: riderPreferences.minCadence,
      },
    ],
  });

  data.datasets.push({
    fill: false,
    label: "max preferred cadence",
    data: [
      {
        x: 0,
        y: riderPreferences.maxCadence,
      },
      {
        x: SPEED_MAX + 10,
        y: riderPreferences.maxCadence,
      },
    ],
  });

  for (const gear of chainGearbox.gears) {
    data.datasets.push({
      fill: false,
      label: gear[0],
      data: [
        {
          x: SPEED_MIN,
          y: SPEED_MIN * gear[2],
        },
        {
          x: SPEED_MAX + 10,
          y: (SPEED_MAX + 10) * gear[2],
        },
      ],
    });
  }

  return <Line data={data} options={options} />;
};

//
// <>
//   <p>{wheel.diameter}</p>
//   <p>
//     {riderPreferences.minCadence} - {riderPreferences.maxCadence}
//   </p>
//   <p>{chainGearbox.gears}</p>
// </>
