import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import EditCode from "./components/EditCode";
import Login from "./components/Login";


import {
    BrowserRouter,
    HashRouter,
    Switch,
    Route,
    Redirect
  } from "react-router-dom";



// ReactDOM.render(<App />, document.getElementById("root"));
ReactDOM.render(
    <BrowserRouter basename="">
        <Switch>
            
            <Route exact path="/">
                <Redirect to="/login" />
            </Route>
            {/* <Redirect exact from="/" to="/login" /> */}
            
            <Route path="/login" >
                <Login />
            </Route>

            <Route path="/notes">
                <App />
            </Route>

            <Route path="/editCode">
                <EditCode/>
            </Route>
        </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);

