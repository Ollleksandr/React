import Item from "../Item/Item.jsx"

export default function ItemWrapper({
  objState,
  onDeleteButtonClick,
  updateSticker,
}) {
  return objState.map((list) => {
    return (
      <>
        <Item
          key={list.id}
          list={list}
          onDeleteButtonClick={onDeleteButtonClick}
          updateSticker={updateSticker}
        />
      </>
    )
  })
}
