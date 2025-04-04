
import foundationData from "../../public/data/foundationData.json"
import AboutHero from "../components/AboutUs/AboutHero";
import MainVitti from "../components/AboutUs/MainVitti";

const About = () => {
  return (
    <div>
      <section className=" bg-opacity-30 py-10 sm:py-16 lg:py-24">
        <div className="">
          <AboutHero />
          <MainVitti />
        </div>
      </section>
    </div>
  );
};

export default About;
