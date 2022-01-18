import React from "react";
import { useState, useEffect } from "react";
import { Route, Switch, Redirect } from 'react-router-dom';
// import Nav from './Nav';
import Home from "./Home";
import SignIn from "./SignIn"
import SignUp from "./SignUp"
import './App.css';
import Overview from "./Overview";
import Book from "./Book";
// import Reports from "./Reports";
import Nav from "./Nav";
// import ErrorPage from "./ErrorPage";


function App() {

  const [user, setUser] = useState("");

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  function handleLogin(user) {
    console.log('Your Budgeting!!');
    // debugger
    setUser(user);
  }



  return (

    <div className="App">

      {user ? (
        <Switch>
          <Route exact path="/" >
            <Nav user={user} setUser={setUser} />
            <Overview user={user} setUser={setUser} />
          </Route>
          <Route exact path="/books/:book_id">
            <Nav user={user} setUser={setUser} />
            <Book user={user} setUser={setUser} />
          </Route>
        </Switch>
      ) : (
        <Switch>
          <Route path="/signup">
            <SignUp setUser={setUser} />
          </Route>
          <Route path="/signin">
            <SignIn handleLogin={handleLogin} />
          </Route>
          <Route path="/welcome">
            <Home />
          </Route>
        </Switch>
      )}
       
          {/* <ErrorPage user={user} /> */}
       
    </div>
  );
}

export default App;
