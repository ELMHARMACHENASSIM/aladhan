

const PrayerCard = ({ title, image, timing }) => {
  
  return (
    <div className="w-[100%] h-[500px] sm:h-[350px] lg:h-[400px] xl:h-[400px] first-letter:m relative bg-white ">
      <div className="absolute w-[100%] h-[100%] ">
        <img
          src={image}
          alt=""
          srcSet=""
          className=" w-[100%] h-[100%] object-cover"
        />
      </div>
      <div className="linear absolute bottom-0 left-0 w-[100%] h-[60%] p-[10px] text-center flex justify-center items-center">
        <div className="">
          <h1 className="text-white font-po-b text-[35px] ">{title}</h1>
          <h2 className="text-white font-po-l text-[85px] sm:text-[60px] md:text-[60px] lg:text-[70px] xl:text-[70px]">{timing}</h2>
        </div>
      </div>
    </div>
  );
};

export default PrayerCard;
