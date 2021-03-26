import React, { useState } from "react";
import Header from "./Component/Header/header";
import BodyRouter from "./Component/Route/Router";
import getGeoLoca from "./util/getGeoLocation";

export const GeoContext = React.createContext();

function App() {
  let geoLocaInit = getGeoLoca();

  const [geoLocation, setGeoLocation] = useState(geoLocaInit);
  const resetGeoLocation = () => {
    // data fetch again
    setGeoLocation(getGeoLoca());
  };
  const geoObject = {
    geoLocation: geoLocation,
    setGeoLocation: () => {
      resetGeoLocation();
    },
    setCustomGeoLocation: (distance, latitude, longitude) => {
      console.log(distance);
      setGeoLocation({ latitude: latitude, longitude: longitude });
      //data fetch again
    },
  };

  return (
    <GeoContext.Provider value={geoObject}>
      <Header />
      <BodyRouter />
    </GeoContext.Provider>
  );
}

export default App;
