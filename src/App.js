import './App.css';
import Header from './components/header/Header';
import About from './components/main/about/About';
import Slider from './components/main/hero/Slider';

function App() {
  return (
    <div className="App">
      <Header/>
      <maine>
        <Slider/>
        <About/>
      </maine>
    </div>
  );
}

export default App;
