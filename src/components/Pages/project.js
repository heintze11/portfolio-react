// Receiving Props from Portfolio to render each card with their individual values

const Project = (props) => {
  return (
    <div className="col-lg-5 mt-5">
      <div className="card project-card">
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
        </div>
        <img className="img" src={props.image} alt={props.title} />
        <a
          href={props.github}
          target="_blank"
          className="btn btn-secondary w-50"
        >
          Github
        </a>
        <a
          href={props.deployed}
          target="_blank"
          className="btn btn-primary w-50"
        >
          Deployed
        </a>
      </div>
    </div>
  );
};

export default Project;
