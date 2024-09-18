import { HeroList } from '../components/HeroList';

export const DCPage = () => {
  return (
    <div className="mt-2">
      <h1>Heroes de DC</h1>
      <hr />

      <HeroList publisher="DC Comics" />
    </div>
  );
};
