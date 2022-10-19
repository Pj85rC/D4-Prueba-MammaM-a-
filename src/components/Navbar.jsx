const Navbar = () => {
  return (
    <>
      <div className="collapse" id="navbarToggleExternalContent"></div>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Pizzería Mamma Mía!
          </a>
          <div className="bg-dark p-4 nav-carrito">
            <h5 className="text-white h6">Detalle de compra</h5>
            <span className="text-muted">$Total: $0</span>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarToggleExternalContent"
            aria-controls="navbarToggleExternalContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
