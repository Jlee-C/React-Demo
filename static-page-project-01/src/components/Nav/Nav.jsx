import reactLogo from "../../assets/react.svg"
import "./Nav.css"

function Navbar(){
    return (
        <>
            <header className="header">
                <div className="logo-container">
                    <img src={reactLogo} className="react-logo"/>
                    <span>React</span>
                </div>
                <nav>
                    <ul className="nav-list">
                        <li className="nav-list-item">Pricing</li>
                        <li className="nav-list-item">About</li>
                        <li className="nav-list-item">Contact</li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Navbar