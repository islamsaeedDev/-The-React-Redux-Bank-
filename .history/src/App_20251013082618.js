import logo from './logo.svg';
import './App.css';

function App() {


  const increment = createAction(INCREMENT, (numberToIncrement = 1) => ({
    payload: {
      incrementBy: numberToIncrement,
    },
  }));

  return (
    <div className="App">

    </div>
  );
}

export default App;
