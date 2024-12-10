import CircularProgressBar from "@components/CircularProgressBar";
import ImageComponent from "@components/Image";
import { useState } from "react";

const SeasonsList = ({ seasons = [] }) => {
  const [isShowMore, setIsShowMore] = useState(false);

  const currentSeasons = isShowMore
    ? seasons.slice(0, 32)
    : seasons.slice(0, 2);

  return (
    <div className="mt-8 text-[1.3vw]">
      <p className="mb-4 text-[1.4vw] font-bold">Seasons</p>
      <div className="space-y-4">
        {currentSeasons.map((season) => (
          <div
            key={season.id}
            className="flex gap-4 rounded-lg border border-slate-200 p-3 shadow-md"
          >
            <ImageComponent
              height={195}
              width={130}
              className="h-[195px] w-[130px] max-w-screen-xl rounded-lg"
              src={
                season.poster_path &&
                `https://media.themoviedb.org/t/p/w300${season.poster_path}`
              }
            />

            <div className="space-y-1">
              <p className="text-[1.4vw] font-bold">{season.name}</p>
              <div className="flex items-center gap-2">
                <p className="font-bold">Rating</p>
                <CircularProgressBar
                  percent={Math.round(season.vote_average * 10)}
                  size={2.5}
                  strokeWidth={0.2}
                />
              </div>
              <p>
                <span className="font-bold">Release date: </span>
                {season.air_date}
              </p>
              <p>{season.episode_count} Episodes</p>
              <p>{season.overview}</p>
            </div>
          </div>
        ))}
      </div>
      <p
        className="mt-1 cursor-pointer"
        onClick={() => setIsShowMore(!isShowMore)}
      >
        {isShowMore ? "Show Less" : "Show More"}
      </p>
    </div>
  );
};

export default SeasonsList;
