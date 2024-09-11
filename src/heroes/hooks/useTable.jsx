import { useEffect, useLayoutEffect, useState } from "react";
import { getHeroesByPublisher } from "../helpers/getHeroesByPublisher";
import { companiesData } from "../../ui";
import { dataColumnsTable, dataColumnsTableIntern } from "../../ui/index";

export const useTable = () => {
  const [data, setData] = useState(companiesData);
  const [originalData] = useState(companiesData);
  const [isLoading, setIsLoading] = useState(() => {
    // Inicializa el estado desde localStorage si existe
    const savedLoadingState = localStorage.getItem("stateButton");
    return savedLoadingState ? JSON.parse(savedLoadingState) : false;
  });
  const [isSpinnerVisible, setIsSpinnerVisible] = useState(false);

  useEffect(() => {
    const savedData = localStorage.getItem("heroesData");
    const stateLoading = localStorage.getItem("stateButton");
    const stateSpinner = localStorage.getItem("stateSpinner");

    if (savedData) {
      setData(JSON.parse(savedData));
      setColumns(dataColumnsTableIntern);
    }
    if (stateLoading !== null) {
      setIsLoading(JSON.parse(stateLoading));
    }
    if (stateSpinner !== null) {
      setIsSpinnerVisible(JSON.parse(stateSpinner));
    }
  }, []);

  const handleRowClick = (companyName) => {
    setIsSpinnerVisible(true);
    setTimeout(() => {
      const heroes = getHeroesByPublisher(companyName);
      localStorage.setItem("heroesData", JSON.stringify(heroes));
      localStorage.setItem("stateButton", JSON.stringify(true));
      localStorage.setItem("stateSpinner", JSON.stringify(false));
      setData(heroes);

      setColumns(dataColumnsTableIntern);
      setIsLoading(true);
      setIsSpinnerVisible(false);
    }, 1700);
  };

  const [columns, setColumns] = useState(() =>
    dataColumnsTable(handleRowClick)
  );

  // Función para restaurar los datos originales
  const handleResetData = () => {
    setData(originalData);
    setColumns(() => dataColumnsTable(handleRowClick));
    setIsLoading(false);
    setIsSpinnerVisible(false);
    localStorage.removeItem("heroesData");
    localStorage.removeItem("stateButton");
    localStorage.removeItem("stateSpinner");
  };

  useEffect(() => {
    localStorage.setItem("stateButton", JSON.stringify(isLoading));
    localStorage.setItem("stateSpinner", JSON.stringify(isSpinnerVisible));
  }, [isLoading, isSpinnerVisible]);

  return {
    handleResetData,
    isLoading,
    isSpinnerVisible,
    columns,
    data,
  };
};
