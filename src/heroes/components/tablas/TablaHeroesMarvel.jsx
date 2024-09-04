import { useState } from "react";
import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";
import { companyMarvel, companyDC } from "../../../ui/index";
import { Link } from "react-router-dom";
import { getHeroesByPublisher } from "../../helpers/getHeroesByPublisher";

let data = companyMarvel;
console.log(data);

export const TablaHeroesMarvel = ({ publisher }) => {
  const [data, setData] = useState(companyMarvel);
  const [originalData] = useState(companyMarvel);

  const [columns, setColumns] = useState([
    {
      accessorKey: "name",
      header: "Company",
      size: 150,
      Cell: ({ cell }) => (
        <Link onClick={() => handleRowClick(cell.getValue())}>
          <button className="btn btn-outline-primary">{cell.getValue()}</button>
        </Link>
      ),
    },
    {
      accessorKey: "year_founded",
      header: "Year founded",
      size: 150,
    },
    {
      accessorKey: "founder",
      header: "Founder",
      size: 150,
    },
    {
      accessorKey: "number_of_movies",
      header: "Number of movies",
      size: 200,
    },
    {
      accessorKey: "number_of_series",
      header: "Number of series",
      size: 150,
    },
    {
      accessorKey: "number_of_heroes",
      header: "Number of heroes",
      size: 150,
    },
    {
      accessorKey: "number_of_comics_published",
      header: "Number of comics published",
      size: 150,
    },
  ]);

  const [isLoading, setIsLoading] = useState(false);

  const handleRowClick = (companyName) => {
    if (companyName === publisher) {
      const heroes = getHeroesByPublisher(publisher);

      setData(heroes);

      setColumns([
        {
          accessorKey: "id",
          header: "ID",
          size: 150,
        },
        {
          accessorKey: "superhero",
          header: "Superhero",
          size: 150,
        },
        {
          accessorKey: "publisher",
          header: "Publisher",
          size: 150,
        },
        {
          accessorKey: "first_appearance",
          header: "First appearance",
          size: 200,
        },
        {
          accessorKey: "characters",
          header: "Characters",
          size: 150,
        },
        {
          accessorKey: "alter_ego",
          header: "Alter ego",
          size: 150,
        },
      ]);
      setIsLoading(true);
    }
  };

  // Función para restaurar los datos originales
  const handleResetData = () => {
    setData(originalData);
    setColumns([
      {
        accessorKey: "name",
        header: "Company",
        size: 150,
        Cell: ({ cell }) => (
          <Link onClick={() => handleRowClick(cell.getValue())}>
            <button className="btn btn-outline-primary">
              {cell.getValue()}
            </button>
          </Link>
        ),
      },
      {
        accessorKey: "year_founded",
        header: "Year founded",
        size: 150,
      },
      {
        accessorKey: "founder",
        header: "Founder",
        size: 150,
      },
      {
        accessorKey: "number_of_movies",
        header: "Number of movies",
        size: 200,
      },
      {
        accessorKey: "number_of_series",
        header: "Number of series",
        size: 150,
      },
      {
        accessorKey: "number_of_heroes",
        header: "Number of heroes",
        size: 150,
      },
      {
        accessorKey: "number_of_comics_published",
        header: "Number of comics published",
        size: 150,
      },
    ]);
    setIsLoading(false);
  };

  return (
    <div className="mb-3">
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
      />
    </div>
  );
};
