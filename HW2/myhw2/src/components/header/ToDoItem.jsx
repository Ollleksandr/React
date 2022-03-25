import { Component } from "react"
import "./index.css"
export default class ToDoItem extends Component {
  render() {
    const { item } = this.props
    const { completed, id, title } = item
    return (
      <>
        <li
          className="list"
          style={{
            backgroundColor: getCompleteStyle(completed),
          }}
        >
          <input
            type="checkbox"
            className="radio"
            onChange={() => this.props.onDoneClick(id)}
          />

          {title}
          <button
            className="deleteButton"
            onClick={() => this.props.onDeleteClick(id)}
          >
            delete
          </button>
        </li>
      </>
    )
  }
}
function getCompleteStyle(completed) {
  return completed && "green"
}
