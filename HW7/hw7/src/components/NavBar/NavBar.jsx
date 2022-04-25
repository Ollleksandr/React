import "../NavBar/navBar.css"
import { Link } from "react-router-dom"

export default function NavBar() {
  return (
    <header>
      <ul>
        <li>
          <Link to={"/Albums"}>Albums</Link>
        </li>
        <li>
          <Link to={"/Users"}>Users</Link>
        </li>

        <li>
          <Link to={"/Dashboard"}>Dashboard</Link>
        </li>
      </ul>
    </header>
  )
}
