import resume from '../assets/levi-heintzelman-resume.docx';
import Footer from './Footer';

const Resume = () => {
  return (
    <div className="background flex-column min-vh-100">
      <div className="text text-center">
        <h2>Resume</h2>
        <a href={resume} download="Levi Heintzelman Resume" target="_blank">
          <button className="btn btn-lg">Download Levi's Resume</button>
        </a>
        <div className='row text-center' >
          <div className='col-md-6 text-center'>
            <ul>
              <h4>Front End Technical Skills</h4>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>Bootstrap</li>
              <li>Handlebars</li>
            </ul>
          </div>

          <div className='col-md-6 text-center'>
            <ul>
              <h4>Back End Technical Skills</h4>
              <li>Rest APIs</li>
              <li>3rd Party APIs</li>
              <li>Node</li>
              <li>Express</li>
              <li>MySQL</li>
              <li>MongoDB</li>
            </ul>
          </div>


        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Resume;
