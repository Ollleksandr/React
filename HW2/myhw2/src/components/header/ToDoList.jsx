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
  constructor() {
    super()
    this.onDeleteClick = this.onDeleteClick.bind(this)
    this.onDoneClick = this.onDoneClick.bind(this)
    this.getCompleteStyle = this.getCompleteStyle(this)
  }
  render() {
    return (
      <>
        <h1 style={{ marginLeft: "-1000px" }}>My ToDo list</h1>
        <ul>
          {this.state.todos.map((todo) => (
            <ToDoItem
              key={todo.id}
              item={todo}
              onDeleteClick={this.onDeleteClick}
              onDoneClick={this.onDoneClick}
              getCompleteStyle={this.getCompleteStyle}
            />
          ))}
        </ul>
      </>
    )
  }
  onDeleteClick(id) {
    const newTodos = this.state.todos.filter((todo) => todo.id !== id)
    this.setState({ todos: newTodos })
  }
  onDoneClick(id) {
    const item = this.state.todos.find((todo) => todo.id === id)
    const newItem = { ...item, completed: !item.completed }
    this.setState({
      todos: this.state.todos.map((item) => (item.id === id ? newItem : item)),
    })
  }
  getCompleteStyle(completed) {
    return this.state.completed ? "green" : "red"
  }
}
