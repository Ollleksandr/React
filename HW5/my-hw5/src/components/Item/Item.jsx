import "./Item.css"
import { useState } from "react"

export default function Item({
  key,
  id,
  list,
  onDeleteButtonClick,
  updateSticker,
}) {
  const [description, setDescription] = useState(list.description)

  function onValueChange(e) {
    setDescription(e.target.value)
  }

  return (
    <div  className="itemWrapper" key={key}>
      <div className="item">
        <textarea
          
          name="description"
          onChange={onValueChange}
          onBlur={() => updateSticker({ id, description })}
          value={description}
        >
          {/* {description} */}
        </textarea>
      </div>
      <div className="buttonContainer">
        <button onClick={() => onDeleteButtonClick(list.id)}>Delete</button>
      </div>
    </div>
  )
}
