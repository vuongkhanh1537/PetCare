import React, { useState, useEffect } from 'react';
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  LineSeries,
  DateTime,
  Legend,
  Tooltip,
} from '@syncfusion/ej2-react-charts';
import { lineCustomSeries, lineCustomSeries2, LinePrimaryXAxis, LinePrimaryYAxis, LinePrimaryXAxis2 } from '../../../data(c)/MockData';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const LineChart = ({ initialData }) => {
  const [selectedData, setSelectedData] = useState(initialData);
  const [selectedAxis, setSelectedAxis] = useState(LinePrimaryXAxis);

  useEffect(() => {
    setSelectedData(initialData);
  }, [initialData]);

  const handleDropdownChange = (event) => {
    const selectedValue = event.target.value;
    const newData = selectedValue === 'lineCustomSeries' ? lineCustomSeries : lineCustomSeries2;
    const newAxis = selectedValue === 'lineCustomSeries' ? LinePrimaryXAxis : LinePrimaryXAxis2;
    
    setSelectedData(newData);
    setSelectedAxis(newAxis);
  };

  return (
    <div >
      <FormControl sx={{ m: 1, minWidth: 120 }} style={{ position: "relative", marginLeft: "1000px" } }>
        <Select
          value={selectedData === lineCustomSeries ? "lineCustomSeries" : "lineCustomSeries2"}
          onChange={handleDropdownChange}
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value="lineCustomSeries">Theo năm</MenuItem>
          <MenuItem value="lineCustomSeries2">Theo tháng</MenuItem>
        </Select>
      </FormControl>
      <ChartComponent
        key={JSON.stringify(selectedData)}
        id="line-chart"
        height="420px"
        primaryXAxis={selectedAxis}
        primaryYAxis={LinePrimaryYAxis}
        chartArea={{ border: { width: 0 } }}
        tooltip={{ enable: true }}
        background="#fff"
        legendSettings={{ background: 'white' }}
      >
        <Inject services={[LineSeries, DateTime, Legend, Tooltip]} />
        <SeriesCollectionDirective>
          {selectedData.map((item, index) => (
            <SeriesDirective key={index} {...item} />
          ))}
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  );
};

export default LineChart;
