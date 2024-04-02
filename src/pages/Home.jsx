import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = ({ bannerVinted }) => {
  // Pour stocker response.data, il faut le mettre dans un state
  const [data, setData] = useState({});
  // On va creer un autre state
  const [isLoading, setIsLoading] = useState(true);

  //utiliser useEffect() pour qu'il y ait un rafraichissement 1 fois
  //faire une requete au back en creant une fonction fetchData() afin d'utiliser le async
  //ne pas oublier d'appeler la fonction après l'avoir défini!!
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://lereacteur-vinted-api.herokuapp.com/offers"
        );
        console.log(response.data);
        // Apres que la reponse soit arrivee, on va stocker dans le State Data : response.data afin de provoquer un re-render. Donc on va faire un setData(response.data)
        setData(response.data);
        // Et seulement après, on fait passer isLoading(false). Donc on est sur que ce ne sera plus undefined
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
    <main>
      {/* <h1>Je suis la page Home</h1> */}
      <img className="bannerVinted" src={bannerVinted} alt="banner-Vinted" />
      <div className="container articleHome">
        {data.offers.map((offer) => {
          return (
            // Lien vers la page offer
            <Link key={offer._id} to={`/offers/${offer._id}`}>
              <article>
                <div className="articleHome-container1">
                  <img
                    src={offer.owner.account.avatar?.secure_url}
                    alt={offer.owner.account.username}
                  />
                  <span>{offer.owner.account.username}</span>
                </div>
                <img
                  src={offer.product_image.secure_url}
                  alt={offer.product_name}
                />
                <div>
                  <p>{offer.product_price} €</p>
                  <p>{offer.product_details[1].TAILLE}</p>
                  <p>{offer.product_details[0].MARQUE}</p>
                </div>
              </article>
            </Link>
          );
        })}
      </div>
    </main>
  );
};

export default Home;
