import Entry from "@/components/entry/Entry.jsx"
import Header from "@/components/header/Header.jsx"
import "./App.css"

export default function App(){
  return(
    <>
      <Header />
      <main className="container">
        <Entry />
      </main>
    </>
  )
}