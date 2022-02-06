import React from "react"
import TodoItem from "./TodoItem";

class TodosList extends React.Component {
    render(){
    const { todos } = this.props
    return (
        <React.Fragment>
        <ul>
            {todos.map(todo => (
            <TodoItem 
              key={todo.id} 
              todo={todo}
              handleChangeProps={this.props.handleChangeProps}
              deleteTodoProps={this.props.deleteTodoProps}
              setUpdate={this.props.setUpdate}
            />
            ))}
        </ul>
        </React.Fragment>
      )
    }
}
export default TodosList
