import { useEffect, useState } from "react";
import Movie from "./Movie";
import PaginateIndicator from "./PaginateIndicator";
import useFetch from "@hooks/useFetch";

//API Read Access Token: eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2OTlhYmI5NTI3M2IwNGE3MDc5YTQ1ODMyOWNmZmE4NCIsIm5iZiI6MTczMDI0OTkxNy40MjAxNDM2LCJzdWIiOiI2NzIxODM0NjgyNmZlNTc5OWNjNGExOTgiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.zeTMNZgeFRbZ1q3UAHn-g7tlxwYpm53P1Fhn4spjQmY

const FeatureMovies = () => {
  // const [movies, setMovies] = useState([]);
  const [activeMovieId, setActiveMovieId] = useState();
  // console.log("Rendering");

  const { data: popularMoviesResponse, isLoading } = useFetch({
    url: `/discover/movie?include_adult=false&language=en-US&page=1&sort_by=popularity.desc&include_video=true`,
  });

  const { data: videoResponse } = useFetch(
    {
      url: `/movie/${activeMovieId}/videos`,
    },
    { enable: !!activeMovieId },
  );

  // console.log({ Test: videoResponse });

  const temp = (videoResponse?.results || []).find(
    (video) => video.type === "Trailer" && video.site === "YouTube",
  )?.key;

  console.log({ videoResponse, temp });

  const movies = (popularMoviesResponse.results || []).slice(0, 4);

  console.log({ movies, isLoading });

  useEffect(() => {
    if (movies[0]?.id) {
      setActiveMovieId(movies[0].id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(movies)]);

  // useEffect(() => {
  //   fetch("https://api.themoviedb.org/3/movie/popular", {
  //     method: "GET",
  //     headers: {
  //       accept: "application/json",
  //       Authorization:
  //         "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2OTlhYmI5NTI3M2IwNGE3MDc5YTQ1ODMyOWNmZmE4NCIsIm5iZiI6MTczMDI0OTkxNy40MjAxNDM2LCJzdWIiOiI2NzIxODM0NjgyNmZlNTc5OWNjNGExOTgiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.zeTMNZgeFRbZ1q3UAHn-g7tlxwYpm53P1Fhn4spjQmY",
  //     },
  //   }).then(async (res) => {
  //     const data = await res.json();
  //     console.log({ data });
  //     const popularMovies = data.results.slice(0, 4);
  //     setMovies(popularMovies);
  //     setActiveMovieId(popularMovies[0].id);
  //   });
  // }, []);

  // console.log({movies});

  return (
    <div className="relative text-white">
      {movies
        .filter((movie) => movie.id === activeMovieId)
        .map((movie) => (
          <Movie
            key={movie.id}
            data={movie}
            trailerVideoKey={
              (videoResponse?.results || []).find(
                (video) => video.type === "Trailer" && video.site === "YouTube",
              )?.key
            }
          />
        ))}
      <PaginateIndicator
        movies={movies}
        activeMovieId={activeMovieId}
        setActiveMovieId={setActiveMovieId}
      />
    </div>
  );
};

export default FeatureMovies;
