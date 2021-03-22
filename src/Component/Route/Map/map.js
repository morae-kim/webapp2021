import React, { useState, useContext } from "react";
import { RenderAfterNavermapsLoaded, NaverMap, Marker } from "react-naver-maps"; // 패키지 불러오기
import { GeoContext } from "../../../App";

function Map() {
  const geo = useContext(GeoContext);
  console.log(geo);
  const scroll = () => {
    let location = document.querySelector("#router").offsetTop;
    window.scrollTo({ top: location, behavior: "smooth" });
  };

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
          height: "90vh", // 네이버지도 세로 길이
        }}
        defaultCenter={{
          lat: geo.geoLocation.latitude,
          lng: geo.geoLocation.longitude,
        }} // 지도 초기 위치
        defaultZoom={15} // 지도 초기 확대 배율 => 해
        onMouseover={scroll}
      >
        {/* <Marker
          position={{
            lat: geo.geoLocation.latitude,
            lng: geo.geoLocation.longitude,
          }}
        /> */}
      </NaverMap>
      {/* TODO
        백엔드 배열 가져와서 마커 설정 => 마커 이미지 수정
      */}
    </RenderAfterNavermapsLoaded>
  );
}
export default Map;
