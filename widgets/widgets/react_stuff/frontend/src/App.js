import './App.css';
import Calc from './Calc/Calc';
import Notes from './note_taking/notes';
import Conv from './currencyConv/Conv.js';
import Chat from './Chat/Chat'

function App() {
  return (
    <div className="App">
      <div className="buffer"> <h1 className='title'>Widgets</h1> </div>
      <div className="content">
        <div className="row">
          <div className='elementA'><Calc /></div>
          <div className='elementB'><Notes /></div>
        </div>
        
        <div className="row">
          <div className='elementC'><Conv /></div>
          <div className='elementD'><Chat /></div>
        </div>
      </div>
    </div>
  );
}

export default App;
