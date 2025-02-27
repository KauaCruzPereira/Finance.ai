import { MenuPage } from "./components/MenuPage/MenuPage"
import "./styles.css"
export function NavBar() {

    return (
        <div id="navbar">
            <div id="barinterior">
                <div id="logo">
                    <img src="images/Frame 82.svg" alt="FinanceAi logo" />
                </div>
                <MenuPage link='financeai' menuTittle="Dashboard" />
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
                    />Usuário
                </div>
            </div>
        </div>

    )
}