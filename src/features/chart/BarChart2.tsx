import React, { Component } from 'react';
import Chart from 'react-apexcharts';

interface IProps {}

interface IState {
  series: any;
  options: any;
}

interface IProps {}
export default class BarChart2 extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      series: [
        {
          name: 'Items',
          data: [10, 41, 35, 51, 49],
        },
      ],
      options: {
        colors: ['#16962B'],
        chart: {
            toolbar: {
                show: false,
            },
          height: 120,
          type: 'line',
          zoom: {
            enabled: false,
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: 'straight',
        },
        title: {
          text: '',
        },
        xaxis: {
          labels: {
            show: false,
          },
          lines: {
            show: false,
          },
        },
        yaxis: {
          labels: {
            show: false,
          },
          lines: {
            show: false,
          },
        },
        grid: {
          xaxis: {
            lines: {
              show: false,
            },
          },
          yaxis: {
            lines: {
              show: false,
            },
          },
        },
        fill: {
          type: 'solid',
          opacity: 1,
        },
      },
    };
  }

  render() {
    return (
        <div className='-mt-10'>

      <Chart
        options={this.state.options}
        series={this.state.series}
        type='line'
        height={120}
        width={120}
        />
        </div>
    );
  }
}
