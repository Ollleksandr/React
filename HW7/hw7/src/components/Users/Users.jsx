import "../Users/users.css"
import { Link } from "react-router-dom"
import UsersItem from "./UsersItem"

export default function Users(props) {
  return (
    <table>
      <tbody>
        <tr>
          <td style={{ fontWeight: "bold", fontSize: "25px" }}>Name</td>
          <td style={{ fontWeight: "bold", fontSize: "25px" }}>Username</td>
          <td style={{ fontWeight: "bold", fontSize: "25px" }}>Email</td>
        </tr>
        {props.users.map((item) => (
          <UsersItem key={item.id} item={item} />
        ))}
      </tbody>
      <Link to={"/Dashboard"}>
        <button class="gradient-button">Dashboard</button>{" "}
      </Link>
    </table>
  )
}
