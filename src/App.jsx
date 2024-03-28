import "./App.css";
import Cookies from "js-cookie";

// Je renomme BrowserRouter en Router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//import des Pages
import Home from "./pages/Home";
import Offer from "./pages/Offer";
import Signup from "./pages/Signup";

//import des composants
import Header from "./components/Header";

//import images
import vintedLogo from "./assets/imgs/vinted-logo.svg";
import bannerVinted from "./assets/imgs/banner.jpg";

function App() {
  return (
    // Router doit contenir tout mon site
    <Router>
      {/* Mon Header apparait sur toutes les pages */}
      <Header vintedLogo={vintedLogo} />
      {/* Le composant Routes doit contenir toutes mes routes, il affiche un seul de ses enfants à la fois */}
      <Routes>
        {/* path=chemin element=le composant à afficher si l'url correspond au chemin */}
        <Route path="/" element={<Home bannerVinted={bannerVinted} />} />
        <Route path="/offers/:id" element={<Offer />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<p>Error 404</p>} />
      </Routes>
    </Router>
  );
}

export default App;
