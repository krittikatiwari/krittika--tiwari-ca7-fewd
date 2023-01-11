import NavBar from './components/NavBar';
import Card from './components/Books';
import Form from './components/Form';
import './App.css';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
       <NavBar/>
      <Routes>
        <Route path='/' element={<Card/>}/>
        <Route path='/form' element={<Form/>}/>
     </Routes>
    </div>
  );
}

export default App;