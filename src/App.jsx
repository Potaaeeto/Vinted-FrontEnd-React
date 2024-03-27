import "./App.css";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

//import des Pages
import Home from "./pages/Home";

function App() {
  return (
    // Router doit contenir tout mon site
    <Router>
      {/* Le composant Routes doit contenir toutes mes routes, il affiche un seul de ses enfants à la fois */}
      <Routes>
        {/* path=chemin element=le composant à afficher si l'url correspond au chemin */}
        <Route path="/" element={<Home />} />
        <Route path="*" element={<p>Error 404</p>} />
      </Routes>
    </Router>
  );
}

export default App;
