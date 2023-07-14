import './App.css';
import Expirences from './components/Experiences/Expriences';
import Header from './components/Header';
import Homepage from './components/HomePage/Homepage';

function App() {
  return (
    <div className="App">
      <Header/>
      <Homepage/>
      <Expirences/>
    </div>
  );
}

export default App;
