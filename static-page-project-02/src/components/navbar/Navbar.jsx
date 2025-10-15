import reactLogo from "@/assets/react.svg"
import "./Navbar.css"

export default function Navbar(){
    return(
        <>
            <header className="header">
                <nav>
                    <div className="logo">
                        <img src={reactLogo} alt="React logo"/>
                        <span className="logo-text">ReactFacts</span>
                    </div>    
                </nav>
            </header>
        </>
    )
}