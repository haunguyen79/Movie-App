import Movie from "./Movie";
import PaginateIndicator from "./PaginateIndicator";

const FeatureMovies = () => {
  return (
    <div className="relative text-white">
      <Movie />
      <PaginateIndicator />
    </div>
  );
};

export default FeatureMovies;
