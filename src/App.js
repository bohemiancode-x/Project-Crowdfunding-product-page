import logo from './logo.svg';
import './App.css';
import Navbar from './sections/navbar';
import Sectionone from './sections/sectionone';
import Aboutsection from './sections/about';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Sectionone />
      <Aboutsection />
    </div>
  );
}

export default App;
