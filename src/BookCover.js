// import { Chart } from "react-chartjs-2";






function BookCover({ title, bookExp
}) {

    return (

        <div>
            <div className='card '>
                {/* <Chart bookExp={bookExp} /> */}
                <h3>{bookExp}</h3>

                <h4>{title}</h4>
            </div>


        </div>
    )

}
export default BookCover;