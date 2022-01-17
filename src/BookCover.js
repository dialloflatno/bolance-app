import DoughnutChart from "./DougnutChart";





function BookCover({ title, bookExp
}) {

    return (

        <div>
            <div className='card '>
                <DoughnutChart/>
                
                <h3>{bookExp}</h3>

                <h4>{title}</h4>
            </div>


        </div>
    )

}
export default BookCover;