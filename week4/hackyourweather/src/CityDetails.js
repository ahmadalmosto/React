import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import CharCity from "./chart";

const CityDetails = () => {
  const [cityDetail, setCityDetail] = useState([]);
  const [cityName, setCityName] = useState("");
  const [error, setError] = useState({ status: false });
  const [loading, setLoading] = useState(false);
  const { cityId } = useParams();
  const history = useHistory();

  const fetchCityDetails = (id) => {
    setError({ status: false });
    setLoading(false);
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?id=${id}&units=metric&appid=108f014bfe0cd46be80da260931deb11`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setError({ status: false });
        setLoading(true);
        setCityDetail(data.list);
        setCityName(data.city.name);
      })
      .catch((error) => {
        setError({ status: true, message: error });
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchCityDetails(cityId);
    setError({ status: false });
  }, []);

  return (
    <div>
      <h2>{cityName}</h2>
      <CharCity cityDetail={cityDetail} />
      <button
        className="buttonSub"
        onClick={() => {
          history.goBack();
        }}
      >
        Home
      </button>
      {error && <p>{error.message}</p>}
      {loading && <p>Loading...</p>}
    </div>
  );
};
export default CityDetails;
