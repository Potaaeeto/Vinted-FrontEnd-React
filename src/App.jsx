import "./App.css";
import Cookies from "js-cookie";

// Je renomme BrowserRouter en Router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//import des Pages
import Home from "./pages/Home";
import Offer from "./pages/Offer";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

//import des composants
import Header from "./components/Header";

//import images
import vintedLogo from "./assets/imgs/vinted-logo.svg";
import bannerVinted from "./assets/imgs/banner.jpg";
import { useState } from "react";

function App() {
  // State dans lequel je stocke le token. Sa valeur de base sera :
  // - Si je trouve un cookie token, ce cookie
  // - Sinon, null
  const [userToken, setUserToken] = useState(Cookies.get("userToken") || null);

  // Cette fonction permet de stocker le token dans le state et dans les cookies ou supprimer le token dans le state et dans les cookies
  const handleToken = (token) => {
    if (token) {
      Cookies.set("userToken", token, { expires: 15 });
      setUserToken(token);
    } else {
      // Effacer mon token et mon cookie
      Cookies.remove("userToken");
      setUserToken(null);
    }
  };

  return (
    // Router doit contenir tout mon site
    <Router>
      {/* Mon Header apparait sur toutes les pages */}
      <Header
        vintedLogo={vintedLogo}
        userToken={userToken}
        handleToken={handleToken}
      />
      {/* Le composant Routes doit contenir toutes mes routes, il affiche un seul de ses enfants à la fois */}
      <Routes>
        {/* path=chemin element=le composant à afficher si l'url correspond au chemin */}
        <Route path="/" element={<Home bannerVinted={bannerVinted} />} />
        <Route path="/offers/:id" element={<Offer />} />
        <Route path="/signup" element={<Signup handleToken={handleToken} />} />
        <Route path="/login" element={<Login handleToken={handleToken} />} />
        <Route path="*" element={<p>Error 404</p>} />
      </Routes>
    </Router>
  );
}

export default App;
