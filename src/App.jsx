import Location from "./prayers/Location";
import Prayers from "./prayers/Prayers";
// import Prayers from "./prayers/Prayers";

function App() {
  return (
    <>
      <div className="w-[100vw] h-[100vh] flex justify-center items-center bg-[#1d1c1c]">
        <div className="Mycontainer">
        
          <Location />
           <Prayers />
        </div>
      </div>
    </>
  );
}

export default App;
