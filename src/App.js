import "./App.css";
import { Tags } from "./Tags";

function App() {
  const tags = ["boomdotdev", "task", "tags", "react"]
  return (
    <div className="App">
      <Tags tags={tags} />
      {/* <section class="hero">
        <div class="hero-body">
          <p class="title">A React Task</p>
          <p class="subtitle">by Boom.dev</p>
        </div>
      </section>
      <div class="container is-fullhd">
        <div class="notification">
          Edit the <code>./src</code> folder to add components.
        </div>
      </div> */}
    </div>
  );
}

export default App;
