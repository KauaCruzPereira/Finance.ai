import './MenuPage.css'
export function MenuPage(props) {
    return (
        <div className="menupage">
            <a className='navBarItem' href={props.link}>{props.menuTittle}</a>
        </div>
    )
}