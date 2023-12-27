import { FetchData } from "../page/dashboard/Dashboard";
import { useState, useEffect } from "react";

export const LineDataMonth = async (month, year) => {
  try {
    const data = await FetchData(month, year);
    return data.lineChartData2;
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
};
export const LineDataYear = async (month, year) => {
  try {
    const data = await FetchData(month, year);
    return data.lineChartData;
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
};
export const LinePrimaryXAxis = {
  valueType: "DateTime",
  labelFormat: "y",
  intervalType: "Years",
  edgeLabelPlacement: "Shift",
  majorGridLines: { width: 0 },
  background: "white",
};
export const LinePrimaryYAxis = {
  labelFormat: "{value} VND ",
  rangePadding: "None",
  minimum: 0,
  maximum: 100000000,
  interval: 20000000,
  lineStyle: { width: 0 },
  majorTickLines: { width: 0 },
  minorTickLines: { width: 0 },
};
export const LinePrimaryXAxis2 = {
  valueType: "DateTime",
  labelFormat: "M",
  intervalType: "Months",
  edgeLabelPlacement: "Shift",
  majorGridLines: { width: 0 },
  background: "white",
};
export const LinePrimaryYAxis2 = {
  labelFormat: "{value} VND ",
  rangePadding: "None",
  minimum: 0,
  maximum: 20000000,
  interval: 4000000,
  lineStyle: { width: 0 },
  majorTickLines: { width: 0 },
  minorTickLines: { width: 0 },
};
export const mockBarData = [
  {
    month: "Sep",
    foods: 137,
    foodsColor: "hsl(229, 70%, 50%)",
    toys: 96,
    toysColor: "hsl(296, 70%, 50%)",
    accesories: 72,
    accesoriesColor: "hsl(97, 70%, 50%)",
    cages: 140,
    cagesColor: "hsl(340, 70%, 50%)",
  },
  {
    month: "Oct",
    foods: 55,
    foodsColor: "hsl(307, 70%, 50%)",
    toys: 28,
    toysColor: "hsl(111, 70%, 50%)",
    accesories: 58,
    accesoriesColor: "hsl(273, 70%, 50%)",
    cages: 29,
    cagesColor: "hsl(275, 70%, 50%)",
  },
  {
    month: "Nov",
    foods: 109,
    foodsColor: "hsl(72, 70%, 50%)",
    toys: 23,
    toysColor: "hsl(96, 70%, 50%)",
    accesories: 34,
    accesoriesColor: "hsl(106, 70%, 50%)",
    cages: 152,
    cagesColor: "hsl(256, 70%, 50%)",
  },
  {
    month: "Dec",
    foods: 133,
    foodsColor: "hsl(257, 70%, 50%)",
    toys: 52,
    toysColor: "hsl(326, 70%, 50%)",
    accesories: 43,
    accesoriesColor: "hsl(110, 70%, 50%)",
    cages: 83,
    cagesColor: "hsl(9, 70%, 50%)",
  },
];
