import foundationData from "../../public/data/foundationData.json"
const MainVitti = () => {
    return (
        <div className='about-container'>
            <section className="py-10 bg-[#FCF8F1] sm:py-16 lg:py-24 px-4 mx-auto sm:px-6 lg:px-8">
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <h2 className="text-3xl flex justify-center mb-20 font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
                        আমাদের মূল ভিত্তি
                    </h2>
                    <div className="grid grid-cols-1 text-center sm:grid-cols-2 gap-y-8 lg:grid-cols-4 sm:gap-12">
                        {foundationData.map((item) => (
                            <div key={item.id}>
                                <div className="flex items-center justify-center mx-auto rounded-full">
                                    <img
                                        className="object-cover w-28 h-auto rounded-full"
                                        src={item.img}
                                    />

                                </div>
                                <h3 className="mt-8 text-lg font-semibold text-black">
                                    {item.title}
                                </h3>
                                <p className="mt-4 text-sm text-gray-600">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    );
};

export default MainVitti;