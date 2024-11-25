import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CircularProgressBar from "../components/CircularProgressBar";

const MovieDetail = () => {
  return (
    <div className="relative text-white overflow-hidden">
      <img
        className="absolute inset-0 h-auto w-screen brightness-[.2]"
        src="https://baodongnai.com.vn/file/e7837c02876411cd0187645a2551379f/112024/14_1_20241121152545.jpg"
      />
      <div className="relative mx-auto flex max-w-screen-xl gap-6 lg:gap-8 px-6 py-10">
        <div className="flex-1">
          <img src="https://cinestar.com.vn/_next/image/?url=https%3A%2F%2Fapi-website.cinestar.com.vn%2Fmedia%2Fwysiwyg%2FPosters%2F11-2024%2Fwicked-official-poster.jpg&w=3840&q=75" />
        </div>
        <div className="flex-[2] text-[1.2vw]">
          <p className="mb-2 text-[2vw] font-bold">Test</p>
          <div className="flex items-center gap-4">
            <span className="border border-gray-400 p-1 text-gray-400">G</span>
            <p>2024-11-25</p>
            <p>Leo Messi</p>
          </div>
          <div className="mt-4 flex items-center gap-4">
            <div className="flex items-center gap-2">
              <CircularProgressBar percent={90} size={3.5} strokeWidth={0.3} />
              Rating
            </div>
            <button>
              <FontAwesomeIcon icon={faPlay} className="mr-1" /> Trailer
            </button>
          </div>
          <div>
            <p className="mb-2 text-[1.3vw] font-bold">Overview</p>
            <p>
              Eddie and Venom are on the run. Hunted by both of their worlds and
              with the net closing in, the duo are forced into a devastating
              decision that will bring the curtains down on Venom and Eddie last
              dance
            </p>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-2">
            <div>
              <p className="font-bold">Director</p>
              <p>Jenierfer Phang</p>
            </div>
            <div>
              <p className="font-bold">Writer</p>
              <p>Jenierfer Phang</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
