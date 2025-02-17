
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import { FooterComponent } from './components/FooterComponent'
import MainComponet from './components/MainComponet'
import HomePageComponent from './components/HomePageComponent'
import AboutusComponent from './components/AboutusComponent'
import ServiceComponent from "./components/ServiceComponet";
import ServiceDetail from "./components/ServiceDetail";
import ShopComponent from "./components/ShopComponent";
import ContactComponent from "./components/ContectComponent";
// import { NavbarComponent } from "./components/NavbarComponent";

function App() {

  return (
    <>
      {/* <NavbarComponent/> */}
      
    <Router>
      <MainComponet/>
      <Routes>
      <Route path="/" element={<HomePageComponent/>} />
        <Route path="/home" element={<HomePageComponent/>} />
        <Route path="/about" element={<AboutusComponent/>} />
        <Route path="/service" element={<ServiceComponent/>} />
        <Route path="/service/:id" element={<ServiceDetail />} />
        <Route path="/shop" element={<ShopComponent />} />
        <Route path="/contect" element={<ContactComponent />} />
       

      </Routes>
    </Router>
      <FooterComponent/>
    </>
  )
}

export default App
