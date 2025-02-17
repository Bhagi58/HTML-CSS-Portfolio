
import { BrowserRouter,Routes,Route  } from "react-router-dom";
import Navbar from './Pages/NavbarPage/Navbar'
import Home from './Pages/HomePage/Home'
import About from './Pages/AboutPage/About'
import Academics from './Pages/AcademicsPage/Academics'
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
      <Route path="/academics" element={<Academics/> }/>
      <Route path="/contact" element={<Contact/> }/>
     </Routes>
  </BrowserRouter>


    </div>
  );
}

export default App;
