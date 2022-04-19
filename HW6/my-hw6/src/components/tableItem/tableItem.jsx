import { Component, useEffect, useState } from "react"
import "./tableItem.css"
export default function TableItem(props) {
  const { item } = props
  const { name, sername, phone, id } = item
  return (
    <tr>
      <td>{name}</td>
      <td>{sername}</td>
      <td>{phone}</td>
      <td style={{ width: "95px", height: "95px" }}>
        <button
          className="delete"
          onClick={() => props.onDeleteButtonClick(id)}
        >
          X
        </button>
      </td>
    </tr>
  )
}
