import marker from "@/assets/marker.png"
import "./Entry.css"

export default function Entry({ props }){
    console.log(props)
    return(
        <>
            <article className="journal-entry">
                <div className="main-image-container">
                    {props.img && <img 
                        className="main-image"
                        src={props.img.src} 
                        alt={props.img.alt}
                    />}
                </div>
                <div className="info-container">
                    {props.country && <img 
                        className="marker"
                        src={marker} 
                        alt="map marker icon"
                    />}
                    <span className="country">{props.country}</span>
                    {props.link && <a href={props.googleMapsLink}>View on Google Maps</a>}
                    <h2 className="entry-title">{props.title}</h2>
                    <p className="trip-dates">{props.dates}</p>
                    <p className="entry-text">{props.text}</p>
                </div>
            </article>
        </>
    )
}