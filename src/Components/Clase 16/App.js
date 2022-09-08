import { Routes, Route, Link } from 'react-router-dom'
import About from './Components/Clase 16/About';
import Contact from './Components/Clase 16/Contact';
import Header from './Components/Clase 16/Header';
import Home from './Components/Clase 16/Home';

function App() {

   return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}>
          <Route path='about' element={<About/>}/>
          <Route path='contacto' element={<Contact/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;