import React, { Component } from 'react';
import Chart from 'react-apexcharts';

interface IProps {}

interface IState {
  series: any;
  options: any;
}

interface IProps {}
export default class RadialChart extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      series: [90, 50, 80],
      options: {
        colors: ['#16962B', '#B9F1C2', '#FF3E3E'],
        chart: {
          toolbar: {
            show: false,
          },
          height: 350,
          type: 'radialBar',
        },
        plotOptions: {
          radialBar: {
            hollow: {
              margin: 15,
              size: '70%',
            },
            dataLabels: {
              showOn: 'always',
              name: {
                offsetY: -10,
                show: true,
                color: '#888',
                fontSize: '13px',
              },
              value: {
                color: '#111',
                fontSize: '30px',
                show: true,
              },
            },
          },
        },
        fill: {
          type: 'gradient',
          gradient: {
            shade: 'dark',
            type: 'vertical',
            gradientToColors: ['#16962B'],
            stops: [0, 100],
          },
        },
        stroke: {
          lineCap: 'round',
        },
        labels: ['Transactions'],
        title: {
          text: 'Analytics',
          floating: true,
          offsetY: -1,
          align: 'left',
          style: {
            color: '#A5A5A5',
          },
        },
      },
    };
  }

  render() {
    return (
      <div>
        <Chart
          options={this.state.options}
          series={this.state.series}
          type='radialBar'
          height={350}
        />
        <div className='flex flex-row gap-x-3 justify-center'>
          <div className='gap-x-2 flex flex-row items-center'>
            <div className='rounded-md h-4 w-4 bg-[#16962B]' />
            <p>Delivered</p>
          </div>
          <div className='gap-x-2 flex flex-row items-center'>
            <div className='rounded-md h-4 w-4 bg-[#B9F1C2]' />
            <p>Pending</p>
          </div>
          <div className='gap-x-2 flex flex-row items-center'>
            <div className='rounded-md h-4 w-4 bg-[#FF3E3E]' />
            <p>Cancelled</p>
          </div>
        </div>
      </div>
    );
  }
}
