import { BrowserRouter, Route, Routes, Redirect } from "react-router-dom";
import './App.css';
import { LoginPage } from './Components/LoginPage';
import { Home } from './Components/Home/index';
import { MyCart } from "./Components/Cart";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/login" Component={LoginPage}/>
      <Route exact path="/" Component={Home}/>
      <Route exact path="/cart" Component={MyCart}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
