import teamData from '../../public/data/teamData.json'; // Adjust the path to your JSON file

const TeamSection = () => {
    return (
        <div>
            <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
                <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                    <div className="max-w-2xl mx-auto text-center">
                        <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">আমাদের মেন্টরস</h2>
                        <p className="mx-auto mt-4 text-base leading-relaxed text-gray-600">
                            প্রতিটি মেন্টর নিজ নিজ ক্ষেত্রে অভিজ্ঞ এবং দক্ষ। তারা শিক্ষার্থীদের শেখার প্রতি আগ্রহ জাগিয়ে তোলে এবং প্রতিটি পাঠকে বাস্তবজীবনের সাথে যুক্ত করে শেখানোর চেষ্টা করে।
                        </p>
                    </div>

                    <div className="grid grid-cols-2 mt-8 text-center justify-center sm:mt-16 lg:mt-20 sm:grid-cols-4 gap-y-8 lg:grid-cols-3 gap-x-0">
                        {teamData.map((member, index) => (
                            <div key={index}>
                                <img
                                    className="object-cover mx-auto rounded-lg w-40 h-auto sm:w-52 sm:h-auto lg:w-44 lg:h-auto"
                                    src={member.image}
                                    alt={member.name}
                                />
                                <p className="mt-8 text-lg font-semibold leading-tight text-black">{member.name}</p>
                                <p className="mt-1 text-base leading-tight text-gray-600">{member.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default TeamSection;