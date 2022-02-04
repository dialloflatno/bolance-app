CateoTransactionReport.destroy_all
BookCategory.destroy_all
Subscription.destroy_all
Expense.destroy_all
Category.destroy_all
Book.destroy_all
User.destroy_all


puts "User ..... Loading"

    ibrahima = User.create( full_name:"Ibrahima Diallo", username: "braDo123", password: "hello12",email:"123@gmail.com")
    mike = User.create( full_name:"Mike Thomas", username: "mike", password: "sjdh2090",email:"123@mo.com")
    jack = User.create( full_name:"Jack Barson", username: "jack", password: "sjjs2090",email:"1e33@mo.com")

puts "Book ..... Finding"

    Book.create( title:"Business",budget: 200 ,user: mike)
    Book.create( title:"Personal",budget: 200  ,user: jack)
    Book.create( title:"School", budget: 200 ,user: ibrahima)

puts "Category ..... Finding"

    Category.create(name:"Food")
    Category.create(name:"Clothing")
    Category.create(name:"Outting")
    Category.create(name:"Travel")
    Category.create(name:"Pleasure")

puts "Matching ...."
    Expense.create( item:"Mcdonalds Cheese Burger", payment_type: "Cash", store_name: "Mcdonalds", store_address:"208 Varick St, New York, NY 10014", cost: 3.74)
    Expense.create( item:"Mcdonalds Whooper Burger", payment_type: "Cash", store_name: "Mcdonalds", store_address:"208 Varick St, New York, NY 10014", cost: 4.74)
    Expense.create( item:"Mcdonalds Wendy Burger", payment_type: "Cash", store_name: "Mcdonalds", store_address:"208 Varick St, New York, NY 10014", cost: 6.74)
    Expense.create( item:"Uniqulo Black Jeans", payment_type: "Credit", store_name: "Uniqulo", store_address:"500 W 33rd St Space #RU218, New York, NY 10001", cost: 23.94)
    Expense.create( item:"T Steakhouse w/ Friends", payment_type: "Cash", store_name: "T Steakhouse", store_address:"3223 Quentin Rd", cost: 3.74)
    Expense.create( item:"France", payment_type: "Credit", store_name: "Expedia", store_address:"Online", cost: 1293.74)
    Expense.create( item:"NFT", payment_type: "Crypto", store_name: "Crypto.com", store_address:"Online", cost: 12293.74)

puts " Expense ..Processing"

    BookCategory.create(category_id: Category.all.sample.id, book_id: Book.find_by(title:"Personal").id)
    BookCategory.create(category_id: Category.all.sample.id, book_id: Book.find_by(title:"Personal").id)
    BookCategory.create(category_id:Category.all.sample.id, book_id: Book.find_by(title:"Personal").id)
    BookCategory.create(category_id:Category.all.sample.id, book_id: Book.find_by(title:"Personal").id)
    BookCategory.create(category_id:Category.all.sample.id, book_id: Book.find_by(title:"Personal").id)

puts " Expense..Still..Processing"

    CateoTransactionReport.create(category_id: Category.all.sample.id,expense_id: Expense.all.sample.id)
    CateoTransactionReport.create(category_id: Category.all.sample.id,expense_id: Expense.all.sample.id)
    CateoTransactionReport.create(category_id: Category.all.sample.id,expense_id: Expense.all.sample.id)
    CateoTransactionReport.create(category_id: Category.all.sample.id,expense_id: Expense.all.sample.id)
    CateoTransactionReport.create(category_id: Category.all.sample.id,expense_id: Expense.all.sample.id)
    CateoTransactionReport.create(category_id: Category.all.sample.id,expense_id: Expense.all.sample.id)
    CateoTransactionReport.create(category_id: Category.all.sample.id,expense_id: Expense.all.sample.id)
    CateoTransactionReport.create(category_id: Category.all.sample.id,expense_id: Expense.all.sample.id)


puts " Expense Complete "

    Subscription.create(user:ibrahima, company:'Netflixs',month:'1/31/2022',paymentpermonth:14, subscribed: false)
    Subscription.create(user:jack, company:'Netflixs',month:'2/1/2022',paymentpermonth:14, subscribed: false)
    Subscription.create(user:ibrahima, company:'PlanetFitness',month:'1/31/2022',paymentpermonth:15, subscribed: false)
    Subscription.create(user:mike, company:'Blink',month:'2/3/2022',paymentpermonth:20, subscribed: false)
    Subscription.create(user:jack, company:'Blink',month:'2/3/2022',paymentpermonth:20, subscribed: false)


puts " Subscription Complete "
