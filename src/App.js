import { Route, Switch } from "react-router-dom"
import Gifs from "./components/Gifs"

import Heading from "./components/Heading"
import Login from "./components/Login"
import TaskForm from "./components/TaskForm"
import TaskList from "./components/TaskList"

import { ContextProvider } from "./context/GlobalContext"

// import { axios } from "./api/axios"
// import React, { useState, useEffect } from "react";

function App() {


  return (
    <div>
      <div className="h-screen text-white text-center p-10">
        <div className="container mx-auto h-full">
          <ContextProvider>
              {/* <Heading /> */}
              <Switch>
                <Route path="/tasks" render={(props) => <div><Heading /> <TaskList {...props} /> </div> } />
                <Route path="/add" render={(props) => <div><Heading /> <TaskForm {...props} /> </div> }  />
                <Route path="/edit/:id" render={(props) => <div><Heading /> <TaskForm {...props} /> </div> }/>
                <Route path="/" render={(props) => <div><Heading /> <Gifs {...props} /> </div> } exact/>
                <Route path="/login" component={Login}/>
              </Switch>
          </ContextProvider>
        </div>
      </div>
    </div>
  );
}

export default App;
