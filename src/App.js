
import './App.css';
import Header from './components/Pages/Header/Header';
import Home from './components/Pages/Home/Home';
import { Route, Routes } from "react-router-dom";
import SignUp from './components/Pages/SignUp/SignUp';
import Login from './components/Pages/Login/Login';
import Footer from './components/Pages/Footer/Footer';




function App() {
  return (
    <div >

      <Header />
      

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login></Login>} />
        <Route path="/signup" element={<SignUp />}/>
      </Routes>

      <Footer />
      
     
    </div>
  );
}

export default App;
