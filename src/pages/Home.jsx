import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h2>Je suis la page Home</h2>

      {/* Lien vers la page offer */}
      <Link to="/offers/:id">Allons vers la page Offer</Link>
    </>
  );
};

export default Home;
