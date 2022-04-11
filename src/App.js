import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Componets/Header/Header';
import Home from './Componets/Home/Home';
import Work from './Componets/Work/Work';

function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route exact path='/' element={<Home></Home>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
