import AboutSection from "../components/AboutSection";
import CourseSection from "../components/CourseSection";
import Hero from "../components/Hero";
import WhyUsSection from "../components/WhyUsSection";

const Home = () => {
    return (
        <div>
            <div className="bg-white">
                <Hero />
                <AboutSection />
                <CourseSection />
                <WhyUsSection />
            </div>

        </div>
    );
};

export default Home;