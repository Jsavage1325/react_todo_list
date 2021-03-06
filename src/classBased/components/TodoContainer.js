import React from "react"
import { v4 as uuidv4 } from "uuid";
import TodosList from "./TodosList";
import Header from "./Header";
import InputTodo from "./InputTodo";


class TodoContainer extends React.Component {

  
  state = {
    todos: [],
   };

  componentDidMount() {
    const temp = localStorage.getItem("todos")
    const loadedTodos = JSON.parse(temp)
    if (loadedTodos) {
      this.setState({
        todos: loadedTodos
      })
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.todos !== this.state.todos) {
      const tempTodos = JSON.stringify(this.state.todos)
      localStorage.setItem("todos", tempTodos)
    }
  }

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

  setUpdate = (updatedTitle, id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.title = updatedTitle
        }
        return todo
      }),
    })
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
          setUpdate={this.setUpdate}
          />
        </div>
      </div>
      </React.Fragment>
    )
  }
}
export default TodoContainer