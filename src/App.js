import { useEffect, useState } from "react";
import "./App.css";
import Document from "./Document";

function App() {
  const [text, setText] = useState("");
  const [complete, setComplete] = useState(false);

  const handleScroll = (e) => {
    const div = e.target;
    console.log(e.target)
    if (div.scrollTop >= div.scrollHeight - div.offsetHeight) {
      setComplete(true);
    }
  }

  useEffect(() => {
    fetch("https://jaspervdj.be/lorem-markdownum/markdown.txt")
      .then((response) => response.text())
      .then((data) => setText(data));
  }, []);

  return (
    <div className="App">
      <section class="hero">
        <div class="hero-body">
          <p class="title">A React Task</p>
          <p class="subtitle">by Boom.dev</p>
        </div>
      </section>
      <div class="container is-fullhd">
        <div class="notification">
          <Document
            title="Terms and Conditions"
            content={text}
            onScroll={handleScroll}
          />
          <button disabled={!complete}>I Agree</button>
        </div>
      </div>
    </div>
  );
}

export default App;
