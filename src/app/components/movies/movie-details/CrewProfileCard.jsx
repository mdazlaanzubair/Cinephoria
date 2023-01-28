const CrewProfileCard = ({ crew, movieName }) => {
  // function that converts long name to short
  function shortenName(name) {
    let names = name.split(" "); //split the name by space
    let firstName = names[0]; //first name
    let middleInitial = names[1][0]; //initial of the middle name
    let lastName = names[names.length - 1]; // last name
    return `${firstName} ${middleInitial}. ${lastName}`;
  }

  return (
    <div className="card col-md-3 m-3 border-0">
      <div className="card-header text-center border-0 p-0">
        <a
          className="text-decoration-none"
          href={`https://www.google.com/search?q=${crew.name}+in+${movieName}+as+${crew.job}+in+${crew.department}+department`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="img-fluid border-0 rounded mb-3 hover-shadow"
            src={`https://image.tmdb.org/t/p/original${crew.profile_path}`}
            alt={crew.original_name}
            title={crew.name}
          />
        </a>
        <h5 className="mb-0" title={crew.name}>
          {crew.name.length > 15 ? shortenName(crew.name) : crew.name}
        </h5>
        <h6 className="text-primary">
          <a
            className="text-decoration-none text-success"
            href={`https://www.google.com/search?q=${crew.name}+in+${movieName}+as+${crew.job}+in+${crew.department}+department`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {crew.job}
          </a>
        </h6>
      </div>
    </div>
  );
};

export default CrewProfileCard;
