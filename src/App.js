
import './App.css';
import img1 from './img/1.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={img1} alt="Logo" className="App-logo" />
        <p className="App-description">
          เรียนรู้ React และสร้างแอปที่น่าตื่นเต้น!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          เรียนรู้ React
        </a>
      </header>
    </div>
  );
}

export default App;
