import MotionNumber from 'motion-number';
import { v } from '../../styles/variables';

export const MotionSearch = ({ value, color, showError }) => {
  const backgroundColor = showError
    ? v.colorNotFound
    : value > 0
    ? color
    : color;

  return (
    <h4>
      Se encontraron{' '}
      <MotionNumber
        value={value}
        format={{ notation: 'standard' }}
        locales="es-Es"
        animate={{
          backgroundColor: backgroundColor,
        }}
        style={{ borderRadius: 999, padding: '0px 15px', color: v.colorBlack }}
      />{' '}
      elementos{' '}
    </h4>
  );
};
