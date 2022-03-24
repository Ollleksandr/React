import { Component } from "react"
import "./index.css"
export default class ToDoItem extends Component {
  getCompleteStyle() {
    return this.props.compl && "green"
  }
  render() {
    return (
      <li style={{ backgroundColor: this.getCompleteStyle() }} className="list">
        <input type="checkbox" className="radio" />
        {this.props.title}
        <button className="deleteButton">delete</button>
      </li>
    )
  }
}
