import { Component } from "react"
import ToDoItem from "./ToDoItem"
export default class ToDoList extends Component {
  state = {
    todos: [],
  }
  constructor() {
    super()
    this.onDeleteButtonClick = this.onDeleteButtonClick.bind(this)
  }
  render() {
    return (
      <>
        <table>
          <tbody>
            <tr style={{ fontWeight: "bold", fontSize: "21px" }}>
              <td>Имя</td>
              <td>Фамилия</td>
              <td>Телефон</td>
            </tr>
            {this.state.todos.map((todo) => (
              <ToDoItem
                key={todo.id}
                id={todo.id}
                name={todo.name}
                sername={todo.sername}
                phone={todo.phone}
                onDeleteButtonClick={this.onDeleteButtonClick}
              />
            ))}
          </tbody>
        </table>
      </>
    )
  }
  componentDidMount() {
    fetch("https://624062682aeb48a9af7365aa.mockapi.io/users")
      .then((resp) => resp.json())
      .then((data) => this.setState({ todos: data }))
  }

  onDeleteButtonClick(id) {
    fetch("https://624062682aeb48a9af7365aa.mockapi.io/users" + "/" + id, {
      method: "DELETE",
    })
    const newTodos = this.state.todos.filter((todo) => todo.id !== id)
    this.setState({ todos: newTodos })
  }
}
