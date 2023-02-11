import "./App.css";
import {useState, useMemo} from "react"

function App() {
  const re = /^\d+$/;
  const [text, setText] = useState("");

  const handleChange = (event) => {
    setText((event.target).value);
  }

  const validateMemo = useMemo(() => text.match(re), [text])

  return (
    <div className="App">
     <div className="control has-icons-right">
        <input
          className="input is-large"
          type="text"
          placeholder="Enter number..."
          value={text}
          onChange={handleChange}
        />
        <span className="icon is-small is-right">
          {/* Either adds fa-check or fa-times to "fas " example: "fas fa-check" */}
          <i className={"fas " + (validateMemo ? 'fa-check' : 'fa-times') } />
        </span> 
      </div>
    </div>
  );
}

export default App;
