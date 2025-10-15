import globe from "@/assets/globe.png"
import "./Header.css"

//Banner for the top of the website, contain the label and globe icon
export default function Header(){
    return(
            <header className="banner">
                <img src={globe} alt="globe icon"/>
                <span>my travel journal.</span>
            </header>
    )
}