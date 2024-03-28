import axios from "axios";
import Cookies from "js-cookie";
import { useState } from "react";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signup = async () => {
    try {
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/user/signup",
        {
          email: "johndoe@lereacteur.io",
          username: "JohnDoe",
          password: "azerty",
        }
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (event) => {
    console.log("Jai cliqué");
    event.preventDefault;
  };

  return (
    <div>
      <h1>S'inscrire</h1>
      <form onSubmit={handleSubmit}>
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
        <input type="email" name="email" id="email" placeholder="Email" />
        <br />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Mot de passe"
        />
        <br />
        <input type="submit" value="S'inscrire" />
      </form>

      <p>Tu as déjà un compte ? Connecte-toi!</p>
    </div>
  );
};

export default Signup;
