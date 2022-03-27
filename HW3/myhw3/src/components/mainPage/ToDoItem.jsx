import { Component } from "react"
import "./index.css"
export default class ToDoItem extends Component {
  render() {
    return (
      <>
        <tr key={this.props.id} style={{ fontSize: "17px" }}>
          <td>{this.props.name}</td>
          <td>{this.props.sername}</td>
          <td>{this.props.phone}</td>
          <td style={{ width: "95px", height: "95px" }}>
            <button
              className="delete"
              onClick={() => this.props.onDeleteButtonClick(this.props.id)}
            >
              X
            </button>
          </td>
        </tr>
      </>
    )
  }
}
