
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.scss';
import Home from './pages/Landing/Home';
import Competitions from './pages/Landing/Competitions'
import Talleres from './pages/Landing/Talleres';
import Tienda from './pages/Landing/Tienda';
import ScrollToTop from "./components/ScrollToTop";
import Login from './pages/Login/Login';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop/>
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
        <Route  
          path="/Login"
          element={
            < Login/>
          }
        />   

      </Routes>
    </BrowserRouter>
  ) 
}

export default App;
