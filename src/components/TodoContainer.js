import React from "react"
import { v4 as uuidv4 } from "uuid";
import TodosList from "./TodosList";
import Header from "./Header";
import InputTodo from "./InputTodo";


class TodoContainer extends React.Component {

  
  state = {
    todos: [
      {
        id: uuidv4(),
        title: "Setup development environment",
        completed: true
      },
      {
        id: uuidv4(),
        title: "Develop website and add content",
        completed: false
      },
      {
        id: uuidv4(),
        title: "Deploy to live server",
        completed: false
      }
    ],
   };

  handleChange = (id) => {
    this.setState(prevState => ({
      todos: prevState.todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          }
        }
        return todo;
      }),
    }));
  };
  // todo https://ibaslogic.com/react-form-handling/
  deleteTodo = (id) => {
    this.setState({
      todos: [
        ...this.state.todos.filter(todo => {
          return todo.id !== id;
        })
      ]
    })
  };  

  addTodoItem = title => {
    const newTodo = {
      id: uuidv4(),
      title: title,
      completed: false,
    };
    this.setState({
      todos: [...this.state.todos, newTodo],
    });
  };

  handleEditing = () => {
    console.log("edit mode activated")
  }

  render() {
    return (
      <React.Fragment>
      <div className="container">
        <div className="inner">
          <Header/>
          <InputTodo addTodoProps={this.addTodoItem} />
          <TodosList 
          todos={this.state.todos} 
          handleChangeProps={this.handleChange} 
          deleteTodoProps={this.deleteTodo}
          handleEditing={this.handleEditing}
          />
        </div>
      </div>
      </React.Fragment>
    )
  }
}
export default TodoContainer