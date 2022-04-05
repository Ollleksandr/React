import TableContainer from "../tableContainer/tableContainer"
import Form from "../form/form"
import { useEffect, useState } from "react"

export default function MainContainer() {
  const [contactsObj, setContactsObj] = useState([])
  const [tableOrForm, setTableOrForm] = useState("table")
  const [name, setNname] = useState("")
  const [sername, setSurname] = useState("")
  const [phone, setPhone] = useState("")

  // useEffect(() => {
  //   fetch("https://624062682aeb48a9af7365aa.mockapi.io/users")
  //     .then((resp) => resp.json())
  //     .then((data) => setContactsObj(data))
  // }, [])

  const onSaveButonClick = function () {
    const newContacts = {
      name: name,
      sername: sername,
      phone: phone,
    }
    fetch("https://624062682aeb48a9af7365aa.mockapi.io/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newContacts),
    })
      .then((resp) => resp.json())
      .then((data) => {
        setContactsObj([...contactsObj, data])
        // setNname(""), setSurname(""), setPhone("")
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

  return tableOrForm == "table" ? (
    <div>
      <TableContainer
        contactsObj={contactsObj}
        tableOrForm={tableOrForm}
        setTableOrForm={setTableOrForm}
        setContactsObj={setContactsObj}
      />
    </div>
  ) : (
    <div>
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
