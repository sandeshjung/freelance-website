
import './App.css';
import Home from './components/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import { BrowserRouter, Route, Routes, Navigate} from 'react-router-dom';

import Navbar from './components/Navbar/Navbar'
// import Signin from './components/Signin/SigninForm'
import Signup from './components/Signup/Signup';
import Login from './components/Login/Login';





function App() {
  // const user= localStorage.getItem("token")
  return (
    <BrowserRouter>
    <>
      <Routes>
        {/* <Route path="/" exact element={<Home />}/> */}
        
          <Route path="/Home" exact element={<Home />} />
          <Route path="/Signup" exact element={<Signup />} />
          <Route path="/Login" exact element={<Login />} />
          <Route path="/" element={<Navigate replace to="/Home" />} />
        
      </Routes>
      </>
      </BrowserRouter>

    
  );
}

export default App;
