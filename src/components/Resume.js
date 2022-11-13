import resume from '../assets/levi-heintzelman-resume.docx';
import Footer from './Footer';

const Resume = () => {
  return (
    <div className="background flex-column min-vh-100">
      <div className="text">
        <h2>Resume</h2>
        <a href={resume} download="Levi Heintzelman Resume" target="_blank">
          <button className="btn">Download Levi's Resume</button>
        </a>
        <h3>Summary</h3>
        <p>
          An analytical and detail-oriented, full stack developer with a
          background in operations geology. Possesses unique experience and
          perspective as a product stakeholder transitioning into a product
          development role. Utilizes excellent interpersonal communication
          skills with a variety of disciplines. A proven aptitude for
          identifying areas of improvement and providing strategic solutions.{' '}
        </p>
        <h3>Technical Skills</h3>
        <p>
          JavaScript, HTML, CSS, React.js, Node.js, MongoDB, MySQL, Handlebars,
          Github, Heroku, 3rd Party APIs, Rest APIs
        </p>
        <h3>Experience</h3>
        <p>
          HELMERICH & PAYNE INC, Denver, Colorado Geosteering Geophysicist,
          2020-Current Subject matter expert and stakeholder for developing a
          geosteering software product. Work closely with software, operations,
          product management, marketing, and technology development to create a
          marketable, feature-filled product. • Re-defined company expectations
          of a marketable product resulting in further development to meet
          clients’ needs. • Utilizes understanding of geosteering, software
          functionality, and commercialization goals to identify issues in early
          development and assist software in finding root causes so they can
          efficiently create solutions. • Built team of remote operations
          geosteerers through technical interviews, extensive training, creating
          workflows and templates, and setting clear expectations to market the
          product as a 24-hour service. EARTH SCIENCE AGENCY, Denver, Colorado
          Geologist, 2017-2020 Worked as an operations geologist for a Delaware
          Basin client and performed remote geosteering with real time target
          changes. Performed on-site geosteering and mudlogging for operators in
          the Denver-Julesburg Basin, and was promoted to a rig overwatch
          position. • Actively geosteered and backsteered Delaware Basin wells
          using StarSteer and Petra; 100+ wells to date. • Geosteered
          structurally complex areas in the DJ Basin using SES software for 100
          wells. DEVON ENERGY, Oklahoma City, Oklahoma Geologist II, 2014-2016
          Operated as execution geologist following up to three rigs. Used SES
          and Petra software to make real-time decisions for directional
          drilling changes. • Established as unofficial team lead by
          demonstrating reliability and efficiency. • Geosteered 25 horizontal
          wells in the Delaware Basin, in zone 97%. RAYMOND JAMES | ALBRECHT,
          Houston, Texas Geologist, 2010-2014 Acted as lead and co-lead on
          acquisition and divestment projects in the Oil and Gas industry. •
          Authored scientific write-ups that were distributed to thousands of
          potential buyers. • Facilitated presentations to prospective buyers
          for properties worth $10,000,000 to $700,000,000.
        </p>
        <h3>Education</h3>
        <ul>
          <li>
            DENVER UNIVERSITY, Denver, Colorado, Full Stack Coding Boot Camp,
            2022
          </li>
          <li>
            COLORADO SCHOOL OF MINES, Golden, Colorado, M.S., Geology (GPA 3.6),
            2010
          </li>
          <li>
            LAKE SUPERIOR STATE UNIVERSITY, Sault Ste. Marie, Michigan, B.S.,
            Geology (GPA 3.45), 2007
          </li>
        </ul>
      </div>
      <Footer />
    </div>
  );
};

export default Resume;
