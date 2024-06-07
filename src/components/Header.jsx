import logoSS from '../assets/logoSS.png';
import '../styles/Header.css';
function Header() {
  return (
    <div>
      <div className="header-container">
        <img className="header-logo" src={logoSS} alt="logo" />
        <input
          className="header-search"
          type="text"
          placeholder="Найти по названию"
        />
        <p>🛒</p>
      </div>
    </div>
  );
}

export default Header;
