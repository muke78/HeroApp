import { BoltLoader } from 'react-awesome-loaders';
import { v } from '../../styles/variables';

export const Loader = () => {
  return (
    <div className="d-flex align-items-center justify-content-center">
      <BoltLoader
        className={'loaderbolt'}
        boltColor={v.colorWhite}
        backgroundBlurColor={v.colorBlack}
      />
    </div>
  );
};
