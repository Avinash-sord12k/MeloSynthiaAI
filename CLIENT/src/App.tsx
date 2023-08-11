import {NavbarDefault} from "./Components/navbar/Test3";
import Footer from "./Components/navbar/Footer";
import Home from "./Home";
import styles from "@/index";
import Signup from "./Components/navbar/signup";
import AboutUs from "./Components/navbar/AboutUs";
import {Future} from "./Components/Future";
import {
  BrowserRouter as Router,
  Routes,
  Route } from "react-router-dom";
import Signin from "./Components/navbar/Signin";
import { GetStarted } from "./Components/GetStarted";



function App() {
 
  return ( <>
    <div>
    <Router>
    <NavbarDefault/>
 
    <Routes>
      < Route path="/" element={<Home/>} />
      < Route path="/Register" element={<Signin/>} />
      < Route path="/Signup" element={<Signup/>} /> 
      < Route path="/AboutUs" element={<AboutUs/>} /> 
      < Route path="/GetStarted" element={<GetStarted/>} />
      < Route path="/Future" element={<Future/>} />
    </Routes>  

    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}> <Footer/> </div>
    </div> 
    </Router>
  </div>
  </>
  )
  
}

export default App;
