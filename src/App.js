import './App.css';
import About from './components/About';
import Home from './components/Home';
function App() {
    const heading ="My first React App"
  return (
      <div className="App">
      <Home heading = {heading}/>
      <About />
           </div>    
 );
}

export default App;
