import {Doughnut} from 'react-chartjs-2';

function DoughnutChart({title,bookExp}) {
    const data = {
        labels: title,
        datasets: [
            {
                label: 'Attendance for Week 1',
                data: bookExp,
                borderColor: ['rgba(255,206,86,0.2)'],
                backgroundColor: ['rgba(232,99,132,1)',
                'rgba(232,211,6,1)',
                'rgba(54,162,235,1)',
                'rgba(255,159,64,1)',
                'rgba(153,102,255,1)' ],
                pointBackgroundColor: 'rgba(255,206,86,0.2)',
            }
    
        ]

        
    }


    const options = {
        plugins: {
            title: {
                display: true,
                color:'blue',
                font: {
                    size:34
                },
                padding:{
                    top:0,
                    bottom:30

                },
                margin:{
                    margin: 20
                },
                responsive:true,
                animation:{
                    animateScale: true,
                               }
            }
        }
    
    }
    return (
        <div>
          <Doughnut data={data} options={options} />
        </div>
    )
}

export default DoughnutChart