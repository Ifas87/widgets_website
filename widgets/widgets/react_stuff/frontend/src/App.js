import './App.css';
import Calc from './calc'

function App() {
  return (
    <div className="App">
      <div className="buffer"> <h1 className='title'>Widgets</h1> </div>
      <div className="content">
        <div className="row">
          <div className='elementA'></div>
          <div className='elementA'></div>
        </div>
        
        <div className="row">
          <div className='elementA'></div>
          <div className='elementA'></div>
        </div>
      </div>
    </div>
  );
}

export default App;

/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/