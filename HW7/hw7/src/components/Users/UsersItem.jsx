import api from "../../api/api"
export default function UsersItem(props) {
  return (
    <tr>
      <td>{props.item.name}</td>
      <td>{props.item.username}</td>
      <td>{props.item.email}</td>
    </tr>
  )
}
