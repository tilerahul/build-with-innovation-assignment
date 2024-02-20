import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Component/Home";
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";
import Login from "./Component/Login";
import ProtectedRoute from "./Component/ProtectedRoute";
import Cart from "./Component/Cart";

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route element={<ProtectedRoute/>}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
