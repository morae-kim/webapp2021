import React, { useState, useContext } from "react";
import {
  RenderAfterNavermapsLoaded,
  NaverMap,
  Marker,
  Rectangle,
} from "react-naver-maps"; // 패키지 불러오기
import { withNavermaps } from "react-naver-maps/dist/hocs-018c38ad";
import { GeoContext } from "../../../App";
import MarkerDetail from "./marker";
import storeData from "../../../test_data/store_data.json";
import styles from "./map.module.css";
import "./marker.css";

function Map() {
  const geo = useContext(GeoContext);
  const [zoomState, setZoomState] = useState();
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
      {/* TODO 
  현재 설정된 좌표에서 줌을 콜백받아, 줌에 
*/}

      <NaverMap
        mapDivId={"react-naver-map"} // default: react-nave
        p
        style={{
          width: "100%", // 네이버지도 가로 길이
          height: "85vh", // 네이버지도 세로 길이
        }}
        defaultCenter={{
          lat: geo.geoLocation.latitude,
          lng: geo.geoLocation.longitude,
        }} // 지도 초기 위치
        defaultZoom={15} // 지도 초기 확대 배율 => 해
        onMouseover={scroll}
        onZoomChanged={(zoom) => console.log(zoom)}
        onCenterChanged={(center) =>
          geo.setCustomGeoLocation(center.x, center.y)
        }
      >
        {storeData.stores.map((store) => (
          <Marker
            key={store.store_id}
            position={{ lat: store.latitude, lng: store.longitude }}
            animation={2}
            icon={{
              content: [
                '<div class="cs_mapbridge">',
                "<div class='marker'>",
                `${store.store_name}`,
                "</div>",
                "</div>",
              ].join(""),
            }}
            onClick={() => alert("hello")}
          />
        ))}

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
