import './App.css';
import Calc from './Calc/Calc';
import Notes from './note_taking/notes';
import Conv from './currencyConv/Conv.js';
import Chat from './Chat/Chat'

function App() {
  return (
    <div className="App">
      <div className="buffer"> <h1 className='title'>Widgets</h1> </div>
      <div className='buffer'>
          <div className="row">
            <div className='element'><Calc /></div>
            <div className='element'><Notes /></div>
          </div>
          
          <div className="row">
            <div className='element'><Conv /></div>
            <div className='element'><Chat /></div>
          </div>
      </div>
    </div>
  );
}

export default App;
