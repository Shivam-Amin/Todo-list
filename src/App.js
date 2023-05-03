import './App.css';
import Header from './components/Header';
import AddTask from './components/AddTask';
import { useState } from 'react';

function App() {
  const [task, setTask] = useState("");

  return (
    <div className="App ">
      <div>
        <Header />
        <hr />
        <AddTask task={task} setTask={setTask} />
      </div>
    </div>
  );
}

export default App;
