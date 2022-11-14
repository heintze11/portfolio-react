
import Project from './Pages/project';
import Footer from './Footer';
import health from '../assets/health-tracker.jpg';
import airQuality from '../assets/air-quality.png';
import final from '../assets/final.jpg';
import background from '../assets/background.jpeg';
import task from '../assets/task.png';

const Portfolio2 = () => {
  const cardInfo = [
    {
      id: 1,
      image: health,
      title: 'Health Tracker App',
      github: 'https://github.com/heintze11/health-tracker/',
      deployed: 'https://evening-reef-97935.herokuapp.com/',
    },
    {
      id: 2,
      image: airQuality,
      title: 'Air Quality Comparison App',
      github: 'https://github.com/thaling11/air-quality-comparison',
      deployed: 'https://thaling11.github.io/air-quality-comparison/',
    },
    {
      id: 3,
      image: final,
      title: 'Final Project',
      github: 'https://github.com/AFaidley/Project-3',
      deployed: 'https://github.com/AFaidley/Project-3',
    },
    {
      id: 4,
      image: task,
      title: 'React Task Tracker',
      github: 'https://github.com/heintze11/react-task-tracker',
      deployed: 'https://github.com/heintze11/',
    },
    {
      id: 5,
      image: background,
      title: 'Placeholder',
      github: 'https://github.com/heintze11/',
      deployed: 'https://github.com/heintze11/',
    },
    {
      id: 6,
      image: background,
      title: 'Placeholder',
      github: 'https://github.com/heintze11/',
      deployed: 'https://github.com/heintze11/',
    },
  ];

  return (
    <div className="background d-flex flex-column min-vh-100">
      <div className="text mt-5">
        <h3 className="text-center">Portfolio</h3>
        <div className="portfolio row container justify-content-center text-center">
          {cardInfo.map((info) => (
            <Project key={info.id} {...info}/>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Portfolio2;
