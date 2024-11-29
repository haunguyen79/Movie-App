import ActorInfo from "./ActorInfo";

const ActorList = ({ actors = [] }) => {
  return (
    <div>
      <p className="mb-4 text-[1.4vw] font-bold">ActorList</p>
      <div className="grid grid-cols-3 gap-4 sm:grid-cols-4">
        {actors.map((actor) => (
          <ActorInfo
            key={actor.id}
            id={actor.id}
            name={actor.name}
            character={actor.character}
            profilePath={actor.profile_path}
          />
        ))}
        {/* <ActorInfo />
       <ActorInfo />
       <ActorInfo />
       <ActorInfo /> */}
      </div>
    </div>
  );
};

export default ActorList;
