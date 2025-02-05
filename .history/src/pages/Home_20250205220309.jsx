import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactSection";
import CourseSection from "../components/CourseSection";
import Hero from "../components/Hero";
import TeamSection from "../components/TeamSection";
import WhyUsSection from "../components/WhyUsSection";

const Home = () => {
    return (
        <div>
            <div className="bg-white">
                <Hero />
                <AboutSection />
                <CourseSection />
                <WhyUsSection />
                <TeamSection />
                <ContactSection />
            </div>

        </div>
    );
};

export default Home;