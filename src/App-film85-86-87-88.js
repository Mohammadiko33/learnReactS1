import React, { Component } from "react";
import "./componet/85-86-87-88.TodoList/App.css";
import Todo from "./componet/85-86-87-88.TodoList/Todo";


export default class App__film85_86_87_88 extends Component {

    constructor(props) {
      super(props);
  
      this.state = {
        iptValue: "",
        todos: [],
        status: "all",
      };
  
      this.MakeTodo = this.MakeTodo.bind(this);
      this.complateATodo = this.complateATodo.bind(this);
      this.removeATodo = this.removeATodo.bind(this);
    }
  
    putIptValueHandler(e) {
      this.setState({
        iptValue: e.target.value,
      });
    }
  
    statusFiltered(e) {
      this.setState({
        status: e.target.value,
      });
    }
  
    complateATodo(todoID, e) {
      this.setState((prevState) => ({
        todos: prevState.todos.map((todo) =>
          todo.id === todoID
            ? { ...todo, isComplate: !todo.isComplate }
            : todo
        ),
      }));
    }
  
    removeATodo(todoID) {
      let filteredTodos = this.state.todos.filter(
        (todo) => todo.id !== todoID
      );
      this.setState({
        todos: filteredTodos,
      });
    }
  
    MakeTodo(e) {
      e.preventDefault();
  
      let { iptValue, todos } = this.state;
  
      if (iptValue && iptValue.length > 2) {
        let newObj = {
          id: todos.length + 1,
          isComplate: false,
          title: iptValue,
        };
  
        this.setState((prevState) => ({
          todos: [...prevState.todos, newObj],
          iptValue: "",
        }));
      }
    }
  
    render() {
      let filteredTodos = this.state.todos;
      if (this.state.status === "completed") {
        filteredTodos = filteredTodos.filter(
          (todo) => todo.isComplate
        );
      } else if (this.state.status === "uncompleted") {
        filteredTodos = filteredTodos.filter(
          (todo) => !todo.isComplate
        );
      }
  
      return (
        <div className="todoList">
          <h1 className="todoList_headerTitle">Leach mob Todo List</h1>
  
          <div className="todo_Enter_filter__continer">
            <form
              className="todoEnter_continer"
              onSubmit={this.MakeTodo}
            >
              <input
                type="text"
                className="todo_Enter"
                placeholder="Enter a Todo"
                maxLength={50}
                onChange={(e) =>
                  this.putIptValueHandler(e)
                }
                value={this.state.iptValue}
                autoFocus
              />
              <button
                type="submit"
                className="addTodoBTN"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 5V19"
                    stroke="#7D7C7C"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M5 12H19"
                    stroke="#7D7C7C"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </form>
            <select
              className="todo_filter__continer"
              onChange={(e) =>
                this.statusFiltered(e)
              }
            >
              <option value="all">all</option>
              <option value="completed">Completed</option>
              <option value="uncompleted">Uncompleted</option>
            </select>
          </div>
  
          <div className="todos_continer">
            {filteredTodos.map((todo) => (
              <Todo
                {...todo}
                key={todo.id}
                onComplate={this.complateATodo}
                onRemove={this.removeATodo}
              />
            ))}
          </div>
        </div>
      );
    }
  }
  
  

