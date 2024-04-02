import { useNavigate } from "react-router-dom";

const Header = ({ vintedLogo, handleToken, userToken }) => {
  const navigate = useNavigate();

  return (
    <>
      <header>
        <div className="container">
          <img
            src={vintedLogo}
            alt="vinted-logo"
            onClick={() => navigate("/")}
          />
          {/* Si token existe, c'est que je suis connecté, j'affiche le bouton déconnexion, sinon j'affiche les 2 autres boutons */}
          <div className="header-buttons">
            {userToken ? (
              <button
                onClick={() => {
                  // Je me déconnecte en appelant la fonction handleToken et en lui donnant null en argument

                  handleToken(null);
                }}
              >
                Déconnexion
              </button>
            ) : (
              <>
                <button
                  onClick={() => {
                    return navigate("/signup");
                  }}
                >
                  S'inscrire
                </button>
                <button
                  onClick={() => {
                    return navigate("/login");
                  }}
                >
                  Se connecter
                </button>
              </>
            )}

            <button>Vends tes articles</button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
