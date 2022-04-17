import ItemWrapper from "../ItemWrapper/ItemWrapper.jsx"
import "./MainContainer.css"
import StickerMethods from "../../hooks/stickerMethods.js"

export default function MainContainer() {
  const { objState, onAddButtonClick, onDeleteButtonClick, updateSticker } =
    StickerMethods()

  return (
    <>
      <div className="container">
        <h1>Stickers</h1>
        <div className="addWrapper">
          <button className="addButton" onClick={() => onAddButtonClick()}>
            Add new sticker
          </button>
        </div>
        <ItemWrapper
          objState={objState}
          onDeleteButtonClick={onDeleteButtonClick}
          updateSticker={updateSticker}
        />
      </div>
    </>
  )
}
