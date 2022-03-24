import { Component } from "react"
import ToDoItem from "./ToDoItem"
export default class ToDoList extends Component {
  state = {
    todos: [
      {
        id: "14",
        title: "Сделать утреннюю зарядку",
        completed: true,
      },
      {
        id: "16",
        title: "Купить продуктьі",
        completed: false,
      },
      {
        id: "18",
        title: "Сделать домашнее задание",
        completed: false,
      },
      {
        id: "19",
        title: "Сходить в кино",
        completed: true,
      },
      {
        id: "20",
        title: "Позвонить другу",
        completed: false,
      },
    ],
  }
  render() {
    return (
      <>
        <h1 style={{ marginLeft: "-1000px" }}>My ToDo list</h1>
        <ul>
          {this.state.todos.map((todo) => (
            <ToDoItem key={todo.id} title={todo.title} compl={todo.completed} />
          ))}
        </ul>
      </>
    )
  }
}
