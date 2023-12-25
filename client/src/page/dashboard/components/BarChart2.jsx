import * as React from "react";
import { useEffect } from 'react';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, StackingColumnSeries, Tooltip, Highlight } from '@syncfusion/ej2-react-charts';
import { Browser } from '@syncfusion/ej2-base';
export let data1 = [
    { x: '2013', y: 9628912 },
    { x: '2014', y: 9609326 },
    { x: '2015', y: 7485587 },
    { x: '2016', y: 7793066 },
    { x: '2017', y: 6856880 }
];
export let data2 = [
    { x: '2013', y: 4298390 },
    { x: '2014', y: 4513769 },
    { x: '2015', y: 4543838 },
    { x: '2016', y: 4999266 },
    { x: '2017', y: 5235842 }
];

const SAMPLE_CSS = `
    .control-fluid {
        padding: 0px !important;
    }`;
const StackedColumn = () => {
    const onChartLoad = (args) => {
        let chart = document.getElementById('charts');
        chart.setAttribute('title', '');
    };
    const load = (args) => {
        let selectedTheme = 'Material';
        args.chart.theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark").replace(/contrast/i, 'Contrast');
    };
    const axisLabelRender = (args) => {
        args.text = args.text.replace("0000000", "0M").replace("000000", "M");
    };
    return (<div className='control-pane'>
            <style>{SAMPLE_CSS}</style>
            <div className='control-section'>
            <ChartComponent
  id='charts'
  style={{ textAlign: "center" }}
  legendSettings={{ enableHighlight: true }}
  primaryXAxis={{
    majorGridLines: { width: 0 },
    minorGridLines: { width: 0 },
    majorTickLines: { width: 0 },
    minorTickLines: { width: 0 },
    interval: 1,
    lineStyle: { width: 0 },
    labelIntersectAction: 'Rotate45',
    valueType: 'Category'
  }}
  primaryYAxis={{
    title: 'Số lượng sản phẩm (sản phẩm)',
    lineStyle: { width: 0 },
    majorTickLines: { width: 0 },
    majorGridLines: { width: 1 },
    minorGridLines: { width: 1 },
    minorTickLines: { width: 0 },
    labelFormat: '{value}'
  }}
  width={Browser.isDevice ? '100%' : '75%'}
  chartArea={{ border: { width: 0 } }}
  load={load.bind(this)}
  title='Tổng quan sản phẩm'
  loaded={onChartLoad.bind(this)}
  tooltip={{ enable: true }}
  axisLabelRender={axisLabelRender.bind(this)}
>
  <Inject services={[StackingColumnSeries, Category, Legend, Tooltip, Highlight]} />
  <SeriesCollectionDirective>
    <SeriesDirective
      dataSource={data1}
      xName='x'
      yName='y'
      name='Chó '
      columnWidth={0.6}
      border={{ width: 1, color: "white" }}
      type='StackingColumn'
    />
    <SeriesDirective
      dataSource={data2}
      xName='x'
      yName='y'
      name='Mèo'
      columnWidth={0.6}
      border={{ width: 1, color: "white" }}
      type='StackingColumn'
    />
  </SeriesCollectionDirective>
</ChartComponent>
            </div>
        </div>);
};
export default StackedColumn;