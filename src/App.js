import React from "react"
import TodoList from "./TodoList"
import AddTodo from "./AddTodo"

class App extends React.Component{

  state = {
    todos : [

    ]
  }

  addTodo = todo =>{
    todo.id = Math.random()
    const todos = [...this.state.todos, todo]
    this.setState({
      todos
    })
  }

  deleteTodo = id =>{
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id
    })
    this.setState({
      todos
    })
  }

  render(){
    return(
      <>
        <h1 className="text-center text-blue-400 text-2xl">Todo App</h1>
        <TodoList todos={ this.state.todos } deleteTodo={ this.deleteTodo }/>
        <AddTodo addTodo={ this.addTodo }/>
      </>
    )
  }

}

export default App