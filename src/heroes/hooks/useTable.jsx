import { useEffect, useState } from "react";
import { getHeroesByPublisher } from "../helpers/getHeroesByPublisher";
import { companiesData } from "../../ui";
import { dataColumnsTable, dataColumnsTableIntern } from "../../ui/index";

export const useTable = () => {
  const [data, setData] = useState(companiesData);
  const [originalData] = useState(companiesData);
  const [isLoading, setIsLoading] = useState(false);
  const [isSpinnerVisible, setIsSpinnerVisible] = useState(false);

  useEffect(() => {
    const savedData = localStorage.getItem("heroesData");
    const stateLoading = localStorage.getItem("stateButton");
    if (savedData) {
      setData(JSON.parse(savedData));
      setColumns(dataColumnsTableIntern);
    }
    if (stateLoading) {
      setIsLoading(JSON.parse(stateLoading));
    }
  }, []);

  const handleRowClick = (companyName) => {
    setIsSpinnerVisible(true);
    setTimeout(() => {
      const heroes = getHeroesByPublisher(companyName);
      localStorage.setItem("heroesData", JSON.stringify(heroes));
      localStorage.setItem("stateButton", JSON.stringify(isLoading));
      setData(heroes);

      setColumns(dataColumnsTableIntern);
      setIsLoading(true);
      setIsSpinnerVisible(false);
    }, 1500);
  };

  const [columns, setColumns] = useState(() =>
    dataColumnsTable(handleRowClick)
  );

  // Función para restaurar los datos originales
  const handleResetData = () => {
    setData(originalData);
    setColumns(() => dataColumnsTable(handleRowClick));
    setIsLoading(false);
    localStorage.removeItem("heroesData");
  };

  return {
    handleResetData,
    isLoading,
    isSpinnerVisible,
    columns,
    data,
  };
};
