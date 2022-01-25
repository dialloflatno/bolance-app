import ListOfCats from "./ListOfCats";

export default function Categories({ categoriesArr }) {
  const cat_names = categoriesArr.map((cat) => <ListOfCats name={cat.name} />);

  return <div className='nvC'>
    
      <div className='catNames'>
      <h1 className= 'cat_t'>Categories</h1>
          {cat_names}
          </div>
      </div>
}