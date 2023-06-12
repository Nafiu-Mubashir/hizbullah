import { Route, Routes } from "react-router";
import Footer from "./components/Footer";
// import { Image } from "./components/ImageContainer";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import BlogPage from "./pages/Blog";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path="/blog" element={<BlogPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
