
import './App.css';
import Home from './components/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import { BrowserRouter, Route, Routes, Navigate} from 'react-router-dom';

import Navbar from './components/Navbar/Navbar'
// import Signin from './components/Signin/SigninForm'
import Signup from './components/Signup/Signup';
import Login from './components/Login/Login';
import UserDashboard from './components/User/UserDashboard';
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import BecomeHirer from './components/BecomeHirer/BecomeHirer'
import Freelancer from './components/Freelancer/Freelancer';
import Profile from './components/Profile/Profile';
import PostJob from './components/PostJob/Postjob'
import JobProfile from './components/Rate/Rate'
import RequestList from './components/Requests/RequestList';

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
        
          <Route path="/About" exact element={<About />} />
          <Route path="/UserDashboard" exact element={<UserDashboard />} />
          <Route path="/Contact" exact element={<Contact />} />
          <Route path="/BecomeHirer" exact element={<BecomeHirer />} />
          <Route path="/Freelancer" exact element={<Freelancer />} />
          <Route path="/Profile" exact element={<Profile />} />
          <Route path="/PostJob" exact element={<PostJob />} />
          <Route path="/JobProfile" exact element={<JobProfile />} />
          <Route path="/RequestList" exact element={<RequestList />} />
          <Route path="/" element={<Navigate replace to="/Home" />} />

     
        
      </Routes>
      </>
      </BrowserRouter>

    
  );
}

export default App;
