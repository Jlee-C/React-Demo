import Navbar from "@/components/navbar/Navbar"
import "./MainPage.css"

export default function MainPage(){
    return(
        <>
            <Navbar />
            <main className="main-container">
                <h1 className="h1">Fun facts about React</h1>
                <ul>
                    <li className="main-list-item">Was first released in 213 BC</li>
                    <li className="main-list-item">Was originally created by Bob Dylan, believe it or not</li>
                    <li className="main-list-item">Has well over 2.8*10^82 stars on github, that's more then atoms in the universe!</li>
                    <li className="main-list-item">Is maintained by Meta, no joke for this one</li>
                </ul>
            </main>
        </>
    )
}