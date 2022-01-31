import {Doughnut} from 'react-chartjs-2';


function DoughnutChart(props) {
    const data = {
        labels: props.title,
       
        datasets: [
            {
                label: 'Overall',
                data: props.bookExp,
                borderColor: ['#e3e3e3'],
                backgroundColor: ['#03bafc',
                '#08abd4',
                '#08d4c9',
                '#25faac',
                'rgba(153,102,255,1)' ],
                pointBackgroundColor: 'rgba(255,206,86,0.2)',
            }
    
        ]

        
    }


    const options = {
        aspectRatio: 3,
        cutout: 100,
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