import logo from './logo.svg';
import './App.css';
import Register from './Components/Register/Register';
import Login from './Components/Login/Login';
import { BrowserRouter as Router, Routes, Route } from"react-router-dom"; 
// import Signuppagetwo from './Components/Signuppagetwo'
import ChatBot from './Components/ChatBot/ChatBot'
import theme from './Components/theme';
import { ThemeProvider } from '@mui/styles';
import Navbar from './Components/Navbar/Navbar';
function App() {
  return (
    <ThemeProvider theme ={theme}>
      
    <div className="App">
   {/* <Register/> */}
   <Router>
   <Navbar/>
<Routes>
<Route  path='/register' element={<Register/>}></Route>
{/* <Route exact path='/login' element={<Login/>}></Route> */}

</Routes>
<Routes>

<Route  path='/login' element={  <Login/>}></Route>
</Routes>
<Routes>

<Route  path='/home' element={  <ChatBot/>}></Route>
</Routes>

   </Router>
   {/* <Signuppagetwo/> */}
    </div>
    </ThemeProvider>
  );
}

export default App;
