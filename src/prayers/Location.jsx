import { useEffect, useState } from "react";
import customAxios from "../axiosapi/Fetchapi";
import FetchCountyAndCities from "../axiosapi/FetchCountryAndCities.json";
import moment from "moment-timezone";
import { useMyContext } from "../components/useTimeContext";


const Location = () => {
  const {setDataTime} = useMyContext();
  const [isoCountry, setIsoCountry] = useState([]);
  const [selectCountry, setSelectCountry] = useState("");
  const [cities, setCities] = useState([]);
  const [selectCity, setSelectCity] = useState("");
  const [selectNameCountry, setselectNameCountry] = useState("");
  // const [dataTime, setDataTime] = useState([]);
  const [timeZone, setTimeZone] = useState("");
  const [today, setToday] = useState("");
  let intervalId;
  function getCountry() {
    const data = FetchCountyAndCities.data;
    setIsoCountry(data);
  }

  const handleIsoCode = (e) => {
    const selectedIsoCode = e.target.value; // Get the selected ISO code from the event
    setSelectCountry(selectedIsoCode);

    // Use the selected ISO code directly to find the cities
    const countryData = isoCountry.find(
      (country) => country.isoCode === selectedIsoCode
    );
    if (countryData) {
      setCities(countryData.cities);
    }
    const countryName = isoCountry.find(
      (city) => city.isoCode === selectedIsoCode
    );
    if (countryName) {
      setselectNameCountry(countryName.name);
    }
    setSelectCity("");
    setDataTime("");
  };
  const handleCity = (e) => {
    const selectedCity = e.target.value; // Get the selected ISO code from the event
    setSelectCity(selectedCity);
  };

  const fetchDataCountry = async (country, city) => {
    const getData = await customAxios.get("/timingsByCity", {
      params: {
        country: country,
        city: city,
      },
    });
    setDataTime(getData.data.data.timings);
    const timeNow = getData.data.data.meta.timezone;
    setTimeZone(timeNow);
    intervalId = setInterval(() => {
      if (timeZone) {
        // Check if timeZone is valid
        const t = moment()
          .tz(timeZone || "UTC")
          .format("HH:mm:ss | MMM DD, YYYY"); // Proper format
        setToday(t); // Assuming setToday updates state or DOM
        // Print the formatted time
      } else {
        console.error("Invalid or undefined time zone");
      }
    }, 1000);
  };
  useEffect(() => {
    if (selectCountry && selectCity) {
      fetchDataCountry(selectCountry, selectCity);
    }
    getCountry();
    clearInterval(intervalId);

    // Cleanup the interval when component unmounts or when the time zone changes
    return () => clearInterval(intervalId);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectCountry, selectCity, timeZone, intervalId]);

  return (
    <>
      <div className="w-[100%] flex justify-between items-center text-white pb-[20px]">
        <div>
          <h1 className="po-b text-[25px]">
            {selectNameCountry + ":" + selectCity}
          </h1>
          <h1 className="po-ex text-[20px]">{today}</h1>
        </div>
        <div>
          <h1 className="po-b text-[25px]">Time left for next prayer</h1>
          <h1 className="po-ex text-[20px]">00:00:00</h1>
        </div>
        <div>
          <h1 className="po-b text-[25px]">Country</h1>
          <select
            name=""
            id=""
            className=" block w-full p-[10px] bg-[#292828]"
            onChange={handleIsoCode}
            defaultValue={"DEFAULT"}
          >
            <option selected defaultValue="DEFAULT" className="text-[#585858]">
              Choose a country
            </option>
            {isoCountry.map((country, index) => (
              <option key={index} value={country.isoCode}>
                {country.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <h1 className="po-b text-[25px]">CIty</h1>
          <select
            name=""
            id=""
            className=" block w-full p-[10px] bg-[#292828]"
            onChange={handleCity}
            defaultValue={"DEFAULT"}
          >
            <option selected defaultValue="DEFAULT" className="text-[#585858]">
              Choose a city
            </option>
            {cities.map((city, id) => (
              <option key={id} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>
      </div>
      <hr className=" opacity-[0.5]" />
      <div>
        {/* <h1 className="text-white">{dataTime.Fajr}</h1>
  <h1 className="text-white">{dataTime.Dhuhr}</h1>
  <h1 className="text-white">{dataTime.Asr}</h1>
  <h1 className="text-white">{dataTime.Maghrib}</h1>
  <h1 className="text-white">{dataTime.Isha}</h1> */}
      </div>
      {/* <Prayers dataTime={dataTime} /> */}
    </>
  );
};

export default Location;
