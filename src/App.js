import logo from './logo.svg';
import './App.css';
import './index.css';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button className="bg-blue-700 text-white rounded">
        Clique aqui
      </button>
      </header>
    </div>
  );
}

export default App;
