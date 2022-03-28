import { Component } from "react"
import ToDoItem from "./ToDoItem"

import "./index.css"
export default class ToDoList extends Component {
  state = {
    todos: [],
    name: "",
    sername: "",
    phone: "",
  }
  constructor() {
    super()
    this.onDeleteButtonClick = this.onDeleteButtonClick.bind(this)
    this.onInputChangeName = this.onInputChangeName.bind(this)
    this.onInputChangeSername = this.onInputChangeSername.bind(this)
    this.onInputChangePhone = this.onInputChangePhone.bind(this)
    this.onAddBtnClick = this.onAddBtnClick.bind(this)
  }

  render() {
    return (
      <>
        <div id="one">
          <table>
            <tbody>
              <tr style={{ fontWeight: "bold", fontSize: "21px" }}>
                <td>Имя</td>
                <td>Фамилия</td>
                <td>Телефон</td>
                <td style={{ width: "95px", height: "95px" }}>
                  <button className="add" onClick={this.addFormRender}>
                    Add
                  </button>
                </td>
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
        </div>
        <div id="two">
          <h1>You can add new contacts here</h1>
          <ul className="EnterFieldHolder">
            <li>
              <input
                type="text"
                onChange={this.onInputChangeName}
                className="enterField"
                placeholder="Enter name"
              />
            </li>
            <li>
              <input
                type="text"
                onChange={this.onInputChangeSername}
                className="enterField"
                placeholder="Enter sername"
              />
            </li>
            <li>
              <input
                type="text"
                onChange={this.onInputChangePhone}
                className="enterField"
                placeholder="Enter phone"
              />
            </li>
          </ul>
          <div>
            <button className="FormBtn" onClick={this.cancelFormRender}>
              Cancel
            </button>
            <button className="FormBtn" onClick={this.onAddBtnClick}>
              Add
            </button>
          </div>
        </div>
      </>
    )
  }

  onInputChangeName(e) {
    this.setState({ name: e.target.value })
  }

  onInputChangeSername(e) {
    this.setState({ sername: e.target.value })
  }

  onInputChangePhone(e) {
    this.setState({ phone: e.target.value })
  }
  onAddBtnClick() {
    const newContacts = {
      name: this.state.name,
      sername: this.state.sername,
      phone: this.state.phone,
    }
    fetch("https://624062682aeb48a9af7365aa.mockapi.io/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newContacts),
    })
      .then((resp) => resp.json())
      .then((data) =>
        this.setState({
          todos: [...this.state.todos, data],
          name: "",
          sername: "",
          phone: "",
        })
      )
    this.cancelFormRender()
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
  addFormRender() {
    document.getElementById("one").style.display = "none"
    document.getElementById("two").style.display = "block"
  }
  cancelFormRender() {
    document.getElementById("two").style.display = "none"
    document.getElementById("one").style.display = "block"
  }
}
