import ImageComponent from "@components/Image";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Movie = (props) => {
  console.log({ props });
  // const { data: { backdrop_path, title, release_date, overview }  } = props;
  
  // console.log(props.data?.backdrop_path);

  return (
    <div>
      <ImageComponent
        src={`https://image.tmdb.org/t/p/original${props.data?.backdrop_path}`}
        className="aspect-ratio w-full brightness-50"
        width={900}
        height={500}
      />
      <div className="absolute bottom-[10%] left-8 w-1/2 sm:w-1/3">
        <p className="mb-2 font-bold sm:text-[2vw]">{props.data?.title}</p>
        <div>
          {/* {<p className="mb-1 inline-block border border-gray-400 text-gray-400">
            PG13
          </p>} */}
          <p className="text-[1.2vw]">{props.data?.release_date}</p>
        </div>
        <div>
          <div className="mt-4 hidden text-[1.2vw] sm:block">
            <p className="mb-2 font-bold">Overview</p>
            <p>
              {props.data?.overview}
            </p>
          </div>
          <div className="mt-4">
            <button className="mr-2 rounded bg-white px-4 py-2 text-10 text-black lg:text-lg">
              <FontAwesomeIcon icon={faPlay} className="mr-1" />
              Trailer
            </button>
            <button className="rounded bg-slate-300/50 px-4 py-2 text-10 lg:text-lg">
              View Detail
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movie;
