



// books.map(book => {
//     return (
//         book.categories.map(category => { return category.name })
//     )
// })


// books.map(book => {
//     return (
//         book.categories.map(category => { return category.expenses.map(t => { return ( t.cost)}) })
//     )
// })


// books.map(book => {
//     return (
//         book.categories.map(category => { return category.expenses.map(t => { return ( t.cost)}) })
//     )
// }).map(function(item) {
//     return parseInt(item, 10);
// });

// reducer = (previousValue, currentValue) => previousValue + currentValue;


// parseInt(books.map(book => {
//     return (
//         book.categories.map(category => { return category.expenses.map(t => { return ( t.cost)}) })
//     )
// }))


// books.map(book => {
//     return (
//         book.categories.map(category => { return category.expenses.map(t => { return ( t.cost)}) })
//     )
// }).reduce(reducer).split(',').map(function(item) {
//     return parseInt(item);
// });

// /// Cost ---------------------------------------------------------------------------------
// books.map(book => {
//     return (
//         book.categories.map(category => { return category.expenses.map(t => { return ( t.cost)}) })
//     )
// }).reduce(reducer).split(',').map(function(item) {
//     return parseInt(item);
// }).reduce(reducer)


// ///Food-Cost--------------------------------------------------------------------------------------------

// view.map(book => {
//     return (
//         book.categories.map(category => { return category.expenses.map(t => { return ( t)}) })
//         )
//     })[1].map(cat => { return ( cat )})[1].map(c => {return ( c.cost)}).reduce(reducer);
    
// ///Food-Name--------------------------------------------------------------------------------------------
// view.map(book => {
//     return (
//         book.categories.map(category => { return category.name }))})