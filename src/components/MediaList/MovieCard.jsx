import CircularProgressBar from "./CircularProgressBar";

const MovieCard = () => {
  return (
    <div className="rounded-lg border border-slate-800">
      <img
        className="rounded-lg"
        src="https://image.tmdb.org/t/p/w500/csQSGH0QU8D3Ov5YLEYuHep8ihA.jpg"
      />
      <div className="px-4 relative -top-[1.5vw]">
        <CircularProgressBar />
        <p className="font-bold mt-2">Kingdom of the Plants</p>
        <p className="text-slate-300">2024-11-19</p>
      </div>
    </div>
  );
};

export default MovieCard;
