import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Component/Home";
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";
import Login from "./Component/Login";
import ProtectedRoute from "./Component/ProtectedRoute";
import Cart from "./Component/Cart";
import { useAuth } from "./Reducers/Authentication/AuthContext";
import Category from "./Component/Category";
import Contact from "./Component/Contact";
import About from "./Component/About";

function App() {

  const {isAuthenticated} = useAuth().state;

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route element={<ProtectedRoute/>} isAuthenticated={isAuthenticated}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/category" element={<Category />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
