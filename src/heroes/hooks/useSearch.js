import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import queryString from "query-string";
import { useForm } from "../../hooks/useForm";
import { getHeroesByName } from "../helpers/getHeroesByName";

export const useSearch = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { q = "" } = queryString.parse(location.search);
  const { searchText, onInputChange } = useForm({
    searchText: q,
  });
  const heroes = getHeroesByName(q);

  const showSearch = q.length === 0;
  const showError = q.length > 0 && heroes.length === 0;

  const onSearchSubmit = (event) => {
    event.preventDefault();
    if (searchText <= 0) return;
    navigate(`?q=${searchText}`);
  };

  return {
    heroes,
    onInputChange,
    onSearchSubmit,
    q,
    searchText,
    showError,
    showSearch,
  };
};
