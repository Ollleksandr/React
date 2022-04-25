import NavBar from "../NavBar/NavBar"
import Dashboard from "../Dashboard/DashBoard"
import Users from "../Users/Users"
import Album from "../Albums/Album"
import Methods from "../../methods"
import { BrowserRouter, Route, Switch, Link } from "react-router-dom"

export default function MainWrapper() {
  const { users, albums } = Methods()
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path={"/Dashboard"}>
          <Dashboard />
        </Route>
        <Route path={"/Users"}>
          <Users users={users} />
        </Route>
        <Route path={"/Albums"}>
          <Album albums={albums} />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}
