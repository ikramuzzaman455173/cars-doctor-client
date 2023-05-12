import Banner1 from "../../../assets/images/banner/1.jpg";
import Banner2 from "../../../assets/images/banner/2.jpg";
import Banner3 from "../../../assets/images/banner/3.jpg";
import Banner4 from "../../../assets/images/banner/4.jpg";
import Banner5 from "../../../assets/images/banner/5.jpg";
import Banner6 from "../../../assets/images/banner/6.jpg";
const Banner = () => {
  const images = [
    {
      src: Banner1,
      alt: "banner1",
    },
    {
      src: Banner2,
      alt: "banner2",
    },
    {
      src: Banner3,
      alt: "banner3",
    },
    {
      src: Banner4,
      alt: "banner4",
    },
    {
      src: Banner5,
      alt: "banner5",
    },
    {
      src: Banner6,
      alt: "banner6",
    },
  ];

  return (
    <>
      <div className="carousel w-full h-[600px] rounded-md mt-10 mb-5">
        {images.map((image, index) => (
          <div
            key={index} id={`slide${index + 1}`}
            className={`carousel-item relative w-full ${index === 0 ? "current" : ""
              }`}
          >
            <img src={image.src} alt={image.alt} className="w-full rounded-xl shadow" />
            <div className="absolute bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] h-full flex items-center left-0 top-0 gap-8">
              <div className="text-white space-y-7 pl-[105px] w-[50%]">
                <h2 className="text-6xl font-bold">Affordable Price For Car Servicing</h2>
                <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                <div className="flex gap-4 my-4">
                  <button className="btn btn-error font-medium text-xl">Discover More</button>
                  <button className="btn btn-outline font-medium text-xl border-2 border-white text-white">Latest Projects</button>
                </div>
              </div>
            </div>

            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-4 gap-8">
              <a
                href={`#slide${index === 0 ? images.length : index}`}
                className="btn btn-circle"
              >
                ❮
              </a>
              <a
                href={`#slide${index === images.length - 1 ? 1 : index + 2}`}
                className="btn btn-circle bg-error border-0 text-white hover:bg-error"
              >
                ❯
              </a>
            </div>


          </div>
        ))}
      </div>
    </>
  );
};

export default Banner;



