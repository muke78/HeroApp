import { Link } from 'react-router-dom';

export const dataColumnsTable = (handleRowClick) => [
  {
    accessorKey: 'name',
    header: 'Company',
    size: 150,
    Cell: ({ cell }) => (
      <Link onClick={() => handleRowClick(cell.getValue())}>
        <button className="btn btn-outline-primary">{cell.getValue()}</button>
      </Link>
    ),
  },
  {
    accessorKey: 'year_founded',
    header: 'Year founded',
    size: 150,
  },
  {
    accessorKey: 'founder',
    header: 'Founder',
    size: 150,
  },
  {
    accessorKey: 'number_of_movies',
    header: 'Number of movies',
    size: 200,
  },
  {
    accessorKey: 'number_of_series',
    header: 'Number of series',
    size: 150,
  },
  {
    accessorKey: 'number_of_heroes',
    header: 'Number of heroes',
    size: 150,
  },
  {
    accessorKey: 'number_of_comics_published',
    header: 'Comics published',
    size: 150,
  },
];

export const dataColumnsTableIntern = () => [
  {
    accessorKey: 'id',
    header: 'ID',
    size: 150,
  },
  {
    accessorKey: 'superhero',
    header: 'Superhero',
    size: 150,
  },
  {
    accessorKey: 'publisher',
    header: 'Publisher',
    size: 150,
  },
  {
    accessorKey: 'first_appearance',
    header: 'First appearance',
    size: 200,
  },
  {
    accessorKey: 'characters',
    header: 'Characters',
    size: 150,
  },
  {
    accessorKey: 'alter_ego',
    header: 'Alter ego',
    size: 150,
  },
];
