import "./dashboard.css"
import { Link } from "react-router-dom"
export default function Dashboard() {
  return (
    <div>
      <Link to={"/Users"}>
        <button class="gradient-button">Users</button>{" "}
      </Link>
      <Link to={"/Albums"}>
        <button class="gradient-button">Albums</button>{" "}
      </Link>
    </div>
  )
}
