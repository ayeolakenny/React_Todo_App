import React from "react"

const TodoList = ({ todos, deleteTodo }) => {

  const todoList = todos.length ? (
    todos.map(todo => {
      return(
        <div key={ todo.id } className="flex justify-center border border-teal-500 mx-6">
          <p className="p-2" onClick={ ()=>{deleteTodo(todo.id)} }>{ todo.content }</p>
        </div>
      )
    })
  ) : (
    <div className="flex justify-center border border-teal-500 mx-6">
      <p className="p-2">No Todo Left Yay!</p>
    </div>
  )

  return (
    <>
      <div>{ todoList }</div>
    </>
  )

}

export default TodoList