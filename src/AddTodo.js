import React from "react"

class AddTodo extends React.Component{

  state = {
    content : ""
  }

  handleChange = e =>{
    this.setState({
      content : e.target.value
    })
  }

  handleSubmit = e =>{
    e.preventDefault();
    this.props.addTodo(this.state)
    this.setState({
      content: ""
    })
  }

  render(){
    return(
      <>
      <form className="flex justify-center w-full" onSubmit={ this.handleSubmit }>
        <input className="border border-teal-500 focus:border-teal-500 " placeholder="Add new todo..." type="text" onChange={ this.handleChange } value={ this.state.content }/>
      </form>
      </>
    )
  }

}

export default AddTodo