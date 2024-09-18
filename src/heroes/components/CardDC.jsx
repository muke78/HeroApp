import React from 'react';
import { getHeroByCount } from '../helpers/getHeroByCount';
import { Link } from 'react-router-dom';
import { Icon } from './moleculas/Icon';
import { v } from '../../styles/variables';
import { MotionHome } from './MotionHome';

export const CardDC = ({ publisher }) => {
  const dc = getHeroByCount(publisher);

  return (
    <div className="col">
      <div className="card text-bg-dark" style={{ height: '50vh' }}>
        <img
          src="DC.webp"
          className="card-img"
          style={{
            opacity: 0.3,
            objectFit: 'cover',
            width: '100%',
            height: '100%',
            top: 0,
            left: 0,
          }}
          alt={publisher}
        />
        <div className="card-img-overlay d-flex flex-column justify-content-between p-3">
          <div className="d-flex justify-content-between align-items-start mb-3">
            <h5 className="card-title">{publisher}</h5>
            <h6 className="card-title mb-0">
              Número de héroes {''}
              <MotionHome value={dc} color={v.colorMotionOvalCardDC} />
            </h6>
          </div>
          <p className="card-text mb-3 overflow-y-auto">
            DC Comics es una editorial de cómics estadounidense. Forma parte de
            DC Entertainment, una de las empresas que conforman Warner Bros.
            Entertainment, la cual a su vez es propiedad de Warner Bros.
            Discovery. Fue fundada en 1934 bajo el nombre National Allied
            Publications, para luego tomar el nombre de DC Comics en 1937
          </p>
          <Link to="/dc">
            <button className="btn btn-dark">
              <Icon label="Ver más..." icon={<v.moreInfoIcon />} />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
