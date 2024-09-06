import { DotLoader } from "react-spinners";
import { v } from "../../styles/variables";

export const Loader = () => {
  return (
    <div className="d-flex align-items-center justify-content-center">
      <DotLoader color={v.colorSearchHero} size={200} />
    </div>
  );
};
