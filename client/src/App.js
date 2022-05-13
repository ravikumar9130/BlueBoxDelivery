import "./App.css";
import Home from "./screens/Home";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Login from "./screens/SignIn";
import SignUp from "./screens/SignUp"
//import Cart from "./screens/Cart";
import Connect from "./Components/Connect";
import Sucessfully from "./screens/Sucessfully";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/sign-up" element ={<SignUp/>} />
        <Route path="/home" element={<Home />} >
        {/* <Route path="cart" element={<Cart/>} /> */}
        
      </Route>
      <Route path="/connect" element={<Connect/>} />
      <Route path="/sucess" element={<Sucessfully/>} />
      
      </Routes>
    </BrowserRouter>

  );
}

export default App;
