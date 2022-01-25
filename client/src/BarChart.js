import React from 'react'
import { Bar } from 'react-chartjs-2'
import { Chart, registerables } from 'chart.js'
Chart.register(...registerables)

// const state = {
//   labels: ['January', 'February', 'March',
//            'April', 'May'],
//   datasets: [
//     {
//       label: 'Rainfall',
//       backgroundColor: 'rgba(75,192,192,1)',
//       borderColor: 'rgba(0,0,0,1)',
//       borderWidth: 2,
//       data: [65, 59, 80, 81, 56]
//     }
// //   ]
// }

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
                backgroundColor: 'rgba(75,192,192,1)',
                  color: 'white',
                borderWidth: 2,
                data:[20,20,20,12]
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
            },
            legend: {
              display: true,
              position: 'right',
            },
          }}
        />
      </div>
    )
  }
}
