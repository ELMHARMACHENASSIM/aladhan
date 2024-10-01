import Location from "./prayers/Location";
import Prayers from "./prayers/Prayers";
// import Prayers from "./prayers/Prayers";

function App() {
  return (
    <>
      <div className="w-[100vw] xl:h-[100vh] 2xl:h-[100vh] 3xl:h-[100vh] sm:h-[100%] md:h-[100%] lg:h-[100%] flex justify-center items-center bg-[#1d1c1c]">
        <div className="Mycontainer">
        
          <Location />
           <Prayers />
        </div>
      </div>
    </>
  );
}

export default App;
