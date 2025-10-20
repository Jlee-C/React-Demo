import { useState, useEffect } from "react";

export default function App() {
  const [meme, setMeme] = useState({
    topText: "One does not simply",
    bottomText: "Walk into Mordor",
    imageSrc: "http://i.imgflip.com/1bij.jpg",
  });
  const [allMemes, setAllMemes] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((resp) => resp.json())
      .then((resp) => setAllMemes(resp.data.memes));
    console.log(allMemes);
  }, []);

  function handleChange(event) {
    const value = event.target.value;
    const name = event.target.name;

    setMeme((prevMeme) => ({ ...prevMeme, [name]: value }));
  }

  function flipMeme() {
    if (count >= 100) {
      setCount(0);
    } else {
      setCount((prevCount) => prevCount + 1);
    }
    setMeme((prevMeme) => ({ ...prevMeme, imageSrc: allMemes[count].url }));
    console.log(count);
  }

  return (
    <main>
      <div className="form">
        <label>
          Top Text
          <input
            type="text"
            placeholder="One does not simply"
            name="topText"
            onChange={handleChange}
          />
        </label>

        <label>
          Bottom Text
          <input
            type="text"
            placeholder="Walk into Mordor"
            name="bottomText"
            onChange={handleChange}
          />
        </label>
        <button onClick={flipMeme} name="imageSrc">
          Get a new meme image 🖼
        </button>
      </div>
      <div className="meme">
        <img src={meme.imageSrc} />
        <span className="top">{meme.topText}</span>
        <span className="bottom">{meme.bottomText}</span>
      </div>
    </main>
  );
}
