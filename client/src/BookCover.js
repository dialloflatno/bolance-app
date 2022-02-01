// import DoughnutChart from "./DougnutChart";




function BookCover({ title, bookExp }) {

  console.log(bookExp);
  return (
    <div>
      <div className="card ">
        <div className="cardInfo">
          <span>{bookExp}</span>
           <span className="cardGo"><h3>'</h3>{title}</span>
        </div>
      </div>
    </div>
  )
}
export default BookCover
