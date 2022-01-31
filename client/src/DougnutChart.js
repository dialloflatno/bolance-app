import {Doughnut} from 'react-chartjs-2';


function DoughnutChart({title,bookExp}) {
    const data = {
       
        datasets: [
            {
                label: 'Overall',
                data: bookExp,
                borderColor: ['rgba(255,206,86,0.2)'],
                backgroundColor: ['rgba(232,99,132,1)',
                'rgba(232,231,6,1)',
                'rgba(54,192,235,1)',
                'rgba(235,159,64,1)',
                'rgba(153,102,255,1)' ],
                pointBackgroundColor: 'rgba(255,206,86,0.2)',
                labels: title
            }
    
        ]

        
    }


    const options = {
        aspectRatio: 3,
        cutout: 90,
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
            <div className='dchart'>
          <Doughnut data={data} options={options} />
        </div>
        </div>
    )
}

export default DoughnutChart