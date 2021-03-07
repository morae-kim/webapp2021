import React from "react";
import { RenderAfterNavermapsLoaded, NaverMap, Marker } from "react-naver-maps"; // 패키지 불러오기

function Map() {
  return (
    <RenderAfterNavermapsLoaded
      ncpClientId={"vmwwi5c4v1"} // 자신의 네이버 계정에서 발급받은 Client ID
      error={<p>Maps Load Error</p>}
      loading={<p>Maps Loading...</p>}
    >
      <NaverMap
        mapDivId={"react-naver-map"} // default: react-naver-map
        style={{
          width: "100%", // 네이버지도 가로 길이
          height: "60vh", // 네이버지도 세로 길이
        }}
        defaultCenter={{ lat: 37.554722, lng: 126.970833 }} // 지도 초기 위치
        defaultZoom={13} // 지도 초기 확대 배율
      >
        <Marker position={{ lat: 37.3595704, lng: 127.105399 }} />
      </NaverMap>
    </RenderAfterNavermapsLoaded>
  );
}
export default Map;
