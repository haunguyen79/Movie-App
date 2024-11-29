import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Loading from "../components/Loading";
import Banner from "../components/MediaDetail/Banner";
import ActorList from "../components/MediaDetail/ActorList";

const MovieDetail = () => {
  const { id } = useParams(); // Lấy tham số userId từ URL
  const [movieInfo, setMovieInfo] = useState({});
  const [isLoading, setIsloading] = useState(false);
  // console.log({ params });

  useEffect(() => {
    setIsloading(true);
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?append_to_response=release_dates,credits`,
      {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2OTlhYmI5NTI3M2IwNGE3MDc5YTQ1ODMyOWNmZmE4NCIsIm5iZiI6MTczMDI0OTkxNy40MjAxNDM2LCJzdWIiOiI2NzIxODM0NjgyNmZlNTc5OWNjNGExOTgiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.zeTMNZgeFRbZ1q3UAHn-g7tlxwYpm53P1Fhn4spjQmY",
        },
      },
    )
      .then(async (res) => {
        const data = await res.json();
        console.log({ data });
        setMovieInfo(data);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setIsloading(false);
      });
  }, [id]);

  if (isLoading) {
    return <Loading />;
  }

  console.log({ movieInfo });

  return (
    <div>
      <Banner mediaInfo={movieInfo} />
      <div className="bg-black text-[1.2vw] text-white">
        <div className="mx-auto flex max-w-screen-xl gap-6 px-6 py-10">
          <div className="flex-[2]">
            <ActorList actors={movieInfo.credits?.cast || []} />
          </div>
          <div className="flex-1">
            <p className="mb-4 text-[1.4vw] font-bold">Information</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
