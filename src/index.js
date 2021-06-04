import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import EditCode from "./components/EditCode";
import Login from "./components/Login";


import {
    HashRouter,
    Switch,
    Route,
    Redirect
  } from "react-router-dom";



// ReactDOM.render(<App />, document.getElementById("root"));
ReactDOM.render(
    <HashRouter basename="/NoteKeeperApp" >
        <Switch>
            
            <Redirect exact from="/" to="/login" />
            
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
  </HashRouter>,
  document.getElementById("root")
);

