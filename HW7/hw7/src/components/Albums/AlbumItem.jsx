export default function AlbumItem(props) {
  return (
    <tr>
      <td>{props.unicAlbum.userId}</td>
      <td>{props.unicAlbum.title}</td>
    </tr>
  )
}
