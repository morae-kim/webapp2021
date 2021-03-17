import { useCallback } from "react";
import { UserDispatch } from "../App";

function getGeoLocation() {
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition((position) => {
      return {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      };
    });
  } else {
    alert("위치 정보 사용 불가능");
  }
}

export default getGeoLocation;
