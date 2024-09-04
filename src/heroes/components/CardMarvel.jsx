import React from "react";
import { getHeroByCount } from "../helpers/getHeroByCount";
import { Link } from "react-router-dom";
import { v } from "../../styles/variables";
import { Icon } from "./moleculas/Icon";
import { MotionHome } from "./MotionHome";

export const CardMarvel = ({ publisher }) => {
  const marvel = getHeroByCount(publisher);
  return (
    <div className="col">
      <div className="card text-bg-dark" style={{ height: "50vh" }}>
        <img
          src="MARVEL.webp"
          className="card-img"
          style={{
            opacity: 0.3,
            objectFit: "cover",
            width: "100%",
            height: "100%",
            top: 0,
            left: 0,
          }}
          alt={publisher}
        />
        <div className="card-img-overlay d-flex flex-column justify-content-between p-3">
          <div className="d-flex justify-content-between align-items-start mb-3">
            <h5 className="card-title">{publisher}</h5>
            <h6 className="card-title mb-0">
              Número de héroes{" "}
              <MotionHome value={marvel} color={v.colorMarvel} />
            </h6>
          </div>
          <p className="card-text mb-3 overflow-y-auto">
            El Universo cinematográfico de Marvel es una franquicia de medios y
            un universo compartido, centrada en una serie de películas de
            superhéroes producidas por Marvel Studios. Las películas están
            basadas en personajes que aparecen en los cómics estadounidenses
            publicados por Marvel Comics.
          </p>
          <Link to="/marvel">
            <button className="btn btn-danger">
              <Icon label="Ver más..." icon={<v.moreInfoIcon />} />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
