import React, { useEffect, useState, useRef } from "react";

const useNetwork = (onchange) => {
  // status 상태를 정의
  // 초기값은 현재 온라인 상태(navigator.onLine).
  const [status, setStatus] = useState(navigator.onLine);

  const handleChange = () => {
    // 온라인 상태가 바뀔 때 호출되는 함수
    if (typeof onchange === "function") {
      // onchange가 함수로 전달되었으면 실행
      onchange(navigator.onLine); // 온라인이면 true, 오프라인이면 false 전달
    }
    setStatus(navigator.onLine);
    // 상태 업데이트: 컴포넌트가 다시 렌더링됨
  };
  useEffect(() => {
    // 컴포넌트가 마운트될 때 이벤트 리스너 등록
    window.addEventListener("online", handleChange); // 온라인 상태가 되면 handleChange 호출
    window.addEventListener("offline", handleChange); // 오프라인 상태가 되면 handleChange 호출
    return () => {
      // 컴포넌트가 언마운트될 때 이벤트 리스너 제거
      window.removeEventListener("online", handleChange);
      window.removeEventListener("offline", handleChange);
    };
  }, []); // 빈 배열: 마운트/언마운트 시 한 번만 실행
  return status;
};

const Network = () => {
  // 온라인 상태 변경 시 실행될 콜백 함수
  const handleNetworkChange = (online) => {
    console.log(online ? "online" : "offline"); // 콘솔에 상태 출력
  };

  // useNetwork 훅 호출: 현재 온라인 상태와 상태 변경 콜백 전달
  const onLine = useNetwork(handleNetworkChange);

  return (
    <div className="App">
      {/* 상태에 따라 화면에 "online" 또는 "offline" 표시 */}
      <h1>{onLine ? "online" : "offline"}</h1>
    </div>
  );
};

export default Network;
