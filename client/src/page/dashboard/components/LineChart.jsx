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
import {
  LinePrimaryXAxis,
  LinePrimaryYAxis,
  LinePrimaryXAxis2,
  LinePrimaryYAxis2,
} from '../../../components/OverviewComponent';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { LineDataMonth, LineDataYear } from '../../../components/OverviewComponent';

const LineChart = ({ dropList }) => {
  const [selectedOption, setSelectedOption] = useState('lineCustomSeries');
  const [selectedAxisX, setSelectedAxisX] = useState(LinePrimaryXAxis);
  const [selectedAxisY, setSelectedAxisY] = useState(LinePrimaryYAxis);
  const [selectedData, setSelectedData] = useState([]);
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth() + 1;
  const currentYear = currentDate.getFullYear();

  useEffect(() => {
    const fetchData = async () => {
      const monthData = await LineDataMonth(currentMonth, currentYear);
      const yearData = await LineDataYear(currentMonth, currentYear);

      const updatedLineCustomSeries1 = [
        {
          dataSource: yearData[0],
          xName: 'x',
          yName: 'y',
          name: 'Doanh thu',
          width: '2',
          marker: { visible: true, width: 10, height: 10 },
          type: 'Line',
        },
        {
          dataSource: yearData[1],
          xName: 'x',
          yName: 'y',
          name: 'Lợi nhuận',
          width: '2',
          marker: { visible: true, width: 10, height: 10 },
          type: 'Line',
        },
      ];

      const updatedLineCustomSeries2 = [
        {
          dataSource: monthData[0],
          xName: 'x',
          yName: 'y',
          name: 'Doanh thu',
          width: '2',
          marker: { visible: true, width: 10, height: 10 },
          type: 'Line',
        },
        {
          dataSource: monthData[1],
          xName: 'x',
          yName: 'y',
          name: 'Lợi nhuận',
          width: '2',
          marker: { visible: true, width: 10, height: 10 },
          type: 'Line',
        },
      ];

      setSelectedData(
        selectedOption === 'lineCustomSeries'
          ? updatedLineCustomSeries1
          : updatedLineCustomSeries2
      );
    };

    fetchData();
  }, [currentMonth, currentYear, selectedOption]);

  const handleDropdownChange = (event) => {
    const selectedValue = event.target.value;
    const newAxisX =
      selectedValue === 'lineCustomSeries' ? LinePrimaryXAxis : LinePrimaryXAxis2;
    const newAxisY =
      selectedValue === 'lineCustomSeries' ? LinePrimaryYAxis : LinePrimaryYAxis2;

    setSelectedOption(selectedValue);
    setSelectedAxisX(newAxisX);
    setSelectedAxisY(newAxisY);
  };

  return (
    <div>
      <FormControl
        sx={{ m: 1, minWidth: 120 }}
        style={{ position: 'relative', left: '85%' }}
      >
        <Select
          value={selectedOption}
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
        primaryXAxis={selectedAxisX}
        primaryYAxis={selectedAxisY}
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
