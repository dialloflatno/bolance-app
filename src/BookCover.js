import DoughnutChart from "./DougnutChart";





function BookCover({ title, bookExp
}) {

    return (

        <div>
            <div className='card '>
                <div className='cardInfo'>
                    <DoughnutChart />
                    <h3>{bookExp}</h3>

                    <h4>{title}</h4>
                </div>
            </div>


        </div>
    )

}
export default BookCover;