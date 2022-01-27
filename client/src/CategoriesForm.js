




export default function CategoriesForm({ setCategoryName, name ,addCategories, book_id }) {

        //// POST to Category the POST to BookCategory//////////////////
        


        const handleSubmit = (e) => {
            e.preventDefault()
    
            fetch('/api/categories', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify({
    
                    name: name,
                    book_id: book_id
    
                }),
            })
                .then((r) => r.json())
                .then((info) => fetch('/api/book_categories', {
                    method: 'POST',
                    headers: {
                        'Content-type': 'application/json',
                    },
                    body: JSON.stringify({
                        category_id: info.id,
                        book_id: book_id
                    }),
                })
                .then((r) => r.json())
                .then((match) => {addCategories(match)
                                    setCategoryName('')
                    })

             )
            }
            // .then((response)=> addCategories(response))

    return (

        <>
          <form onSubmit={handleSubmit} className='cats'>
                <input placeholder=' new category'  onChange={(e) => setCategoryName(e.target.value)} />
                <button className='ahd' type='submit'>ADD</button>
            </form>

        </>
    )

}