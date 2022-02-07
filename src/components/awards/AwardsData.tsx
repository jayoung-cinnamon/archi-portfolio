import React, { useState } from "react";
import styled from "styled-components";
import { Group } from "@visx/group";
import letterFrequency, {
  LetterFrequency,
} from "@visx/mock-data/lib/mocks/letterFrequency";
import { scaleLinear } from "@visx/scale";
import { Point } from "@visx/point";
import { Line, LineRadial } from "@visx/shape";
import awards from "../../data/awards";

const blue = "#042730";
export const dotColor = "#f54e0c";
const webColor = "#4646464c";
export const background = "#ffffff";

const awards2017 = awards.y2017.length;
const awards2016 = awards.y2016.length;
const awards2015 = awards.y2015.length;
const awards2014 = awards.y2014.length;
const awards2013 = awards.y2013.length;

const awardsTotalList = [
  { letter: '"2017"', year: awards2017 },
  { letter: '"2016"', year: awards2016 },
  { letter: '"2015"', year: awards2015 },
  { letter: '"2014"', year: awards2014 },
  { letter: '"2013"', year: awards2013 },
];
console.log(awardsTotalList);
const degrees = 360;
// const data2 = letterFrequency.slice(0, 7);
// console.log(data2);
const data = Object.entries(awardsTotalList)
  .slice(0, 7)
  .map((entry) => entry[1]);

const y = (d: any) => d.year;

const genAngles = (length: number) =>
  [...new Array(length + 1)].map((_, i) => ({
    angle: i * (degrees / length),
  }));

const genPoints = (length: number, radius: number) => {
  const step = (Math.PI * 2) / length;
  const genPoints = [...new Array(length)].map((_, i) => ({
    x: radius * Math.sin(i * step),
    y: radius * Math.cos(i * step),
  }));

  return genPoints;
};

function genPolygonPoints<Datum>(
  dataArray: Datum[],
  scale: (n: number) => number,
  getValue: (d: Datum) => number
) {
  const step = (Math.PI * 2) / dataArray.length;
  const points: { x: number; y: number }[] = new Array(dataArray.length).fill({
    x: 0,
    y: 0,
  });

  const pointString: string = new Array(dataArray.length + 1)
    .fill("")
    .reduce((res, _, i) => {
      if (i > dataArray.length) return res;
      const xVal = scale(getValue(dataArray[i - 1])) * Math.sin(i * step);
      const yVal = scale(getValue(dataArray[i - 1])) * Math.cos(i * step);
      points[i - 1] = { x: xVal, y: yVal };
      res += `${xVal},${yVal} `;
      return res;
    });

  return { points, pointString };
}

const defaultMargin = { top: 0, left: 80, right: 80, bottom: 80 };

export type RadarProps = {
  width: number;
  height: number;
  margin?: { top: number; right: number; bottom: number; left: number };
  levels?: number;
};

export default function AwardsData({
  width,
  height,
  levels = 5,
  margin = defaultMargin,
}: RadarProps) {
  const xMax = width - margin.left - margin.right;
  const yMax = height - margin.top - margin.bottom;
  const radius = Math.min(xMax, yMax) / 2;

  const radialScale = scaleLinear<number>({
    range: [0, Math.PI * 2],
    domain: [degrees, 0],
  });

  const yScale = scaleLinear<number>({
    range: [0, radius],
    domain: [0, Math.max(...data.map(y))],
  });

  const webs = genAngles(data.length);
  const points = genPoints(data.length, radius);
  const polygonPoints = genPolygonPoints(data, (d) => yScale(d) ?? 0, y);
  const zeroPoint = new Point({ x: 0, y: 0 });

  return width < 10 ? null : (
    <>
      <svg width={width} height={height}>
        <rect fill={background} width={width} height={height} rx={10} />

        <Group top={height / 2 - margin.top} left={width / 2}>
          {[...new Array(levels)].map((_, i) => (
            <LineRadial
              key={`web-${i}`}
              data={webs}
              angle={(d) => radialScale(d.angle) ?? 0}
              radius={((i + 0.5) * radius) / levels}
              fill="none"
              stroke={webColor}
              strokeWidth={2}
              strokeOpacity={0.5}
              strokeLinecap="round"
            />
          ))}

          {[...new Array(data.length)].map((_, i) => (
            <Line
              key={`radar-line-${i}`}
              from={zeroPoint}
              to={points[i]}
              stroke={webColor}
            />
          ))}

          <polygon
            points={polygonPoints.pointString}
            fill={blue}
            fillOpacity={0.3}
            stroke={blue}
            strokeWidth={1}
          />
          {polygonPoints.points.map((point, i) => (
            <circle
              key={`radar-point-${i}`}
              cx={point.x}
              cy={point.y}
              r={5}
              fill={dotColor}
            />
          ))}
        </Group>
      </svg>
    </>
  );
}
