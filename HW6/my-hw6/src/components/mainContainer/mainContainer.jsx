import TableContainer from "../tableContainer/tableContainer"
import Form from "../form/form"
import Header from "../Header/Header.jsx"
import api from "../../api/api.js"
import userContext from "../../../src/context/userContext"
import {
  useDarkStyleBody,
  useDarkStyleHeader,
} from "../../hooks/customHooks.js"
import { useContext } from "react"
import { useState } from "react"

export default function MainContainer() {
  const [contactsObj, setContactsObj] = useState([])
  const [tableOrForm, setTableOrForm] = useState("table")
  const [name, setNname] = useState("")
  const [sername, setSurname] = useState("")
  const [phone, setPhone] = useState("")

  const onSaveButonClick = function () {
    const newContacts = {
      name: name,
      sername: sername,
      phone: phone,
    }
    api.post(" ", newContacts).then(({ data }) => {
      setContactsObj([...contactsObj, data])
    })
    setTableOrForm("table")
  }

  const getNameValue = function (e) {
    setNname(e.target.value)
  }
  const getSernameValue = function (e) {
    setSurname(e.target.value)
  }
  const getPhoneValue = function (e) {
    setPhone(e.target.value)
  }
  const mode = useContext(userContext)

  return tableOrForm == "table" ? (
    <div
      // style={useDarkStyleBody(mode.switchMode)}
      style={
        mode.switchMode === true
          ? { backgroundColor: "grey", color: "white" }
          : { backgroundColor: "white" }
      }
    >
      <Header mode={mode} />
      <TableContainer
        contactsObj={contactsObj}
        tableOrForm={tableOrForm}
        setTableOrForm={setTableOrForm}
        setContactsObj={setContactsObj}
      />
    </div>
  ) : (
    <div
      // style={useDarkStyleBody(mode.switchMode)}
      style={
        mode.switchMode === true
          ? { backgroundColor: "grey", color: "white" }
          : { backgroundColor: "white" }
      }
    >
      <Header mode={mode} />
      <Form
        tableOrForm={tableOrForm}
        setTableOrForm={setTableOrForm}
        getNameValue={getNameValue}
        getSernameValue={getSernameValue}
        getPhoneValue={getPhoneValue}
        onSaveButonClick={onSaveButonClick}
      />
    </div>
  )
}
