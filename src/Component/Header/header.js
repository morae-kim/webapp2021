import React from "react";
import style from "./header.module.css";
import PersonalInfo from "./Personal/personal_info";

function Header() {
  const info = [
    { key: 1, title: "방문", content: 13 },
    { key: 1, title: "리뷰", content: 2 },
    { key: 1, title: "팔로잉", content: 23 },
    { key: 1, title: "팔로워", content: 50 },
  ];

  return (
    <div className={`${style.container}`}>
      <div className={`${style.logo}`}>it 비전공자 프로젝트</div>
      <div className={`${style.personal_container}`}>
        <img
          src={
            "data:image/jpeg;base64,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"
          }
          alt={"프로필 사진"}
          className={style.profile_image}
        />
        <div className={`${style.profile_name}`}>{"비전공자"}</div>
      </div>
      <div className={`${style.personal_info_container}`}>
        {info.map((information) => (
          <PersonalInfo
            key={information.key}
            title={information.title}
            content={information.content}
          />
        ))}
      </div>
    </div>
  );
}

export default Header;