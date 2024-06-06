import "./App.css";
import words from "./words.png";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div class="container">
      <div className="Title">words</div>
      <div className="App">
        <header className="App-header">
          <img src={words} className="words-logo img-fluid" alt="tittle" />
        </header>
        <main>
          <Dictionary />
        </main>
      </div>
      <footer className="text-center">Coded by Amaia Arbizu</footer>
    </div>
  );
}

export default App;
