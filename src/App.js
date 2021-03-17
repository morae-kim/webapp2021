import React, { useState } from "react";
import Header from "./Component/Header/header";
import BodyRouter from "./Component/Route/Router";
import getGeoLocation from "./util/getGeoLocation";

export const UserDispatch = React.createContext(null);

function App() {
  const [geoLocation, setGeoLocation] = useState(getGeoLocation());
  const resetGeoLocation = () => {
    // data fetch again
    setGeoLocation(getGeoLocation());
  };
  return (
    <>
      <Header />
      <BodyRouter resetGeoLocation={resetGeoLocation} />
    </>
  );
}

export default App;
