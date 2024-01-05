import { BrowserRouter, Route, Routes, Redirect } from "react-router-dom";
import './App.css';
import { LoginPage } from './Components/LoginPage';
import { Home } from './Components/Home/index';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/login" Component={LoginPage}/>
      <Route exact path="/" Component={Home}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
