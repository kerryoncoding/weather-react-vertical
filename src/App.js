import './App.css';
import Weather from "./Weather";


function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="new york"/>
      </div>
      <footer>
        <a
          href="https://github.com/kerryoncoding/weather-react-vertical"
          target="_blank" rel='noreferrer noopener'
          >open-source code</a> by kerryoncoding
      </footer>
    </div>
  );
}

export default App;
