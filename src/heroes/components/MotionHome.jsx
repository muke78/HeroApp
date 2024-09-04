import MotionNumber from "motion-number";
import { v } from "../../styles/variables";

export const MotionHome = ({ value, color }) => {
  return (
    <MotionNumber
      value={value}
      format={{ notation: "standard" }}
      locales="es-ES"
      animate={{
        duration: 1500, // Ajusta la duración de la animación en milisegundos
        easing: "ease-out", // Ajusta la curva de la
      }}
      style={{
        backgroundColor: color,
        borderRadius: 999,
        padding: "0px 15px",
        color: v.colorWhite,
        fontSize: "1rem", // Ajusta el tamaño de fuente si es necesario
      }}
    />
  );
};
