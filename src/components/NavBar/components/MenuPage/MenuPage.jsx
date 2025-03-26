import { Link } from 'react-router-dom'
import './MenuPage.css'
export function MenuPage(props) {
    return (
        <div className="menupage">
            <Link className='navBarItem' to={props.link}>{props.menuTittle}</Link>
        </div>
    )
}