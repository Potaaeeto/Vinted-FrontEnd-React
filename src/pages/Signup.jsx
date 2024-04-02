import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const Signup = ({ handleToken }) => {
  // States qui gèrent mes inputs
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newsletter, setNewsletter] = useState(false);

  const navigate = useNavigate();

  // Fonction pour la soumission du formulaire
  const handleSubmit = async (event) => {
    // console.log("Jai cliqué");
    event.preventDefault(); // empeche le rafraichissement de la page
    // On va faire une requete axios, et qui dit requete dit trycatch
    try {
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/user/signup",
        {
          email: email,
          username: username,
          password: password,
          newsletter: newsletter,
        }
      );
      // On va voir quil y a une clef token creee par le serveur pour le user, donc on va aller stocker le token
      console.log(response.data);

      // J'enregistre le token dans mon state et mes cookies. Fonction a laquelle je donne un argument et il va enregistre sous userToken de mon App.jsx
      handleToken(response.data.token);

      // Navigation vers ma page home
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>S'inscrire</h1>
        <input
          type="text"
          name="username"
          id="username"
          placeholder="Nom d'utilisateur"
          value={username}
          onChange={(event) => {
            return setUsername(event.target.value);
          }}
        />
        <br />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          value={email}
          onChange={(event) => {
            return setEmail(event.target.value);
          }}
        />
        <br />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Mot de passe"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <br />
        <input
          type="checkbox"
          value={newsletter}
          onChange={() => {
            setNewsletter(!newsletter);
          }}
        />
        <br />

        <input type="submit" value="S'inscrire" />
      </form>
      <Link to="/login">Tu as déjà un compte ? Connecte-toi !</Link>
    </div>
  );
};

export default Signup;
