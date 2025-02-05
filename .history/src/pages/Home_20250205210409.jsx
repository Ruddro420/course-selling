import AboutSection from "../components/AboutSection";
import Header from "../components/Header";
import Hero from "../components/Hero";

const Home = () => {
    return (
        <div>
            <div className="bg-white">
                <Header />
                <Hero />
                <AboutSection />
            </div>

        </div>
    );
};

export default Home;