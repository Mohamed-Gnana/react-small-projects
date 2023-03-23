import React from 'react';
import Navbar from "./components/navbar";
import Todos from './components/todos';
import Addtodo from './components/addtodo';
import { BrowserRouter , Route} from "react-router-dom";

class App extends React.Component {
  state = {
    todos : [
      {id : 1 , contain : "wake up" , time : "9:00"},
      {id : 2 , contain : "read Novel chapters" , time : "9:30"}
    ]
  }
  deletetodo = (id) => {
    let todos = this.state.todos.filter(todo => {
      return todo.id !== id ;
    });
    this.setState({
      todos : todos
    });
  }
  addtodo = (todo) => {
    todo.id = Math.random() ; 
    let todos = [...this.state.todos , todo];
    this.setState({
      todos : todos
    });
  }
  render(){
    return (
      <BrowserRouter>
        <div className = "App container">
          <Navbar/>
          <h1 className = "center blue-text">TODO'S</h1>
          <Route exact path = "/" component = {() => <Todos deletetodos = {this.deletetodo} todos = {this.state.todos} />}/>
          <Route path = "/addtodo" component = {() => <Addtodo addtodo = {this.addtodo}/>}/>
        </div>
      </BrowserRouter>
    );
    /* return (
     <div className="App container">
        <h1 className = "center blue-text">TODO'S</h1>
        <Todos deletetodos = {this.deletetodo} todos={this.state.todos}/>
        <Addtodo addtodo = {this.addtodo} />
      </div>
    );*/
  }
}

export default App;
