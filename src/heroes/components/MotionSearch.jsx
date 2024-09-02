import MotionNumber from "motion-number";

export const MotionSearch = ({ value, color, showError }) => {
  
  const backgroundColor = showError ? "#f8d7da" : value > 0 ? color : color;

  return (
    <h4>
      Se encontraron{" "}
      <MotionNumber
        value={value}
        format={{ notation: 'standard' }}
        locales="es-Es"
        animate={{
          backgroundColor: backgroundColor,
        }}
        style={{ borderRadius: 999, padding: "0px 15px", color: "#000" }}
      />{" "}
      elementos{" "}
    </h4>
  );
};
