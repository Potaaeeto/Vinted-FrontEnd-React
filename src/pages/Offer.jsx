import { Link } from "react-router-dom";

const Offer = () => {
  return (
    <>
      <h2>Je suis la page Offer</h2>

      {/* Lien vers la page home */}
      <Link to="/">Retour vers la page Home</Link>
    </>
  );
};

export default Offer;
