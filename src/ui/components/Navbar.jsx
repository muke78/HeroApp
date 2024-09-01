import { Link, NavLink, useNavigate } from "react-router-dom";
import { dataEstaticaNavbar } from "../utils/dataNavbar";

export const Navbar = () => {
  const navigate = useNavigate();

  const onLogout = () => {
    navigate("/login", {
      replace: true,
    });
  };

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
      <Link className="navbar-brand" to="/">
        Asociaciones
      </Link>

      <div className="navbar-collapse">
        <div className="navbar-nav">
          {dataEstaticaNavbar.map((items) => (
            <NavLink
              className={({ isActive }) =>
                `nav-item nav-link ${isActive ? "active" : ""}`
              }
              to={items.to}
              key={items.label}
            >
              {items.label}
            </NavLink>
          ))}
        </div>
      </div>

      <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
        <ul className="navbar-nav ml-auto">
          <span className="nav-item nav-link text-primary">Erick Gonzalez</span>
          <button className="nav-item nav-link btn" onClick={onLogout}>
            Logout
          </button>
        </ul>
      </div>
    </nav>
  );
};
