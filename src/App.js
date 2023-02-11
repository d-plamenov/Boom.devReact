import { useEffect, useState } from "react";
import "./App.css";
function App() {
  const [counter,setCounter] = useState(1);
  useEffect(() => {
    document.title = `Count (${counter})`
  },[counter])
  return (
    <div className="App">
      <section className="hero">
        <div className="hero-body">
          <p className="title">Counter({counter})</p>
          <p className="subtitle">by Boom.dev</p>
        </div>
      </section>
      <div className="container is-fullhd">
        <div className="notification">
          <button onClick={() => setCounter(counter + 1)}>text</button>
        </div>
      </div>
    </div>
  );
}
export default App;
