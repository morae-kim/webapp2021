import React from "react";
import style from "./header.module.css";
import PersonalInfo from "./Personal/personal_info";

function Header() {

  
  
  const info = [
    { key: 1, title: "방문", content: 13 },
    { key: 2, title: "리뷰", content: 2 },
    { key: 3, title: "팔로잉", content: 23 },
    { key: 4, title: "팔로워", content: 50 },
  ];

  return (
    <div className={`${style.container}`}>
      <div className={`${style.logo}`}>it 비전공자 프로젝트</div>

      <div className={`${style.todayfood}`}>오늘의 음식은 막걸리 입니다. </div>
    </div>
  );
}

export default Header;
