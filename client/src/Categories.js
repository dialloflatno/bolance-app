import ListOfCats from "./ListOfCats";

export default function Categories({ categoriesArr }) {
  const cat_names = categoriesArr?.map((cat) => <ListOfCats name={cat.name} />);

  return <div className='nvC'>
    
      <div className='cateTitle'>
      <h1 >Categories</h1>
      </div>
      <div className='catNames'>
          {cat_names}
          </div>
      </div>
}
