import './App.css';
import FirstComponent from './components/learning-examples/FirstComponent';
import Counter from './components/counter/Counter';

function App() {
  return (
    <div className="App"> 
      <Counter/>
    </div>
  );
}

function LearningComponents() {
  return(
    <div className="LearningComponents">
      My hello world
      <FirstComponent/>
    </div>
  )
}

export default App;
