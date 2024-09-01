import { HeroList } from "../components/HeroList";

export const MarvelPage = () => {
  return (
    <div className="mt-2">
      <h1>Heroes de Marvel</h1>
      <hr />

      <HeroList publisher="Marvel Comics" />
    </div>
  );
};
