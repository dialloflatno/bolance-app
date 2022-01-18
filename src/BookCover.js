import DoughnutChart from "./DougnutChart";



function handleDestory(e) {
    console.log(e.target.value);
    alert('Are Your Sure You Want to Delete Your Book')
}


function BookCover({ datLo, title, bookExp
}) {

    return (

        <div>
            <div className='card '>
                <div className='cardInfo'>
                    <DoughnutChart />
                    <h3>{bookExp}</h3>

                    <button className='cardGo' onDoubleClick={handleDestory} onChange={(e) => console.log(e.target.value)}>
                        {title}</button>
                </div>
            </div>

        </div>
    )

}
export default BookCover;