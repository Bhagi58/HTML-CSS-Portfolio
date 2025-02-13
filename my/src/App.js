
import { BrowserRouter,Routes,Route  } from "react-router-dom";
import Navbar from './Pages/NavbarPage/Navbar'
import Home from './Pages/HomePage/Home'
import About from './Pages/AboutPage/About'
import Experience from './Pages/ExperiencePage/Experience'
import Contact from './Pages/ContactPage/Contact'



function App() {
  return (
    <div>
  <BrowserRouter>
  <Navbar/>
      <Routes>
      <Route index element={<Home/> }/>
      <Route path="/home" element={<Home/> }/>
      <Route path="/about" element={<About/> }/>
      <Route path="/experience" element={<Experience/> }/>
      <Route path="/contact" element={<Contact/> }/>
     </Routes>
  </BrowserRouter>


    </div>
  );
}

export default App;
