import { HeroCard } from "../components/HeroCard";
import { useSearch } from "../hooks/useSearch";

export const SearchPage = () => {
  const {
    heroes,
    onInputChange,
    onSearchSubmit,
    q,
    searchText,
    showError,
    showSearch,
  } = useSearch();

  return (
    <>
      <h1>Buscar un heroe</h1>
      <hr />
      <div className="row">
        <div className="col-12">
          <form className="d-flex" onSubmit={onSearchSubmit}>
            <input
              type="text"
              placeholder="Search a hero"
              className="form-control me-2"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={onInputChange}
            />
            <button className="btn btn-primary">Buscar</button>
          </form>
        </div>
      </div>

      <div className="pt-4 row">
        <div className="col-12">
          <h4>
            Resultado de la busqueda <u> {q} </u>{" "}
          </h4>
          <hr />

          <div
            className="alert alert-primary animate__animated animate__fadeIn"
            style={{ display: showSearch ? "" : "none" }}
          >
            Busca un heroe...
          </div>

          <div
            className="alert alert-danger animate__animated animate__fadeIn"
            style={{ display: showError ? "" : "none" }}
          >
            No se encontro el heroe <b> {q} </b>
          </div>
          <div className="container">
            <div className="row">
              {heroes.map((hero) => (
                <HeroCard key={hero.id} {...hero} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
