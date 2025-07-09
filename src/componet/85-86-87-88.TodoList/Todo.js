import React, { Component } from "react";
import "./Todo.css";

export default class Todo extends Component {
  constructor(props) {
    super(props);

    this.complateTodoHandler =
      this.complateTodoHandler.bind(this);
    this.removeTodoHandler =
      this.removeTodoHandler.bind(this);
  }

  complateTodoHandler(id, e) {
    this.props.onComplate(id, e);
  }

  removeTodoHandler(id) {
    this.props.onRemove(id);
  }

  render() {
    let { id, title, isComplate } = this.props;
    return (
      <div
        className={`todo ${
          isComplate ? "todoComplate" : ""
        }`}
      >
        <p className="todo_title">{title}</p>
        <div className="todo_btns">
          <button
            className="todoBtn todoComplateBTN"
            onClick={() =>
              this.complateTodoHandler(id)
            }
          >
            <img
              src="./film85-86-87-88/tik.png"
              alt=""
            />
          </button>
          <button
            className="todoBtn todoRemoveBTN"
            onClick={() =>
              this.removeTodoHandler(id)
            }
          >
            <img
              src="./film85-86-87-88/satl_ashghal.png"
              alt=""
            />
          </button>
        </div>
      </div>
    );
  }
}
