import { Link } from 'react-router-dom';
import { Icon } from './moleculas/Icon';
import { v } from '../../styles/variables';

const CharactersByHero = ({ characters, alter_ego }) => {
  if (characters === alter_ego) return <></>;
  return <p> {characters} </p>;
};

export const HeroCard = ({
  id,
  superhero,
  alter_ego,
  publisher,
  first_appearance,
  characters,
}) => {
  const heroImageUrl = `${id}.webp`;

  return (
    <div className="col-md-3 col-sm-6">
      <div
        className="card text-light animate__animated animate__fadeIn m-1"
        style={{
          background: publisher === 'Marvel Comics' ? v.colorMarvel : v.colorDC,
        }}
      >
        <img src={heroImageUrl} className="card-img-top" alt={superhero} />
        <div className="card-body">
          <h5 className="card-title"> {superhero} </h5>
          <p className="card-text"> {alter_ego} </p>
          <CharactersByHero characters={characters} alter_ego={alter_ego} />
          <p className="card-text">
            <small className="text-muted-ligth"> {first_appearance} </small>
          </p>
          <Link to={`/hero/${id}`}>
            <button className="btn btn-primary">
              <Icon label="Ver mas" icon={<v.moreInfoIcon />} />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
