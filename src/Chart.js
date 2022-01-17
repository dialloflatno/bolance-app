import React, { Component } from 'react';
import { Bar as ChartJS } from 'chart.js/auto'
import { Bar, Doughnut } from "react-chartjs-2";
import categoriesArr from './TotalExp'
class Chart extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      chartData: {
        // labels: ["Clothing", "Food", "utting", "Travel"],
        labels: props.names,
        datasets: [
          {
            label: "Expenses",
            data: [ props.dataList
            ],
            backgroundColor: [
              'rgba(39, 123, 245, 0.8)',
              'rgba(93, 155, 248, 0.8)',
              'rgba(45, 123, 239, 0.8)'
            ]
          }
        ]
      }
    }
  }
  render() {
    return (
      <div className="chart">
        <Bar
          data={this.state.chartData}
          width={100}
          height={50}
          options={{
            maintainAspectRatio: false
          }} />
      </div>
    )
  }
}
export default Chart;




