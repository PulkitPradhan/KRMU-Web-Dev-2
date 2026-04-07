function Menu() {
  return (
    <nav className="menu">
      <div className="logo-container">
        <span className="logo-text">MEDICHAIN AI</span>
      </div>
      <ul className="nav-links">
        <li><a href="#center">Home</a></li>
        <li><a href="#next-steps">Steps</a></li>
        <li><a href="https://github.com/vitejs/vite" target="_blank" rel="noopener noreferrer">Docs</a></li>
      </ul>
      <div className="menu-actions">
        <button className="login-btn">Log In</button>
      </div>
    </nav>
  );
}

export default Menu;
