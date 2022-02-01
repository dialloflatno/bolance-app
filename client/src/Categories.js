import ListOfCats from "./ListOfCats";

export default function Categories({ categoriesArr }) {
    const cat_names = categoriesArr?.map((cat) => <ListOfCats name={cat.name} />);

    return <div className='cardCategory'>

        <div >
            <h4>Categories</h4>
        </div>
        <div>
            {cat_names}
        </div>
    </div>
}
