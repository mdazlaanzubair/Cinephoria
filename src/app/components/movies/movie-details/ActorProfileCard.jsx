const ActorProfileCard = ({ actor, movieName }) => {
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
          href={`https://www.google.com/search?q=${actor.name}+in+${movieName}+as+${actor.character}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="img-fluid border-0 rounded mb-3 hover-shadow"
            src={`https://image.tmdb.org/t/p/original${actor.profile_path}`}
            alt={actor.original_name}
            title={actor.character}
          />
        </a>
        <h5 className="mb-0" title={actor.name}>
          {actor.name.length > 15 ? shortenName(actor.name) : actor.name}
        </h5>
        <h6 className="text-primary">
          <a
            className="text-decoration-none text-primary"
            href={`https://www.google.com/search?q=${actor.name}+in+${movieName}+as+${actor.character}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {actor.character}
          </a>
        </h6>
      </div>
    </div>
  );
};

export default ActorProfileCard;
