import "./form.css"

export default function Form(props) {
  const onCancelButonClick = function () {
    props.setTableOrForm("table")
  }
  return (
    <div className="container">
      <ul>
        <h1>You can add new contact here</h1>
        <li>
          <input
            type="text"
            onChange={(e) => props.getNameValue(e)}
            placeholder="Enter name"
          />
        </li>
        <li>
          <input
            type="text"
            onChange={(e) => props.getSernameValue(e)}
            placeholder="Enter sername"
          />
        </li>
        <li>
          <input
            type="text"
            onChange={(e) => props.getPhoneValue(e)}
            placeholder="Enter phone"
          />
        </li>
      </ul>
      <button onClick={() => props.onSaveButonClick()}>save</button>
      <button onClick={() => onCancelButonClick()}>cancel</button>
    </div>
  )
}
