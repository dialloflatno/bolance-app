import React from 'react'
import { Bar, Bubble, PolarArea } from 'react-chartjs-2'
import { Chart, DatasetController, registerables } from 'chart.js'
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
                backgroundColor:[ 'lightBlue' ],
                color: '08abd4',
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
              color: '08abd4'
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

