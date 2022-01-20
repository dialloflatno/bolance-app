import React from "react";
import { useState, useEffect } from "react";
import { Route, Switch} from 'react-router-dom';
import SignIn from "./SignIn"
import SignUp from "./SignUp"
import './App.css';
import Overview from "./Overview";
import Book from "./Book";
import Nav from "./Nav";
import GreetNav from "./GreetNav";
import Welcome from "./Welcome";


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

  function handleUpdatedName(newBookTitle) {
    console.log(newBookTitle);
    
  }


  return (

    <>

      {user ? (
        <Switch>
          <Route exact path="/" >
            <Nav user={user} setUser={setUser} />
            <Overview user={user} setUser={setUser} />
          </Route>
          <Route exact path="/books/:book_id">
            <Nav user={user} setUser={setUser} />
            <Book user={user} setUser={setUser} handleUpdatedName={handleUpdatedName} />
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
          <Route path="/home">
            <GreetNav />
            <Welcome/>
          </Route>
        </Switch>
      )}
       
          {/* <ErrorPage user={user} /> */}
       
    </>
  );
}

export default App;
