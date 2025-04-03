import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactSection";
import Hero from "../components/Hero";
import CourseSlider from "../components/Sliders/CourseSlider";
import TeamSection from "../components/TeamSection";
import WhyUsSection from "../components/WhyUsSection";

const Home = () => {
    return (
        <div>
            <div className="bg-white">
                <Hero />
                <AboutSection />
                <CourseSlider />
                <WhyUsSection />
                <TeamSection />
                {/* <ContactSection /> */}
            </div>

        </div>
    );
};

export default Home;