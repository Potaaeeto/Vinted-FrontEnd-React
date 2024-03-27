const Header = ({ vintedLogo }) => {
  return (
    <>
      <header>
        <div className="container">
          <img src={vintedLogo} alt="vinted-logo" />
          <div className="header-buttons">
            <button>S'inscrire</button>
            <button>Se connecter</button>
            <button>Vends tes articles</button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
