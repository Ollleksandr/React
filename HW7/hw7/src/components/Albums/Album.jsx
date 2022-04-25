import "./album.css"
import AlbumItem from "./AlbumItem"
import { Link } from "react-router-dom"
export default function Album(props) {
  return (
    <table>
      <tbody>
        <tr>
          <td style={{ fontWeight: "bold", fontSize: "25px" }}>User's Id</td>
          <td style={{ fontWeight: "bold", fontSize: "25px" }}>Title</td>
        </tr>
        {props.albums.map((unicAlbum) => (
          <AlbumItem key={unicAlbum.id} unicAlbum={unicAlbum} />
        ))}
      </tbody>
      <Link to={"/Dashboard"}>
        <button class="gradient-button">Dashboard</button>{" "}
      </Link>
    </table>
  )
}
