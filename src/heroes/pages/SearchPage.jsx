import { HeroCard } from "../components/HeroCard";
import { MotionHome } from "../components/MotionHome";
import { MotionSearch } from "../components/MotionSearch";
import { useSearch } from "../hooks/useSearch";
import { v } from "../../styles/variables";

export const SearchPage = () => {
  const {
    heroes,
    heroesCount,
    heroesPublisherCountsDC,
    heroesPublisherMarvel,
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
          <MotionSearch
            value={heroesCount}
            color={v.colorSearchHero}
            showError={showError}
          />
          <div className="d-flex">
            <div className="pe-5">
              <span>Heroes de marvel encontrados </span>
              <MotionHome value={heroesPublisherMarvel} color={v.colorMarvel} />
            </div>
            <div>
              <span>Heroes de DC encontrados </span>
              <MotionHome value={heroesPublisherCountsDC} color={v.colorDC} />
            </div>
          </div>

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
