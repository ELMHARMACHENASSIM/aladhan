

const PrayerCard = ({ title, image, timing }) => {
  
  return (
    <div className="w-[100%] h-[500px] relative bg-white ">
      <div className="absolute w-[100%] h-[100%] ">
        <img
          src={image}
          alt=""
          srcSet=""
          className=" w-[100%] h-[100%] object-cover"
        />
      </div>
      <div className="bg-[#2b2b2b] absolute bottom-0 left-0 w-[100%] h-[40%] p-[10px] text-center flex justify-center items-center">
        <div className="">
          <h1 className="text-white po-b text-[35px] ">{title}</h1>
          <h2 className="text-white po-ex text-[70px] ">{timing}</h2>
        </div>
      </div>
    </div>
  );
};

export default PrayerCard;
