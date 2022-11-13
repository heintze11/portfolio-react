import health from '../assets/health-tracker.jpg';
import airQuality from '../assets/air-quality.png';
import final from '../assets/final.jpg';
import background from '../assets/background.jpeg';
import task from '../assets/task.png';

const Portfolio = () => {
  return (
    <div className="background">
      <div className="text">
        <h3 className="text-center">Portfolio</h3>
        <div className="portfolio row container justify-content-center text-center">
          
          <div className="col-lg-5 mt-5">
            <div className="card bg-info">
              <div className="card-body">
                <h5 className="card-title">Health Tracker App</h5>
              </div>
              <img
                className="img"
                src={health}
                alt="Preview of health tracker app"
              />
              <a
                href="https://github.com/heintze11/health-tracker/"
                target="_blank"
                className="btn btn-secondary w-50"
              >
                Github
              </a>
              <a
                href="https://evening-reef-97935.herokuapp.com/"
                target="_blank"
                className="btn btn-primary w-50"
              >
                Deployed
              </a>
            </div>
          </div>

          <div className="col-lg-5 mt-5">
            <div className="card bg-info">
              <div className="card-body">
                <h5 className="card-title">Air Quality Comparison App</h5>
              </div>
              <img src={airQuality} alt="Preview of air quality app" className='img' />
              <a
                href="https://github.com/thaling11/air-quality-comparison"
                target="_blank"
                className="btn btn-secondary w-50"
              >
                Github
              </a>
              <a
                href="https://thaling11.github.io/air-quality-comparison/"
                target="_blank"
                className="btn btn-primary w-50"
              >
                Deployed
              </a>
            </div>
          </div>

          <div className="col-lg-5 mt-5">
            <div className="card bg-info">
              <div className="card-body">
                <h5 className="card-title">Final Project</h5>
              </div>
              <img className="img" src={final} alt="Preview of health tracker app" />
              <a
                href="https://github.com/AFaidley/Project-3"
                target="_blank"
                className="btn btn-secondary w-50"
              >
                Github
              </a>
              <a
                href="https://github.com/AFaidley/Project-3"
                target="_blank"
                className="btn btn-primary w-50"
              >
                Placeholder
              </a>
            </div>
          </div>

          <div className="col-lg-5 mt-5">
            <div className="card bg-info">
              <div className="card-body">
                <h5 className="card-title">React Task Tracker</h5>
              </div>
              <img className="img" src={task} alt="Task app" />
              <a
                href="https://github.com/heintze11/react-task-tracker"
                target="_blank"
                className="btn btn-secondary w-50"
              >
                Github
              </a>
              
            </div>
          </div>

          <div className="col-lg-5 mt-5">
            <div className="card bg-info">
              <div className="card-body">
                <h5 className="card-title">Placeholder</h5>
              </div>
              <img className="img" src={background} alt="Preview of health tracker app" />
              <a
                href="https://github.com/heintze11/"
                target="_blank"
                className="btn btn-secondary w-50"
              >
                Github
              </a>
              <a
                href="https://github.com/heintze11/"
                target="_blank"
                className="btn btn-primary w-50"
              >
                Deployed
              </a>
            </div>
          </div>

          <div className="col-lg-5 mt-5 mb-5">
            <div className="card bg-info">
              <div className="card-body">
                <h5 className="card-title">Placeholder</h5>
              </div>
              <img className="img" src={background} alt="Preview of health tracker app" />
              <a
                href="https://github.com/heintze11/"
                target="_blank"
                className="btn btn-secondary w-50"
              >
                Github
              </a>
              <a
                href="https://github.com/heintze11/"
                target="_blank"
                className="btn btn-primary w-50"
              >
                Deployed
              </a>
            </div>
          </div>

          {/* 
          <card className="portfolio-item card col-6">
            <div className="portfolio-image">
              <img src={health} alt="Preview of health tracker app" />
            </div>
            <h3>Health Tracker</h3>
            <a href="https://github.com/heintze11/health-tracker" target='_blank' className="btn">Github</a>
            <a href="https://evening-reef-97935.herokuapp.com/" target='_blank' className="btn btn-primary">Deployed</a>
          </card>
          
          
          <card className="portfolio-item card col-6" href="">
            <div className="portfolio-image">
              <img src={health} alt="Preview of health tracker app" />
            </div>
            <h3>Health Tracker</h3>
            <a href="https://github.com/heintze11/health-tracker" target='_blank' className="btn">Github</a>
            <a href="https://evening-reef-97935.herokuapp.com/" target='_blank' className="btn btn-primary">Deployed</a>
          </card> */}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
