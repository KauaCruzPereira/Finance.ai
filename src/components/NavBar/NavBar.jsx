import { useContext } from "react"
import { MenuPage } from "./components/MenuPage/MenuPage"
import "./styles.css"
import AuthContext from "../../contexts/authContext"
export function NavBar() {
    const authContext = useContext(AuthContext)
    return (
        <div id="navbar">
            <div id="barinterior">
                <div id="logo">
                    <img src="images/Frame 82.svg" alt="FinanceAi logo" />
                </div>
                <MenuPage link='' menuTittle="Dashboard" />
                <MenuPage link='transactions' menuTittle="Transações" />
                <MenuPage link='subscription' menuTittle="Assinatura" />
            </div>
            <div id="user">
                <div id="userinterior">
                    <img
                        src="images/userpfp.txt"
                        alt="pfp"
                        style={{
                            width: '20px',
                            height: '20px',
                            flexShrink: 0
                        }}
                    />{authContext.user.name}
                </div>
            </div>
        </div>

    )
}