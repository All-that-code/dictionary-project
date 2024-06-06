import "./App.css";
import words from "./words.png";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="container">
      <div className="Title">words</div>
      <div className="App">
        <header className="App-header">
          <img src={words} className="words-logo img-fluid" alt="tittle" />
        </header>
        <main>
          <Dictionary defaultKeyword="Aurora" />
        </main>
      </div>
      <footer className="text-center">
        {" "}
        Coded with joy by{" "}
        <a
          href="https://zubizu-studio.netlify.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Amaia Arbizu
        </a>
        , open-sourced on{" "}
        <a
          href="https://github.com/All-that-code/dictionary-project"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>{" "}
        and hosted on Netlify.
      </footer>
    </div>
  );
}

export default App;
