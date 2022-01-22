// import React, { useState } from 'react';
// import { Bar} from "react-chartjs-2";


// function Chart({categoriesArr}){



//  const categoriesArr = book?.categories;
//  const labels = categoriesArr?.map((o) => o.name)
//  /// dataList = [202,20,1]
//  const dataListOfCosts = categoriesArr?.map((o) => o.expenses?.map((x) => x.cost))
//  /// dataList = [[202],[20],[1]] <<<----- What im getting
//  let valueCost = ''

//  if (dataListOfCosts?.length < 0) {
//    valueCost = dataListOfCosts?.reduce((prev, curr) => prev + curr).split(',')
//  }

//  console.log(parseInt(valueCost))
//  const expense = parseInt(valueCost)


//   const [barData, setBarData] = useState ({
//     labels: names? (names):(""),
//     datasets: [
//         {
//             label: 'test label',
//             data: dataList,
//             backgroundColor: [
//                 'rgba(255, 99, 132, 0.6)',
//                 'rgba(54, 162, 235, 0.6)',
//                 'rgba(255, 206, 86, 0.6)',
//                 'rgba(75, 192, 192, 0.6)'
//             ],
//             borderWidth: 3
//         }
//     ]
// });

// setBarData(true)
  
//     return (
//       <div className="chart">
//         <Bar
//           data={barData}
//           width={100}
//           height={50}
//           options={{
//             maintainAspectRatio: false
//           }} />
//       </div>
//     )
  
// }
// export default Chart;




