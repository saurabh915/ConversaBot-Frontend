import logo from './logo.svg';
import './App.css';
import Register from './Components/Register/Register';
import Login from './Components/Login/Login';
import { BrowserRouter as Router, Routes, Route } from"react-router-dom"; 
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
// import Signuppagetwo from './Components/Signuppagetwo'

function App() {
  return (
    <div className="App">
   {/* <Register/> */}
   <Router>
    
   {/* <Route  path='/' element={<Navbar/>}></Route> */}
<Routes>
<Route  path='/' element={<Register/>}></Route>
{/* <Route exact path='/login' element={<Login/>}></Route> */}

</Routes>
<Routes>

<Route  path='/login' element={  <Login/>}></Route>
</Routes>
 
<Routes>

<Route  path='/Home' element={  <Home/>}></Route>
</Routes>

   </Router>
   {/* <Signuppagetwo/> */}
    </div>
  );
}

export default App;
