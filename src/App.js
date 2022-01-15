import React from "react";
import { useState, useEffect } from "react";
import { Route, Switch } from 'react-router-dom';
// import Nav from './Nav';
import Home from "./Home";
import SignIn from "./SignIn"
import SignUp from "./SignUp"
import './App.css';
import Overview from "./Overview";
import Book from "./Book";


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
          <Route path="/home" exact>
            <Overview user={user} setUser={setUser} exact/>
          </Route>
          <Route  exact path ="/books/:book_id">
            <Book user={user} setUser={setUser}/>
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
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      )}
    </div>
  );
}

export default App;
