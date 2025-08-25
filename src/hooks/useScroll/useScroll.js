import React, { useEffect, useState, useRef } from "react";

const useScroll = () => {
  // status 상태를 정의, 초기값  x: 0, y: 0
  const [status, setStatus] = useState({
    x: 0,
    y: 0,
  });

  const onScroll = () => {
    // 상태 업데이트
    setStatus({ y: window.scrollY, x: window.scrollX });
  };
  useEffect(() => {
    // 컴포넌트가 마운트될 때 이벤트 리스너 등록
    window.addEventListener("scroll", onScroll);
    return () => {
      // 컴포넌트가 언마운트될 때 이벤트 리스너 제거
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
  return status;
};

const Scroll = () => {
  // y만 가져옴
  const { y } = useScroll();

  return (
    // <div className="App" style={{ height: "1000vh" }}>
    // </div>

    <h1
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        color: y > 100 ? "red" : "blue",
        zIndex: 9999,
      }}
    >
      Hi, Scroll Y: {y}px
    </h1>
  );
};

export default Scroll;
