import React, { Component } from 'react';
import Chart from 'react-apexcharts';

interface IProps {}

interface IState {
  series: any;
  options: any;
}

interface IProps {}
export default class ColumnChart extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      series: [
        {
          name: 'Total Revenue',
          data: [44, 88, 57, 56, 61, 58, 63, 34, 56],
        },
      ],
      options: {
        chart: {
          toolbar: {
            show: false,
          },
          type: 'bar',
          height: 350,
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: '35%',
            endingShape: 'rounded',
            borderRadius: 10,
          },
        },
        dataLabels: {
          enabled: false,
          fontSize: '12px',
          colors: ['#304758'],
        },
        stroke: {
          show: true,
          width: 2,
          colors: ['transparent'],
        },
        xaxis: {
          categories: [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec',
          ],
        },
        yaxis: {
          axisBorder: {
            show: false,
          },
        },
        fill: {
          opacity: 1,
          colors: ['#16962B', '#B9F1C2'],
        },
        title: {
          text: 'Total Revenue',
          floating: true,
          offsetY: -1,
          align: 'left',
          style: {
            color: '#A5A5A5',
          },
        },
        tooltip: {
          y: {
            formatter: function (val: any) {
              return '' + val + '';
            },
          },
        },
      },
    };
  }

  render() {
    return (
      <Chart
        options={this.state.options}
        series={this.state.series}
        type='bar'
        height={350}
      />
    );
  }
}
