import { MaterialReactTable } from "material-react-table";
import { Loader } from "../Loader";
import { v } from "../../../styles/variables";
import { useTable } from "../../hooks/useTable";
import { styled } from "@mui/material";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: v.colorTable,
    color: theme.palette.common.white,
    fontSize: 16,
    padding: theme.spacing(2),
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

export const TablaHeroesMarvel = () => {
  const { columns, data, handleResetData, isLoading, isSpinnerVisible } =
    useTable();

  return (
    <div className="mb-3 mt-3" style={{ position: "relative" }}>
      <button
        className="btn btn-secondary mb-2"
        onClick={handleResetData}
        style={{ display: isLoading ? "block" : "none" }}
      >
        Regresar
      </button>
      <MaterialReactTable
        columns={columns}
        data={data}
        initialState={{ density: "compact" }}
        muiTableHeadCellProps={{ component: StyledTableCell }}
        paginationDisplayMode="pages"
      />
      {isSpinnerVisible && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: v.colorTable,
          }}
        >
          <Loader />
        </div>
      )}
    </div>
  );
};
