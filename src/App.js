// React is a JavaScript library but is used as a framework which helps to make single page application user interface
// main app which will be used in order to develop a react application
// App.js is a component which is the main component. This is the first component
// JSX(JavaScript Syntax Extension-combination of JavaScript and HTML) is used in react components to insert dynamic JavaScript with HTML
// We write JavaScript within curly braces
import './App.css';
import React, { useState, useEffect } from 'react';
import Header from './MyComponents/Header';   // default export
import { Todos } from './MyComponents/Todos';   // named export
import { AddTodo } from './MyComponents/AddTodo';
import { Footer } from './MyComponents/Footer';
import { About } from './MyComponents/About';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo) => {
    // console.log("I am onDelete of todo", todo);
    // Deleting this way in react does not work, we would have to use setTodos
    // let index = todos.indexOf(todo);
    // todos.splice(index,1);

    // calling setTodos
    setTodos(todos.filter((e) => {    // filter is higher order array method
      return e !== todo;
    }));
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  const addTodo = (title, desc) => {
    // console.log("I am adding this todo", title, desc);
    let sno;
    if (todos.length === 0) {
      sno = 1;
    }
    else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc
    };
    setTodos([...todos, myTodo]);
    // console.log(myTodo);
  }

  const [todos, setTodos] = useState(initTodo);     // setTodos is a function which updates todos, it does not change todos immediately 
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));     // replace "todos" with JSON.stringify("todos")
  }, [todos])
  // jaise hi todos change ho vaise hi useEffect run karna hai

  return (
    <>
      <Router>
        <Header title="My Todos List" searchBar={false} />
        {/* to use header component we write like this */}
        {/* passing data from parent component to child component */}
        <Switch>
          <Route exact path="/" render={() => {
            return (
              <>
                <AddTodo addTodo={addTodo} />
                <Todos todos={todos} onDelete={onDelete} />
              </>
            )
          }}>
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;

// 1. we add a slash at the end of tags(before >) which do not have a closing tag
// 2. we change class to className


// {
//   sno: 1,
//   title: "Go to the market",
//   desc: "You need to go the market to get this job done 1"
// },
// {
//   sno: 2,
//   title: "Go to the mall",
//   desc: "You need to go the mall to get this job done 2"
// },
// {
//   sno: 3,
//   title: "Go to the shop",
//   desc: "You need to go the shop to get this job done 3"
// }

// we will wrap our react application in opening and closing tag of Router
// we will specify that on which component appears on clicking a page
// Switch basically  matches path one by one and renders the components of the matched path