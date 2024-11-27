import { Link } from "react-router-dom";
import CircularProgressBar from "../CircularProgressBar";

const MovieCard = ({ id, title, releaseDay, poster, point, mediaType }) => {
  return (
    <Link to={`/movie/${id}`}>
      <div className="relative rounded-lg border border-slate-800">
        {mediaType === "tv" && (
          <p className="absolute right-1 top-1 rounded bg-black p-1 text-sm font-bold shadow-md">
            TV Show
          </p>
        )}
        <img
          className="rounded-lg"
          src={`https://image.tmdb.org/t/p/w500${poster}`}
        />
        <div className="relative -top-[1.5vw] px-4">
          <CircularProgressBar
            percent={Math.round(point * 10)}
            strokeColor={point >= 7 ? "green" : point >= 5 ? "orange" : "red"}
          />
          <p className="mt-2 font-bold">{title}</p>
          <p className="text-slate-300">{releaseDay}</p>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
