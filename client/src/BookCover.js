// import DoughnutChart from "./DougnutChart";




function BookCover({ title, bookExp }) {

  console.log(bookExp);
  return (
    <div>
      <div className="card ">
        <div className="cardInfo">
           <h2>{title}</h2>
          <h1>Book Tool:{bookExp}</h1>
          <hr/>
        </div>
      </div>
    </div>
  )
}
export default BookCover
