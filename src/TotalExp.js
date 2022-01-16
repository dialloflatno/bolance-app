import Chart from './Chart';
import CategoryList from './CategoryList';


function TotalExp({ categoriesArr }) {

    // const clothing = List.map(n => <CategoryList category_name = {n.category.name} > <button id ="addNEW"> + Add New</button></CategoryList>)

    // const valueCost = List.map(item => item.expenses.map( c => (c.cost))).reduce((prev, curr) => prev + curr, 0);


    return (
        <div className="TotalExp">

            {/* <h2>Expense $ {valueCost}</h2><div className = "wrap">{clothing}</div><button id ="addNEW"> + Add New</button> */}
            <Chart categoriesArr ={categoriesArr}/>

        </div>
    )
}

export default TotalExp;
