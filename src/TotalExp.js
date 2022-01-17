import Chart from './Chart';
import CategoryList from './CategoryList';


function TotalExp({ categoriesArr }) {
    console.log(categoriesArr);
    
    // const clothing = List.map(n => <CategoryList category_name = {n.category.name} > <button id ="addNEW"> + Add New</button></CategoryList>)
    
    // const valueCost = List.map(item => item.expenses.map( c => (c.cost))).reduce((prev, curr) => prev + curr, 0);
    const labels = categoriesArr?.map((o) => o.name)
    
    function sum(...exp) {
        return exp.reduce((prev, curr) => prev + curr, 0);
    }
    
    const dataList = categoriesArr?.map((o) => o.expenses?.map((x) => x.cost))
    // const conList = dataList[2].reduce((previousValue, currentValue) => previousValue + currentValue)


    

    
    console.log(labels);

    return (
        <div className="TotalExp">

            {/* <h2>Expense $ {valueCost}</h2><div className = "wrap">{clothing}</div><button id ="addNEW"> + Add New</button> */}
            <Chart names={labels} dataList={dataList} />

        </div>
    )
}

export default TotalExp;
