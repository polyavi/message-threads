import './App.scss';
import { useEffect, useState } from 'react';
import Thread from './components/Thread';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/threads')
    .then(response => response.json())
    .then(json => {

      setData(json);
    });
  }, [])
  
  return (
    <div className="App">
      {
        data.map((messages, index) => <Thread messages={messages} key={index}/>)
      }
    </div>
  );
}

export default App;
