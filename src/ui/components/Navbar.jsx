import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { v } from '../../styles/variables';
import { Icon } from '../../heroes';
import { ItemsNavbar } from './moleculas/ItemsNavbar';
import { UserContext } from '../../auth';

export const Navbar = () => {
  const { user, logout } = useContext(UserContext);
  const navigate = useNavigate();

  const onLogout = () => {
    logout();
    navigate('/login', {
      replace: true,
    });
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-secondary">
      <div className="container-fluid">
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
        <span className="navbar-brand">Hero app</span>
        <div className="collapse navbar-collapse" id="navbarText">
          <ItemsNavbar />
          <div className="ms-auto d-flex align-items-center">
            <span className="nav-item nav-link">
              <h6>Hola, {user?.name}</h6>
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
