import Footer from "../../components/footer/Footer.jsx"
import Navbar from "../../components/nav/Nav.jsx"
import "./Dashboard.css"

function Dashboard(){
    return (
        <>
            <div className="dashboard-container">
                <div className="content-wrap">
                    <Navbar />
                    <main>
                        <h1>This is a header</h1>
                    </main>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default Dashboard