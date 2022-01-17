import Chart from './Chart';
import CategoryList from './CategoryList';


function TotalExp({ categoriesArr }) {
    console.log(categoriesArr);
    const reducer = (previousValue, currentValue) => previousValue + currentValue;

    // const clothing = List.map(n => <CategoryList category_name = {n.category.name} > <button id ="addNEW"> + Add New</button></CategoryList>)

    // const valueCost = List.map(item => item.expenses.map( c => (c.cost))).reduce((prev, curr) => prev + curr, 0);
    const labels = categoriesArr?.map((o) => o.name)
    const dataList = categoriesArr?.map((o) => o.expenses.map((x) => x.cost)).reduce(reducer).split(',').map(function (item) {
        return parseInt(item);
    }).reduce(reducer)
    console.log(labels);
    console.log(dataList);

    return (
        <div className="TotalExp">

            {/* <h2>Expense $ {valueCost}</h2><div className = "wrap">{clothing}</div><button id ="addNEW"> + Add New</button> */}
            <Chart names={labels} dataList={dataList} />

        </div>
    )
}

export default TotalExp;
