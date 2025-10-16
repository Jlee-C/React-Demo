import Entry from "@/components/entry/Entry.jsx"
import Header from "@/components/header/Header.jsx"
import "./App.css"
import entryData from "@/data.js"

export default function App(){

  const entryElements = entryData.map((entry) =>

    <Entry 
    key={entry.id}
    // In lou of manualy assigning every object field, if all entries match what you are assigning you can do so much mor concisely
    props={entry}
    //img={entry.img}
    //country={entry.country}
    //title={entry.title}
    //googleMapsLink={entry.googleMapsLink}
    //dates={entry.dates}
    //text={entry.text}
    />

)

  return(
    <>
      <Header />
      <main className="container">
        {entryElements}
      </main>
    </>
  )
}