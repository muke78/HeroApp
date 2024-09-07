import { MaterialReactTable } from "material-react-table";
import { Loader } from "../Loader";
import { useTable } from "../../hooks/useTable";

export const TablaHeroesMarvel = () => {
  const { columns, data, handleResetData, isLoading, isSpinnerVisible } =
    useTable();

  return (
    <div className="mb-3 mt-3">
      <button
        className="btn btn-secondary mb-2"
        onClick={handleResetData}
        hidden={!isLoading}
      >
        Regresar
      </button>
      {isSpinnerVisible ? (
        <Loader />
      ) : (
        <MaterialReactTable
          columns={columns}
          data={data}
          initialState={{ density: "compact" }}
        />
      )}
    </div>
  );
};
