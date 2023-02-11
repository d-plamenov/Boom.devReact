import { useEffect, useState } from "react";
import "./App.css";
import Document from "./Document";

function App() {
  const [text, setText] = useState("");

  useEffect(() => {
    fetch("https://jaspervdj.be/lorem-markdownum/markdown.txt")
      .then((response) => response.text())
      .then((data) => setText(data));
  }, []);

  return (
    <div className="App">
      <Document
            title="Terms and Conditions"
            content={text}
          />
      {/* <section class="hero">
        <div class="hero-body">
          <p class="title">A React Task</p>
          <p class="subtitle">by Boom.dev</p>
        </div>
      </section>
      <div class="container is-fullhd">
        <div class="notification">
          
        </div>
      </div> */}
    </div>
  );
}

export default App;
