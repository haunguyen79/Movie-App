import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

const TABS = [
  {
    id: "all",
    name: "All",
  },
  {
    id: "movie",
    name: "Movie",
  },
  {
    id: "tv",
    name: "TV Show",
  },
];

const MediaList = () => {
  const [mediaList, setMediaList] = useState([]);
  const [activeTabId, setActiveTabId] = useState(TABS[0].id);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/trending/${activeTabId}/day`, {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2OTlhYmI5NTI3M2IwNGE3MDc5YTQ1ODMyOWNmZmE4NCIsIm5iZiI6MTczMDI0OTkxNy40MjAxNDM2LCJzdWIiOiI2NzIxODM0NjgyNmZlNTc5OWNjNGExOTgiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.zeTMNZgeFRbZ1q3UAHn-g7tlxwYpm53P1Fhn4spjQmY",
      },
    }).then(async (res) => {
      const data = await res.json();
      console.log({ data });

      const trendingMediaList = data.results.splice(0, 12);
      console.log(trendingMediaList);
      setMediaList(trendingMediaList);
    });
  }, [activeTabId]);

  return (
    <div className="bg-black px-8 py-10 text-[1.2vw] text-white">
      <div className="mb-6 flex items-center gap-4">
        <p className="text-[2vw] font-bold">Trending</p>
        <ul className="flex rounded border border-white">
          {TABS.map((tab) => (
            <li
              key={tab.id}
              className={`cursor-pointer rounded px-2 py-1 ${tab.id === activeTabId ? `bg-white text-black` : ``}`}
              onClick={() => setActiveTabId(tab.id)}
            >
              {tab.name}
            </li>
          ))}

          {/* <li className="cursor-pointer rounded bg-white px-2 py-1 text-black">
            All
          </li>
          <li className="cursor-pointer rounded px-2 py-1">Movie</li>
          <li className="cursor-pointer rounded px-2 py-1">TV-Show</li> */}
        </ul>
      </div>

      <div className="lg:gird-cols-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
        {mediaList.map((media) => (
          <MovieCard
            key={media.id}
            title={media.title || media.name}
            releaseDay={media.release_date || media.first_air_date}
            poster={media.poster_path}
            point={media.vote_average}
            mediaType={media.media_type}
          />
        ))}
      </div>
    </div>
  );
};

export default MediaList;
