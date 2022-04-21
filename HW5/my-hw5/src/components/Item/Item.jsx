import "./Item.css"
import { useState } from "react"

export default function Item({ id, list, onDeleteButtonClick, updateSticker }) {
  const [description, setDescription] = useState(list.description)
  // const key = list.id

  function onValueChange(e) {
    setDescription(e.target.value)
  }

  return (
    <div className="itemWrapper">
      <div className="item">
        <textarea
          name="description"
          onChange={onValueChange}
          onBlur={() => updateSticker({ id, description })}
          value={description}
        ></textarea>
      </div>
      <div className="buttonContainer">
        <button onClick={() => onDeleteButtonClick(list.id)}>Delete</button>
      </div>
    </div>
  )
}
