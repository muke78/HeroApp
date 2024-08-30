import { getHeroesByPublisher } from "../helpers/getHeroesByPublisher";

export const HeroList = ({ publisher }) => {
  const heroes = getHeroesByPublisher(publisher);

  return (
    <ul>
      {heroes.map((items) => (
        <li key={items.id}> {items.superhero} </li>
      ))}
    </ul>
  );
};
