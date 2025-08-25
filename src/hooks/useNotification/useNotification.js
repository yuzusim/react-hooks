import React, { useEffect, useState, useRef } from "react";

const useNotification = (title, option) => {
  // 브라우저가 Notification API를 지원하지 않으면 그냥 종료
  if (!("Notification" in window)) {
    return;
  }

  //  알림 실행 함수
  const fireNotif = () => {
    // 아직 사용자가 알림 권한을 허용하지 않은 경우
    if (Notification.permission !== "granted") {
      // 알림 권한이 아직 허용되지 않았다면 권한 요청을 보냄
      Notification.requestPermission().then((permission) => {
        // 사용자가 권한 요청에 응답하면 결과가 permission으로 들어옴
        if (Notification.permission === "granted") {
          // 만약 권한을 허용했다면 → 알림 띄우기
          new Notification(title, option);
        } else {
          // 권한을 거절했거나(default) 아무것도 안 했으면 그냥 종료
          return;
        }
      });
    } else {
      // 권한이 이미 허용된 경우 → 바로 알림 띄우기
      new Notification(title, option);
    }
  };
  // 알림 실행 함수를 반환하여 컴포넌트에서 사용할 수 있게 함
  return fireNotif;
};

const NotificationTest = () => {
  // useNotification 훅 호출
  // 훅에서 title과 옵션(body 등)을 받아 알림 실행 함수를 반환
  const triggerNotif = useNotification("Can I steal your kimchi?", {
    body: "I love kimchi dont you",
  });
  return (
    <div className="App" style={{ height: "1000vh" }}>
      {/* 버튼 클릭 시 triggerNotif 함수를 호출하여 알림 실행 */}
      <button onClick={triggerNotif}>Hello</button>
    </div>
  );
};

export default NotificationTest;
