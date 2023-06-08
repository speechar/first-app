import logo from './logo.svg';
import './App.css';
import Hello from './Hello/index';
import ExceptionBoundary from './common/ExceptionBoundary/index'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <ExceptionBoundary>
              <Hello name='Swetha'/>
          </ExceptionBoundary>
          
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
