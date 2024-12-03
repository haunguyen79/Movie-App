import { useParams } from "react-router-dom";
// import { useEffect, useState } from "react";
import Loading from "@components/Loading";
import Banner from "@components/MediaDetail/Banner";
import ActorList from "@components/MediaDetail/ActorList";
import RelatedMediaList from "@components/MediaDetail/RelatedMediaList";
import MovieInformation from "@components/MediaDetail/MovieInformation";
import useFetch from "@hooks/useFetch";

const MovieDetail = () => {
  const { id } = useParams(); // Lấy tham số userId từ URL
  // const [movieInfo, setMovieInfo] = useState({});
  // const [relatedMovie, setRelatedMovie] = useState([]);
  // const [isLoading, setIsloading] = useState(false);
  // const [isRelatedMovieListLoading, setIsRelatedMovieListLoading] =
  //   useState(false);
  // console.log({ params });

  // useEffect(() => {
  //   setIsloading(true);
  //   fetch(
  //     `https://api.themoviedb.org/3/movie/${id}?append_to_response=release_dates,credits`,
  //     {
  //       method: "GET",
  //       headers: {
  //         accept: "application/json",
  //         Authorization:
  //           "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2OTlhYmI5NTI3M2IwNGE3MDc5YTQ1ODMyOWNmZmE4NCIsIm5iZiI6MTczMDI0OTkxNy40MjAxNDM2LCJzdWIiOiI2NzIxODM0NjgyNmZlNTc5OWNjNGExOTgiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.zeTMNZgeFRbZ1q3UAHn-g7tlxwYpm53P1Fhn4spjQmY",
  //       },
  //     },
  //   )
  //     .then(async (res) => {
  //       const data = await res.json();
  //       console.log({ data });
  //       setMovieInfo(data);
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //     })
  //     .finally(() => {
  //       setIsloading(false);
  //     });
  // }, [id]);

  const { data: movieInfo, isLoading } = useFetch({
    url: `/movie/${id}?append_to_response=release_dates,credits`,
  });

  console.log({ movieInfo, isLoading });

  const {
    data: recommendationsResponse,
    isLoading: isRelatedMovieListLoading,
  } = useFetch({
    url: `/movie/${id}/recommendations`,
  });

  const relatedMovie = recommendationsResponse.results || [];

  console.log({ movieInfo, relatedMovie, isLoading });

  const certification = (
    (movieInfo.release_dates?.results || []).find(
      (result) => result.iso_3166_1 === "US",
    )?.release_dates || []
  ).find((releaseDate) => releaseDate.certification)?.certification;

  const crews = (movieInfo.credits?.crew || [])
    .filter((crew) => ["Director", "Screenplay", "Writer"].includes(crew.job))
    .map((crew) => ({ id: crew.id, job: crew.job, name: crew.name }));

  console.log({ crews });

  // useEffect(() => {
  //   // setIsRelatedMovieListLoading(true);
  //   fetch(`https://api.themoviedb.org/3/movie/${id}/recommendations`, {
  //     method: "GET",
  //     headers: {
  //       accept: "application/json",
  //       Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,
  //     },
  //   })
  //     .then(async (res) => {
  //       const data = await res.json();
  //       console.log({ recommendations: data });
  //       // setMovieInfo(data);
  //       const currentRelatedMovies = (data.results || []).slice(0, 12);
  //       setRelatedMovie(currentRelatedMovies);
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //     })
  //     .finally(() => {
  //       // setIsRelatedMovieListLoading(false);
  //     });
  // }, [id]);

  if (isLoading) {
    return <Loading />;
  }

  // console.log({ movieInfo });

  return (
    <div>
      <Banner
        title={movieInfo.title}
        backdropPath={movieInfo.backdrop_path}
        posterPath={movieInfo.poster_path}
        certification={certification}
        crews={crews}
        genres={movieInfo.genres}
        releaseDate={movieInfo.release_date}
        point={movieInfo.vote_average}
        overview={movieInfo.overview}
      />
      <div className="bg-black text-[1.2vw] text-white">
        <div className="mx-auto flex max-w-screen-xl gap-6 px-6 py-10 sm:gap-8">
          <div className="flex-[2]">
            <ActorList actors={movieInfo.credits?.cast || []} />
            <RelatedMediaList
              mediaList={relatedMovie}
              isLoading={isRelatedMovieListLoading}
            />
          </div>
          <div className="flex-1">
            <MovieInformation movieInfo={movieInfo} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
