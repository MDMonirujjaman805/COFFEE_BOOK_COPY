import myImage from "./../assets/banner.jpg"
const Banner = () => {
  return (
    <div className=" bg-base-200 my-8 sm:h-full  md:min-h-[600px]">
     <img className="object-cover" src={myImage} alt="Banner-Image" />
    </div>
  );
};

export default Banner;
