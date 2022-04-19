import MainContainer from "./components/mainContainer/mainContainer";
import "./App.css";
import userContext from "../src/context/userContext.jsx";
import { useState } from "react";

function App() {
    const [switchMode, setSwitchMode] = useState(false);
    const fooo = "gogogogogogog";

    function darkTheme(switchMode) {
        switchMode === true ? console.log("dark") : console.log("");
    }
    function lightTheme(switchMode) {
        switchMode === false ? console.log("dark") : console.log("");
    }
    const userMode = {
        fooo,
        switchMode,
        setSwitchMode,
        lightTheme,
        darkTheme,
    };
    return (
        <userContext.Provider value={userMode}>
            <MainContainer />
        </userContext.Provider>
    );
}

export default App;
