import "./Item.css"
import { useState } from "react"

export default function Item({
  key,
  list,
  onSave,
  onDeleteButtonClick,
  updateSticker,
}) {
  const [description, setDescription] = useState(list.description)

  function onValueChange(e) {
    setDescription(e.target.value)
  }

  return (
    <div key={list.id} className="itemWrapper">
      <div className="item">
        <textarea
          name="desctiption"
          // defaultValue=""
          onChange={onValueChange}
          onBlur={() => updateSticker(list.id, list)}
        >
          {description}
        </textarea>
      </div>
      <div className="buttonContainer">
        <button onClick={() => onDeleteButtonClick(list.id)}>Delete</button>
      </div>
    </div>
  )
}
