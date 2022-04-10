
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.scss';
import Home from './pages/Landing/Home';
import Competitions from './pages/Landing/Competitions'
import Talleres from './pages/Landing/Talleres';
import Tienda from './pages/Landing/Tienda';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route  
          path="/"
          element={
            < Home />
          }
        />
        <Route  
          path="/Competiciones"
          element={
            < Competitions/>
          }
        />
        <Route  
          path="/Talleres"
          element={
            < Talleres/>
          }
        />  
        <Route  
          path="/Tienda"
          element={
            < Tienda/>
          }
        />  

      </Routes>
    </BrowserRouter>
  ) 
}

export default App;
