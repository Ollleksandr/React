import "./header.css"
import { useText } from "../../hooks/customHooks"

export default function Header(props) {
  return (
    <div
      className="header"
      style={
        props.mode.switchMode == true
          ? { backgroundColor: "rgba(48, 34, 34, 0.842)", color: "white" }
          : { backgroundColor: "red" }
      }
    >
      <h1>{useText()}</h1>

      <div className="switchWrapper">
        <label className="switch">
          <input
            onChange={() =>
              props.mode.switchMode == false
                ? props.mode.setSwitchMode(true)
                : props.mode.setSwitchMode(false)
            }
            type="checkbox"
          />
          <span className="slider round"></span>
        </label>
      </div>
    </div>
  )
}
