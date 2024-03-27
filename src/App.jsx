import "./App.css";

// Je renomme BrowserRouter en Router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//import des Pages
import Home from "./pages/Home";
import Offer from "./pages/Offer";

//import des composants
import Header from "./components/Header";

import vintedLogo from "./assets/imgs/vinted-logo.svg";

function App() {
  return (
    // Router doit contenir tout mon site
    <Router>
      {/* Mon Header apparait sur toutes les pages */}
      <Header vintedLogo={vintedLogo} />
      {/* Le composant Routes doit contenir toutes mes routes, il affiche un seul de ses enfants à la fois */}
      <Routes>
        {/* path=chemin element=le composant à afficher si l'url correspond au chemin */}
        <Route path="/" element={<Home />} />
        <Route path="/offers/:id" element={<Offer />} />
        <Route path="*" element={<p>Error 404</p>} />
      </Routes>
    </Router>
  );
}

export default App;
