import { useMemo } from "react";
import { Navigate, useParams, useNavigate } from "react-router-dom";
import { getHeroById } from "../helpers/getHeroById";
import { Icon } from "../components/moleculas/Icon";
import { v } from "../../styles/variables";

export const HeroPage = () => {
  const { id } = useParams();

  const hero = useMemo(() => getHeroById(id), [id]);

  const image = `../../../public/${id}.webp`;

  if (!hero) {
    return <Navigate to="/" />;
  }

  const navigate = useNavigate();

  const onNavigateBack = () => {
    navigate(-1);
  };

  return (
    <div className="card mb-3 mt-4 animate__animated animate__fadeIn">
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={image}
            alt={hero.superhero}
            className="img-thumbnail animate__animated animate__fadeInLeft"
          />
        </div>

        <div className="col-md-8">
          <div className="card-body">
            <h3 className="card-title">{hero.superhero}</h3>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <b>
                  <Icon label="Alter ego:" icon={<v.alterEgoIcon />} />
                </b>
                {hero.alter_ego}
              </li>
              <li className="list-group-item">
                <b>
                  <Icon label="Publisher:" icon={<v.publisherIcon />} />
                </b>
                {hero.publisher}
              </li>
              <li className="list-group-item">
                <b>
                  <Icon
                    label="First appearance:"
                    icon={<v.firstApperanceIcon />}
                  />
                </b>
                {hero.first_appearance}
              </li>
            </ul>

            <h5 className="mt-3">Characters</h5>
            <p> {hero.characters} </p>
            <button
              o
              className="btn btn-outline-primary"
              onClick={onNavigateBack}
            >
              <Icon label="Regresar" icon={<v.toBackIcon />}></Icon>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
