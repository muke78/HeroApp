import { NavLink } from "react-router-dom";
import { dataEstaticaNavbar } from "../../utils/dataNavbar";
import { v } from "../../../styles/variables";
import { Icon } from "../../../heroes";

export const ItemsNavbar = () => {
  return (
    <>
      {dataEstaticaNavbar.map((items) => (
        <NavLink
          className={({ isActive }) =>
            `nav-item nav-link  m-2 p-2  ${isActive ? "active" : ""}`
          }
          to={items.to}
          key={items.label}
          aria-pressed="true"
        >
          <div className="d-flex">
            <Icon label={items.label} icon={items.icono}></Icon>
          </div>
        </NavLink>
      ))}
    </>
  );
};
