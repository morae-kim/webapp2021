import React, { useState, useContext } from "react";
import { RenderAfterNavermapsLoaded, NaverMap, Marker } from "react-naver-maps"; // 패키지 불러오기
import { GeoContext } from "../../../App";
import storeData from "../../../test_data/store_data.json";
import "./marker.css";
import legend from "../../../data/legend.json";

function Map() {
  const geo = useContext(GeoContext);
  const [zoomState, setZoomState] = useState(15);
  const findRealDistance = () => {
    const temp = String(zoomState);
    return legend[temp];
  };

  const getDataByZoomChanged = (zoom) => {
    setZoomState(zoom);
    // data fetch(zoom, x좌표, y좌표)
  };

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
        mapDivId={"react-naver-map"} // default: react-nave
        p
        style={{
          width: "100%", // 네이버지도 가로 길이
          height: "80vh", // 네이버지도 세로 길이
        }}
        defaultCenter={{
          lat: geo.geoLocation.latitude,
          lng: geo.geoLocation.longitude,
        }} // 지도 초기 위치
        defaultZoom={15} // 지도 초기 확대 배율 => 해
        onMouseover={scroll}
        onZoomChanged={(zoom) => getDataByZoomChanged(zoom)}
        onCenterChanged={(center) => {
          const distance = findRealDistance();
          geo.setCustomGeoLocation(distance, center.x, center.y);
        }}
      >
        {storeData.stores.map((store) => (
          <Marker
            key={store.store_id}
            position={{ lat: store.latitude, lng: store.longitude }}
            animation={2}
            icon={{
              content:
                zoomState >= 14
                  ? [
                      '<div class="cs_mapbridge">',
                      "<div class='marker'>",
                      `${store.store_name}`,
                      "</div>",
                      "</div>",
                    ].join("")
                  : "<div class='zoom-out-marker'></div>",
            }}
            onClick={() => alert("hello")}
          />
        ))}
      </NaverMap>
    </RenderAfterNavermapsLoaded>
  );
}
export default Map;
