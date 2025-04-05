import teamData from '../../public/data/teamData.json'; // Adjust the path to your JSON file
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaGithub, FaDribbble, FaLinkedin } from "react-icons/fa";

const TeamSection = () => {
    return (
        <div className='course-container'>
            <section className="py-10 sm:py-16 lg:py-24">
                <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                    <div className="max-w-2xl mx-auto text-center">
                        <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">আমাদের মেন্টরস</h2>
                        <p className="mx-auto mt-4 text-base leading-relaxed text-gray-600">
                            প্রতিটি মেন্টর নিজ নিজ ক্ষেত্রে অভিজ্ঞ এবং দক্ষ। তারা শিক্ষার্থীদের শেখার প্রতি আগ্রহ জাগিয়ে তোলে এবং প্রতিটি পাঠকে বাস্তবজীবনের সাথে যুক্ত করে শেখানোর চেষ্টা করে।
                        </p>
                    </div>

                    <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2 mt-10">
                        {teamData.map((member, index) => (
                            <div key={index} className="items-center block-bg rounded-lg shadow sm:flex dark:bg-gray-800 flex justify-center dark:border-gray-700">
                                <a href="#">
                                    <img className="w-auto rounded-lg sm:rounded-none sm:rounded-l-lg" src={member.image} alt="Bonnie Avatar" />
                                </a>
                                <div className="p-5">
                                    <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                                        <a href="#">{member.name}</a>
                                    </h3>
                                    <div>
                                        <span className="text-gray-500 dark:text-gray-400 mb-5">{member.role}</span> <br /><br />
                                    </div>


                                    <div className="flex space-x-4 sm:mt-0 mt-10">
                                        <ul className="flex items-center space-x-4 sm:mt-0">
                                            {/* Social Links */}
                                            {member.linkedin && (
                                                <li>
                                                    <Link to={member.linkedin}
                                                        className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                                        <FaLinkedin size={18} />

                                                    </Link>
                                                </li>
                                            )}
                                            {member.github && (
                                                <li>
                                                    <Link to={member.github}
                                                        className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                                        <FaGithub size={18} />
                                                    </Link>
                                                </li>
                                            )}
                                            {member.facebook && (
                                                <li>
                                                    <Link to={member.facebook}
                                                        className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                                        <FaFacebook size={18} />
                                                    </Link>
                                                </li>
                                            )}
                                            {member.twitter && (
                                                <li>
                                                    <Link to={member.twitter}
                                                        className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                                        <FaTwitter size={18} />
                                                    </Link>
                                                </li>
                                            )}
                                            {member.dribbble && (
                                                <li>
                                                    <Link to={member.dribbble}
                                                        className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                                        <FaDribbble size={18} />

                                                    </Link>
                                                </li>
                                            )}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </section>
        </div>
    );
};

export default TeamSection;