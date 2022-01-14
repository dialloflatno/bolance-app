User.destroy_all
Book.destroy_all
Category.destroy_all
Transaction.destroy_all


puts "User ..... Loading"

mike = User.create( full_name:"Ibrahima Diallo", username: "braDo123", password: "hello12",email:"123@gmail.com")
mike = User.create( full_name:"Mike Thomas", username: "mike", password: "sjdh2090",email:"123@mo.com")
jack = User.create( full_name:"Jack Barson", username: "jack", password: "sjjs2090",email:"1e33@mo.com")

puts "Book ..... Finding"

 Book.create( title:"Business", user: mike)
 Book.create( title:"Personal", user: jack)

puts "Category ..... Finding"

food = Category.create(name:"Food")
clothing = Category.create(name:"Clothing")
outting = Category.create(name:"Outting")
travel = Category.create(name:"Travel")
pleasure = Category.create(name:"Pleasure")

puts "Matching ...."
# Category.find_by(name:"Food")
# food_personal = BookCategory.create(category: Category.find_by(name:"Food") , book: Book.find_by(title:"Business"), user_id: User.find_by(username:"jack").id)
# clothing_personal = BookCategory.create(category:  Category.find_by(name:"Clothing"), book: Book.find_by(title:"Personal"), user_id: User.find_by(username: "mike").id)
# outting_personal = BookCategory.create(category:  Category.find_by(name:"Outting") , book: Book.find_by(title:"Business"),user_id:  User.find_by(username:"jack").id)
# travel_personal = BookCategory.create(category:  Category.find_by(name:"Travel"), book: Book.find_by(title:"Personal"), user_id: User.find_by(username: "mike").id)
# pleasure_personal = BookCategory.create(category:  Category.find_by(name:"Pleasure") , book: Book.find_by(title:"Business"), user_id:  User.find_by(username:"jack").id)

puts " Transaction ..Processing"

Transaction.create( item:"Mcdonalds Cheese Burger", payment_type: "Cash", store_name: "Mcdonalds", store_address:"208 Varick St, New York, NY 10014", cost: 3.74, book_id: Book.find_by(title:"Personal").id, category_id: Category.find_by(name:"Food").id)
Transaction.create( item:"Mcdonalds Whooper Burger", payment_type: "Cash", store_name: "Mcdonalds", store_address:"208 Varick St, New York, NY 10014", cost: 4.74, book_id: Book.find_by(title:"Personal").id, category_id: Category.find_by(name:"Food").id)
Transaction.create( item:"Mcdonalds Wendy Burger", payment_type: "Cash", store_name: "Mcdonalds", store_address:"208 Varick St, New York, NY 10014", cost: 6.74, book_id: Book.find_by(title:"Personal").id, category_id: Category.find_by(name:"Food").id)
Transaction.create( item:"Uniqulo Black Jeans", payment_type: "Credit", store_name: "Uniqulo", store_address:"500 W 33rd St Space #RU218, New York, NY 10001", cost: 23.94, book_id: Book.find_by(title:"Personal").id, category_id:Category.find_by(name:"Clothing").id)
Transaction.create( item:"T Steakhouse w/ Friends", payment_type: "Cash", store_name: "T Steakhouse", store_address:"3223 Quentin Rd", cost: 3.74, book_id: Book.find_by(title:"Personal").id, category_id: Category.find_by(name:"Outting").id)
Transaction.create( item:"France", payment_type: "Credit", store_name: "Expedia", store_address:"Online", cost: 1293.74, book_id: Book.find_by(title:"Personal").id, category_id: Category.find_by(name:"Travel").id)
Transaction.create( item:"NFT", payment_type: "Crypto", store_name: "Crypto.com", store_address:"Online", cost: 12293.74, book_id: Book.find_by(title:"Personal").id, category_id: Category.find_by(name:"Pleasure").id)


puts " Transaction Complete "
