import './App.css';
import Header from './components/header/Header';
import About from './components/main/about/About';
import Comanda from './components/main/comanda/Comanda';
import Slider from './components/main/hero/Slider';
import Worth from './components/main/worth/Worth';

function App() {
  return (
    <div className="App">
      <Header/>
      <main>
        <Slider/>
        <About/>
        <Worth/>
        <Comanda/>
      </main>
    </div>
  );
}

export default App;
