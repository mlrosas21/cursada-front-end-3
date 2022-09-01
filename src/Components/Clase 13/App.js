import {useState} from 'react'
import './App.css';
import Shop from './Components/Clase 13/Shop';
import Header from './Components/Clase 13/Header';

function App() {

  const [total, setTotal] = useState({
    precio: 0, 
    stock: 0
  })

  return (
    <div className="App">
      <Header total={total}/>
      <Shop total={total} setTotal={setTotal} />
    </div>
  );
}

export default App;
