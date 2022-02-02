import React from "react";
import { useState, useEffect } from "react";
import { Route, Switch } from 'react-router-dom';
import GreetNav from "./GreetNav";
import SignIn from "./SignIn"
import SignUp from "./SignUp"
import './App.css';
import Overview from "./Overview";
import Book from "./Book";
import Welcome from "./Welcome";
import Nav from "./Nav";
import BookTossed from "./BookTossed";
import PMReports from "./PMReports";


function App() {

  const [user, setUser] = useState('');
  const [books, setBooks] = useState([]) /// data is for the books of the user //////
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    fetch("/api/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => {
          setUser(user)
          setBooks(user.books)
        });
      }
    });
  }, []);

  function handleDeletedBook(tossedBook) {
    
    const currentBooks = books.filter(book => book.title !== tossedBook.title)
    setBooks(currentBooks)
  }


  if (user) {
    return (
      <>
        <Switch>
          <Route exact path="/" >
            <Nav user={user} isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} setUser={setUser} books={books} />
            <Overview user={user} books={books} isDarkMode={isDarkMode} setBooks={setBooks} />
          </Route>
          <Route path="/books/:book_id">
            <Nav user={user} isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} setUser={setUser} books={books} />
            <Book usersBooks={books} handleDeletedBook ={handleDeletedBook} />
            <footer>Bolance App | Your Best Budget ! </footer>
          </Route>
          <Route to='/reports'>
          <Nav user={user} isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} setUser={setUser} books={books} />
            <PMReports/>
            </Route>
          <Route to ='/toss'>
            <BookTossed />
          </Route>
      </Switch>

      </>
    )
  } else {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/">
            <GreetNav /><Welcome />
          </Route>
          <Route path="/signup">
            <SignUp setUser={setUser} />
          </Route>
          <Route path="/signin">
            <SignIn setUser={setUser} />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
