import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from "./component/home";
import { Login } from "./component/login";
import { Logout } from './component/logout';
import { Navigation } from './component/navigation';
import Footer from './component/footer';
import Signup, { Singup } from './component/signup';


import "bootstrap/dist/css/bootstrap.min.css";
// import { Container } from 'react-bootstrap';

function App() {

  return (
    <BrowserRouter>
      <Navigation></Navigation>
      <div className='album py-5 bg-light'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/register" element={<Signup />} />
        </Routes>
      </div>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
