import { useNavigate } from "react-router-dom";

const Header = ({ vintedLogo }) => {
  const navigate = useNavigate();

  return (
    <>
      <header>
        <div className="container">
          <img src={vintedLogo} alt="vinted-logo" />
          <div className="header-buttons">
            <button
              onClick={() => {
                return navigate("/signup");
              }}
            >
              S'inscrire
            </button>
            <button>Se connecter</button>
            <button>Vends tes articles</button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
