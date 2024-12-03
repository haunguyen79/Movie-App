import ImageComponent from "@components/Image";

const ActorInfo = ({ name, character, profilePath, episodeCount }) => {

  console.log({episodeCount})
  return (
    <div className="rounded-lg border border-slate-300 bg-black shadow-sm">
      <ImageComponent
        className="w-full rounded-lg"
        src={
          profilePath
            ? `https://media.themoviedb.org/t/p/w276_and_h350_face${profilePath}`
            : "/ActorNoImage.svg"
        }
        width={276}
        height={350}
      />
      <div className="p-3">
        <p className="font-bold">{name}</p>
        <p>{character}</p>
        <p>{episodeCount} Episodes</p>
      </div>
    </div>
  );
};

export default ActorInfo;
