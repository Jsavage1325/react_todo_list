import React from "react"
import TodoItem from "./TodoItem";

function TodosList(props) {
    const { todos } = props
    return (
        <React.Fragment>
        <ul>
            {todos.map(todo => (
            <TodoItem 
              key={todo.id} 
              todo={todo}
              handleChangeProps={props.handleChangeProps}
              deleteTodoProps={props.deleteTodoProps}
              handleEditing={props.handleEditing}
            />
            ))}
        </ul>
        </React.Fragment>
      )
}
export default TodosList
