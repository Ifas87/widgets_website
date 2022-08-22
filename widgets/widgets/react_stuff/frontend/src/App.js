import './App.css';
import Calc from './Calc/Calc'

function App() {
  return (
    <div className="App">
      <div className="buffer"> <h1 className='title'>Widgets</h1> </div>
      <div className="content">
        <div className="row">
          <div className='elementA'><Calc /></div>
          <div className='elementB'></div>
        </div>
        
        <div className="row">
          <div className='elementC'></div>
          <div className='elementD'></div>
        </div>
      </div>
    </div>
  );
}

export default App;
