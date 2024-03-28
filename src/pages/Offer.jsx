import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Offer = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  //   console.log(useParams());
  //   const params = useParams();
  //   const id = params.id;
  // destructuration
  const { id } = useParams();
  //   console.log(params.id);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://lereacteur-vinted-api.herokuapp.com/offer/${id}`
        );
        console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [id]);

  return isLoading ? (
    <p>En cours de chargement...</p>
  ) : (
    <main>
      <h1>Je suis la page Offer</h1>
      <img src={data.product_image.secure_url} alt="product-image" />
      <p>{data.product_price} €</p>
      <div>
        {/* <p>MARQUE : {data.product_details[0].MARQUE} </p>
        <p>ÉTAT : {data.product_details[1].ÉTAT} </p>
        <p>COULEUR : {data.product_details[2].COULEUR} </p> */}

        {data.product_details.map((detail) => {
          // console.log(detail);
          const keys = Object.keys(detail);
          // console.log(keys);
          const keyName = keys[0];
          console.log(keyName);
          return (
            <p key={keyName}>
              {keyName} {detail[keyName]}
            </p>
          );
        })}
      </div>
    </main>
  );
};

export default Offer;
