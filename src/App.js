
import './App.css';
import Header from './components/Pages/Header/Header';
import Home from './components/Pages/Home/Home';
import { Route, Routes } from "react-router-dom";
import SignUp from './components/Pages/SignUp/SignUp';
import Login from './components/Pages/Login/Login';
import Footer from './components/Pages/Footer/Footer';
import ForgotPass from './components/Pages/ForgotPass/ForgotPass';
import BookDetails from './components/Pages/BookDetails/BookDetails';
import Blogs from './components/Pages/Blogs/Blogs';
import NotFound from './components/Pages/NotFound/NotFound';




function App() {
  return (
    <div >

      <Header />
      
      

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login></Login>} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgotpass" element={<ForgotPass />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/books/:bookId" element={<BookDetails />} />
        <Route path="*" element={<NotFound></NotFound>} />
      </Routes>

      <Footer />
      
     
    </div>
  );
}

export default App;
