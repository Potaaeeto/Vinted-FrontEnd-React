import axios from "axios";
import { useEffect, useState } from "react";

const Signup = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          "https://lereacteur-vinted-api.herokuapp.com/user/signup",
          {
            email: "johndoe@lereacteur.io",
            username: "JohnDoe",
            password: "azerty",
          }
        );
        console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return isLoading ? (
    <p>En cours de chargement...</p>
  ) : (
    <div>
      <h1>S'inscrire</h1>
      <form>
        <input
          type="text"
          name="username"
          id="username"
          placeholder="Nom d'utilisateur"
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
