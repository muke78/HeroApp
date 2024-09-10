import { MaterialReactTable } from "material-react-table";
import { Loader } from "../Loader";
import { useTable } from "../../hooks/useTable";
import { styled } from "@mui/material";

const StyledTableHeadCell = styled('div')(({ theme }) => ({
  backgroundColor: '#007bff', // Blue background
  color: '#fff', // White text color
  fontWeight: 'bold',
  padding: theme.spacing(1),
}));

export const TablaHeroesMarvel = () => {
  const { columns, data, handleResetData, isLoading, isSpinnerVisible } =
    useTable();

  return (
    <div className="mb-3 mt-3" style={{ position: 'relative' }}>
      <button
        className="btn btn-secondary mb-2"
        onClick={handleResetData}
        hidden={!isLoading}
      >
        Regresar
      </button>
      <MaterialReactTable
        columns={columns}
        data={data}
        initialState={{ density: "compact" }}
        muiTableHeadCellProps={{ component: StyledTableHeadCell }}
      />
      {isSpinnerVisible && (
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'rgba(255, 255, 255, 0.8)', // Optional: slightly opaque background
        }}>
          <Loader />
        </div>
      )}
    </div>
  );
};
