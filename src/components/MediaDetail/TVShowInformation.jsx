const TVShowInformation = ({ tvInfo = {} }) => {
  return (
    <div>
      <p className="mb-4 text-[1.4vw] font-bold">Information</p>
      <div className="mb-4">
        <p className="font-bold">Original Name</p>
        <p>{tvInfo.original_title}</p>
      </div>
      <div className="mb-4">
        <p className="font-bold">Original Country</p>
        {(tvInfo.origin_country || []).map((countryCode) => (
          <img
            className="mr-1 mt-1 w-[1.6vw]"
            key={countryCode}
            src={`https://flagcdn.com/48x36/${countryCode.toLowerCase()}.png`}
          />
        ))}
      </div>
      <div className="mb-4">
        <p className="font-bold">Status</p>
        <p>{tvInfo.status}</p>
      </div>
      <div className="mb-4">
        <p className="font-bold">Networks</p>
        {(tvInfo.networks || []).map((network) => (
          <img
            className="mr-1 mt-1 w-[3.2vw] invert"
            key={network.id}
            src={`https://media.themoviedb.org/t/p/h30${network.logo_path}`}
          />
        ))}
      </div>
    </div>
  );
};

export default TVShowInformation;
