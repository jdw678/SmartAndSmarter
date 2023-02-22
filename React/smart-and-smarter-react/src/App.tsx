
import './App.css';
import WeaponTable from './Components/WeaponTable';
import Temptop from './Components/Temptop';

function App() {
 
  return (
    <div className="App">
      <header className="App-header" style={{display: 'flex', flexDirection: 'column'}}>
        <Temptop/>
        <WeaponTable />
      </header>
    </div>
  );
  
}

export default App;
