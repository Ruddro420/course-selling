import AboutSection from "../components/AboutSection";
import AboutHero from "../components/AboutUs/AboutHero";
import ContactSection from "../components/ContactSection";
import Hero from "../components/Hero";
import CourseSlider from "../components/Sliders/CourseSlider";
import TeamSection from "../components/TeamSection";
import WhyUsSection from "../components/WhyUsSection";
import AllCourses from "./AllCourses";

const Home = () => {
    return (
        <div>
            <div className="bg-white">
                <Hero />
                <WhyUsSection />
                <AllCourses/>
                <AboutHero />
                {/* <CourseSlider /> */}
                
                <TeamSection />
                {/* <ContactSection /> */}
            </div>

        </div>
    );
};

export default Home;