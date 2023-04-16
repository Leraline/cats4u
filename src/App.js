import './App.css';
import Button from './components/UI/Button/Button';

function App() {

  const startTime = new Date();
  
  const seconds = startTime.getSeconds();
  const minutes = startTime.getMinutes();
  const hours = startTime.getHours();

  console.log(seconds, minutes, hours);

  return (
    <div className="App">
      <Button>Click me</Button>
    </div>
  );
}

export default App;
