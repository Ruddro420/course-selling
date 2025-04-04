
import foundationData from "../../public/data/foundationData.json"
import AboutHero from "../components/AboutUs/AboutHero";
import MainVitti from "../components/AboutUs/MainVitti";

const About = () => {
  return (
    <div>
      <section className="pt-20">
        <div className="">
          <AboutHero />
          <MainVitti />
        </div>
      </section>
    </div>
  );
};

export default About;
