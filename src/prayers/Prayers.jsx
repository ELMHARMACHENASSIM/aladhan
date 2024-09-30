import PrayerCard from "./PrayerCard";
import fajr from "../assets/images/Fajr.jpg";
import dohor from "../assets/images/dohor.jpg";
import alasr from "../assets/images/alasr.jpg";
import maghrib from "../assets/images/maghrib.jpg";
import isha from "../assets/images/isha.jpg";
import { useMyContext } from "../components/useTimeContext";

const Prayers = () => {
  const { dataTime } = useMyContext();
  return (
    <div className="pt-[20px]">
      <div className="Maycontainer ">
        <div className="w-[100%] grid grid-cols-5 gap-[20px]">
          <PrayerCard
            title="Fajr"
            image={fajr}
            timing={dataTime?.Fajr || "N/A"}
          />
          <PrayerCard
            title="Dohor"
            image={dohor}
            timing={dataTime?.Dhuhr || "N/A"}
          />
          <PrayerCard
            title="Alasr"
            image={alasr}
            timing={dataTime?.Asr || "N/A"}
          />
          <PrayerCard
            title="Maghrib"
            image={maghrib}
            timing={dataTime?.Maghrib || "N/A"}
          />
          <PrayerCard
            title="Isha"
            image={isha}
            timing={dataTime?.Isha || "N/A"}
          />
        </div>
      </div>
    </div>
  );
};

export default Prayers;
