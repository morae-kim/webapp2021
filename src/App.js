import React, { useState } from "react";
import Header from "./Component/Header/header";
import BodyRouter from "./Component/Route/Router";
import getGeoLocation from "./util/getGeoLocation";

export const UserContext = React.createContext({
  geo: null,
  setGeo: () => {},
});

function App() {
  const [geoLocation, setGeoLocation] = useState(getGeoLocation());
  const resetGeoLocation = () => {
    // data fetch again
    setGeoLocation(getGeoLocation());
  };
  return (
    <UserContext.Provider value={geoLocation}>
      <Header />
      <BodyRouter resetGeoLocation={resetGeoLocation} />
    </UserContext.Provider>
  );
}

export default App;
