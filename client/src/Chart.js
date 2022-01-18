import React, { Component, useState } from 'react';
import { Bar as ChartJS } from 'chart.js/auto'
import { Bar, Doughnut } from "react-chartjs-2";
import categoriesArr from './TotalExp'


function Chart({dataList,names}){
  const [barData, setBarData] = useState ({
    labels: names? (names):(""),
    datasets: [
        {
            label: 'test label',
            data: dataList,
            backgroundColor: [
                'rgba(255, 99, 132, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(255, 206, 86, 0.6)',
                'rgba(75, 192, 192, 0.6)'
            ],
            borderWidth: 3
        }
    ]
});


  
    return (
      <div className="chart">
        <Bar
          data={barData}
          width={100}
          height={50}
          options={{
            maintainAspectRatio: false
          }} />
      </div>
    )
  
}
export default Chart;




