import { Link, useNavigate } from "react-router-dom";
import { v } from "../../styles/variables";
import { Icon } from "../../heroes";
import { ItemsNavbar } from "./moleculas/ItemsNavbar";

export const Navbar = () => {
  const navigate = useNavigate();

  const onLogout = () => {
    navigate("/login", {
      replace: true,
    });
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-secondary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Asociaciones
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ItemsNavbar />
          <div className="ms-auto d-flex align-items-center">
            <span className="nav-item nav-link">
              <b>Erick</b>
            </span>
            <button
              type="button"
              onClick={onLogout}
              className="btn btn-outline-primary ms-3"
            >
              <Icon label="Salir" icon={<v.logOutIcon />} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
