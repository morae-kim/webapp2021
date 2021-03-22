export default function getGeoLoca() {
  const obj = {
    latitude: 0,
    longitude: 0,
  };
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition((position) => {
      obj.latitude = position.coords.latitude;
      obj.longitude = position.coords.longitude;
    });
  } else {
    console.log("위치 정보 사용 불가능");
    alert("위치 정보 사용 불가능");
  }
  return obj;
}
