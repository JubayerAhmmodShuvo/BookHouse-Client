
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
import ManageItems from './components/Pages/ManageItems/ManageItems';
import MyItems from './components/Pages/MyItems/MyItems';
import AddItems from './components/Pages/AddItems/AddItems';
import RequireAuth from './components/Pages/RequireAuth/RequireAuth';
import Contact from './components/Pages/Contact/Contact';




function App() {
  return (
    <div>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login></Login>} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgotpass" element={<ForgotPass />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/books/:bookId"
          element={
            <RequireAuth>
              <BookDetails />
            </RequireAuth>
          }
        />
        <Route
          path="/manageitems"
          element={
            <RequireAuth>
              <ManageItems />
            </RequireAuth>
          }
        />
        <Route
          path="/additems"
          element={
            <RequireAuth>
              <AddItems />
            </RequireAuth>
          }
        />
        <Route
          path="/myitems"
          element={
            <RequireAuth>
              <MyItems />
            </RequireAuth>
          }
        />
        <Route path="*" element={<NotFound></NotFound>} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
