import Footer from "./Footer"

const About = () => {
  return (
    <div className="background d-flex flex-column min-vh-100">
      <div className="text mt-5 text-center">
      <h2>About</h2>
      <div className="about">
      <p>
        Levi spent 12 years working as a geologist in the Oil and Gas industry. Due to recent economic and political changes he decided to pursue a career change. During 2022 he started a Coding Bootcamp which finished in December of 2022. 
        </p>
        <p>
        Currently working for a tech company in the Oil and Gas field, he is looking to change positions with his employer to be a Software Engineer. This will give him experience to be able to switch industries in the future.
        </p>
        <p>
        Levi lives in Denver Colorado and is an avid outdoorsman. He enjoys mountain biking, hiking, camping, skiing, and off-roading.
        </p>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default About