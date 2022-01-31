import React from 'react'
import { Bar } from 'react-chartjs-2'
import { Chart, registerables } from 'chart.js'
Chart.register(...registerables)


export default class BarChart extends React.Component {
  render() {
    return (
      <div className='nivoChart' >
        <Bar
          data={{
            labels: this.props.labels,
            datasets: [
              {
                label: 'Expense Chart',
                backgroundColor:[ '#367777;' ],
                color: '#fbfbfb',
                borderWidth: 2,
                data: this.props.expenses
                ,
              },
            ],
          }}
          options={{
            maintainAspectRatio : false,
            title: {
              display: true,
              text: 'Average Rainfall per month',
              fontSize: 20,
              color: '#fbfbfb'
            },
            legend: {
              labels: {
                fontColor: '#fbfbfb'
            }
             ,
              display: true,
              position: 'right',
            },
          }}
        />
      </div>
    )
  }
}

