import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const useLogout = () => {
  const [ultimoLogin, setUltimoLogin] = useState(new Date().getTime());

  const duracionSesion = 15 * 60 * 1000; // 60 segundos convertido a milisegundos
  const navigate = useNavigate();

  const onLogout = () => {
    navigate("/login", {
      replace: true,
    });
    localStorage.removeItem("heroesData");
    localStorage.removeItem("stateButton");
    localStorage.removeItem("stateSpinner");
    localStorage.removeItem("user");
  };

  const verificarInactividad = () => {
    const tiempoActual = new Date().getTime();
    const tiempoInactivo = tiempoActual - ultimoLogin;

    if (tiempoInactivo >= duracionSesion) {
      onLogout();
    } else {
      setTimeout(verificarInactividad, duracionSesion - tiempoInactivo);
    }
  };

  useEffect(() => {
    const handleMouseMove = () => {
      setUltimoLogin(new Date().getTime());
    };

    document.addEventListener("mousemove", handleMouseMove);

    verificarInactividad();

    return () => {
      document.addEventListener("mousemove", handleMouseMove);
    };
  }, [ultimoLogin]);

  return {
    onLogout,
  };
};
