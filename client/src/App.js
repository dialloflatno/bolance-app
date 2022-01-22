import React from "react";
import { useState, useEffect } from "react";
import { Route, Switch} from 'react-router-dom';
import GreetNav from "./GreetNav";
import SignIn from "./SignIn"
import SignUp from "./SignUp"
import './App.css';
import Overview from "./Overview";
import Book from "./Book";
import Welcome from "./Welcome";
import ErrorPage from "./ErrorPage";
import Nav from "./Nav";
import Loading from "./Loading";
// import Reports from "./Reports";


function App() {

  const [user, setUser] = useState('');

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  },[]);

 
  if(user){
    return (
      <>
       <Switch>
          <Route exact path="/" >
            <Nav user={user} setUser={setUser} />
            <Overview user={user} />
          </Route>
          <Route path="/books/:book_id">
            <Nav user={user} setUser={setUser} />
            <Book />
          </Route>
        </Switch>
      </>
    )
  } else {
    return (
      
      <div className="App">
              <Switch>
                <Route exact path="/home">
                  <GreetNav /><Welcome />
                </Route>
                <Route path="/signup">
                  <SignUp setUser={setUser} />
                </Route>
                <Route path="/">
                  <SignIn setUser={setUser} />
                </Route>
              </Switch>
            
    </div>
  );
}}

export default App;
