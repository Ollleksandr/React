import ItemWrapper from "../ItemWrapper/ItemWrapper.jsx"
import "./MainContainer.css"
import StickerMethods from "../../hooks/stickerMethods.js"
// import useAsync from "../../hooks/stickerMethods"
// import { useState, useEffect } from "react"

export default function MainContainer() {
  const {
    // getObjState,
    objState,
    onAddButtonClick,
    onDeleteButtonClick,
    updateSticker,
    // useAsync,
  } = StickerMethods()
  // const {
  //   run,
  //   data: objState,
  //   setData: setObjState,
  //   status,
  // } = useAsync(getObjState, [])
  // useEffect(() => run(), [])

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
