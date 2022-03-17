import logo from "./logo.svg";
import "./App.css";

function Header() {
    return (
        <>
            <div style={{ backgroundColor: "#44014C", width: "100%", height: "200px" }}>
                <h1 style={{ color: "white", paddingTop: "77px" }}>My first React Home Work</h1>
                <header class="main-header clearfix" padding-bottom="0"></header>
            </div>
        </>
    );
}

function Footer() {
    return (
        <>
            <div style={{ backgroundColor: "white", width: "100%", height: "200px" }}>
                <ul style={{ fontSize: "45px" }}>
                    <li>
                        <a href="https://twitter.com/?lang=ru">Twitter</a>
                    </li>
                    <li>
                        <a href="https://www.facebook.com/campaign/landing.php?campaign_id=1600506847&extra_1=s%7Cc%7C303881997266%7Ce%7Cfacebook%7C&placement=&creative=303881997266&keyword=facebook&partner_id=googlesem&extra_2=campaignid%3D1600506847%26adgroupid%3D60825662376%26matchtype%3De%26network%3Dg%26source%3Dnotmobile%26search_or_content%3Ds%26device%3Dc%26devicemodel%3D%26adposition%3D%26target%3D%26targetid%3Dkwd-541132862%26loc_physical_ms%3D1030468%26loc_interest_ms%3D%26feeditemid%3D%26param1%3D%26param2%3D&gclid=Cj0KCQjwuMuRBhCJARIsAHXdnqMG60_LHsj1AL4Vzzk_k4pB0D1Y4mYXp8O29-dSLS4sTyXT4qT28xYaAiX9EALw_wcB">
                            Facebook
                        </a>
                    </li>
                </ul>
            </div>
        </>
    );
}

function App() {
    return (
        <div className="App">
            <Header />
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h2 style={{ color: "white" }}>
                    React — JavaScript-библиотека с открытым исходным кодом для разработки пользовательских интерфейсов.
                    React разрабатывается и поддерживается Facebook, Instagram и сообществом отдельных разработчиков и
                    корпораций. React может использоваться для разработки одностраничных и мобильных приложений.
                </h2>
            </header>
            <Footer />
        </div>
    );
}

export default App;
