import { useEffect, useState } from "react"
import "./tableContainer.css"
import TableItem from "../tableItem/tableItem.jsx"

export default function TableContainer(props) {
  useEffect(() => {
    fetch("https://624062682aeb48a9af7365aa.mockapi.io/users")
      .then((resp) => resp.json())
      .then((data) => props.setContactsObj(data))
  }, [])
  const onAddButtonClick = function () {
    props.setTableOrForm("form")
  }
  const onDeleteButtonClick = (id) => {
    fetch("https://624062682aeb48a9af7365aa.mockapi.io/users" + "/" + id, {
      method: "DELETE",
    })
    const newContactsObj = props.contactsObj.filter(
      (objWithProps) => objWithProps.id !== id
    )
    props.setContactsObj(newContactsObj)
  }

  return (
    <table>
      <tbody>
        <tr style={{ fontWeight: "bold", fontSize: "21px" }}>
          <td>
            <h1>Имя</h1>
          </td>
          <td>
            <h1>Фамилия</h1>
          </td>
          <td>
            <h1>Телефон</h1>
          </td>
          <td style={{ width: "95px", height: "95px" }}>
            <button className="add" onClick={() => onAddButtonClick()}>
              Add
            </button>
          </td>
        </tr>

        {props.contactsObj.map((objWithProps) => (
          <TableItem
            key={objWithProps.id}
            item={objWithProps}
            onDeleteButtonClick={onDeleteButtonClick}
          />
        ))}
      </tbody>
    </table>
  )
}
