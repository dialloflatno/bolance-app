// import DoughnutChart from "./DougnutChart";




function BookCover({ title, bookExp }) {

  console.log(bookExp);
  return (
    <div>
      <div className="card ">
        <div className="cardInfo">
          {/* <DoughnutChart  bookExp ={
            bookExp
          } /> */}
          <h3>{bookExp}</h3>
          <button className="cardGo">{title}</button>
        </div>
      </div>
    </div>
  )
}
export default BookCover
