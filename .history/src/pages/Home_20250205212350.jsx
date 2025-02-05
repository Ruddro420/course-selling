import AboutSection from "../components/AboutSection";
import CourseSection from "../components/CourseSection";
import Hero from "../components/Hero";

const Home = () => {
    return (
        <div>
            <div className="bg-white">
                <Hero />
                <AboutSection />
                <CourseSection />
            </div>

        </div>
    );
};

export default Home;