
import whyUsData from "../../public/data/whychoose.json";

const WhyUsSection = () => {
  return (
    <div className="why-container">
      <section className="py-0 sm:py-16 lg:py-24 -mb-20 ">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
              বৃত্ত লার্নিং কেনো ?
            </h2>
            <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">
              আমাদের কোর্স সবার থেকে আলাদা কেনো সেটি বুঝতে হলে আমাদের ফ্রি কোর্সগুলোই যথেষ্ট !
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 mt-12 lg:mt-16 xl:gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {whyUsData.map((item) => (
              <div key={item.id} className="overflow-hidden block-bg rounded shadow">
                <div className="p-8">
                  <div className="flex flex-col justify-center items-center">
                    <img
                      className="flex-shrink-0 w-20 h-auto mb-5"
                      src={item.image}
                      alt={item.title}
                    />
                    <div>
                      <p className="text-3xl font-semibold text-black">{item.title}</p>
                    </div>
                    <p className="text-xl leading-relaxed text-center text-black mt-7 des-p">
                      {item.description}
                    </p>
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

export default WhyUsSection;