import Slider from '../Swiper/Slider';

const CourseSlider = () => {
  return (
    <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
    <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
      <div className="flex items-end justify-between">
        <div className="flex-1 text-center lg:text-left">
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
            সেরা কোর্স সমূহ
          </h2>
          <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600 lg:mx-0">
            আমাদের সেরা কিছু কোর্স যেগুলো আপনাদের দক্ষ করতে যথেষ্ট সাহায্য
            করবে।
          </p>
        </div>
      </div>
      <div className='pt-5'><Slider/></div>
    </div>
  </section>
  );
};

export default CourseSlider;