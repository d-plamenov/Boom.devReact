import "./App.css";
import {useState, useEffect} from "react"

function App() {
  const [text, setText] = useState("");
  const handleChange = (event) => {
    setText((event.target).value);
  }
  const handleClear = () => {
    setText("")
    localStorage.clear();
  }
  const handleSave = () => {
    localStorage.setItem("noteText", text)
    // console.log(localStorage.getItem("noteText"))
  }

  useEffect(() => {
    if (localStorage.getItem("noteText")) {
      setText(localStorage.getItem("noteText"))
    }
    
  }, [])

  return (
    <div className="App">
      <div className="box">
        <div className="field">
          <div className="control">
            <textarea
              className="textarea is-large"
              placeholder="Notes..."
              onChange={handleChange}
              value={text}
            />
          </div>
        </div>
        <button className="button is-large is-primary is-active" onClick={handleSave}>Save</button>
        <button className="button is-large" onClick={handleClear}>Clear</button>
      </div>
    </div>
  );
}

export default App;
