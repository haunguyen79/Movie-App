import { useParams } from "react-router-dom";
import Loading from "@components/Loading";
import Banner from "@components/MediaDetail/Banner";
import ActorList from "@components/MediaDetail/ActorList";
import RelatedMediaList from "@components/MediaDetail/RelatedMediaList";
import useFetch from "@hooks/useFetch";
import MovieInformation from "@components/MediaDetail/MovieInformation";

const TVShowDetail = () => {
  const { id } = useParams(); // Lấy tham số userId từ URL

  const { data: tvInfo, isLoading } = useFetch({
    url: `/tv/${id}?append_to_response=content_ratings,aggregate_credits`,
  });

  console.log({ tvInfo, isLoading });

  const {
    data: recommendationsResponse,
    isLoading: isRelatedMovieListLoading,
  } = useFetch({
    url: `/tv/${id}/recommendations`,
  });

  const relatedMovie = recommendationsResponse.results || [];

  console.log({ tvInfo, relatedMovie, isLoading });

  const certification =
    (tvInfo.content_ratings?.results || []).find(
      (result) => result.iso_3166_1 === "US",
    )?.rating || [];

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <Banner
        title={tvInfo.name}
        backdropPath={tvInfo.backdrop_path}
        posterPath={tvInfo.poster_path}
        certification={certification}
        // crews={crews}
        genres={tvInfo.genres}
        releaseDate={tvInfo.first_air_date}
        point={tvInfo.vote_average}
        overview={tvInfo.overview}
      />
      <div className="bg-black text-[1.2vw] text-white">
        <div className="mx-auto flex max-w-screen-xl gap-6 px-6 py-10 sm:gap-8">
          <div className="flex-[2]">
            <ActorList actors={tvInfo.credits?.cast || []} />
            <RelatedMediaList
              mediaList={relatedMovie}
              isLoading={isRelatedMovieListLoading}
            />
          </div>
          <div className="flex-1">
            <MovieInformation tvInfo={tvInfo} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TVShowDetail;
