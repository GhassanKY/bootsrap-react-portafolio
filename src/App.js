import './App.css';
import { Aboutme } from './components/Aboutme';
import { LetsTalk } from './components/LetsTalk';
import { Navbar } from './components/Navbar';
import { Portfolio } from './components/Portfolio';
import { TextUnderNav } from './components/TextUnderNav';


function App() {
  return (
    <div className="App">

      <Navbar/>
      <TextUnderNav/>
      <Aboutme/>
      <Portfolio/>
      <LetsTalk/>

    </div>
  );
}

export default App;
