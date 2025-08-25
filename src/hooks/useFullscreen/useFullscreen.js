import React, { useEffect, useState, useRef } from "react";

// fullscreen 기능을 쉽게 사용하기 위한 커스텀 훅
const useFullscreen = (callback) => {
  // HTML 요소를 참조하기 위해 useRef 사용
  const element = useRef();

  // runCb 함수만듦 (callback 하기 위함)
  const runCb = (isFull) => {
    if (callback && typeof callback === "function") {
      callback(isFull);
    }
  };

  // 버튼 클릭 시 fullscreen 모드로 전환하는 함수
  const triggerFull = () => {
    // element.current가 존재하는지 확인하는 조건문
    if (element.current) {
      if (element.current.requestFullscreen) {
        // element.current가 존재하면 그 DOM 요소를 전체 화면으로 전환
        element.current.requestFullscreen();
      } else if (element.current.mozRequestFullScreen) {
        element.current.mozRequestFullScreen();
      } else if (element.current.webkitRequestFullScreen) {
        element.current.webkitRequestFullScreen();
      } else if (element.current.msRequestFullScreen) {
        element.current.msRequestFullScreen();
      }

      runCb(true);
    }
  };

  // Fullscreen 빠져나가기
  const exitrFull = () => {
    document.exitFullscreen(); // 전체 화면 종료
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitRequestFullScreen) {
      document.webkitExitRequestFullScreen();
    } else if (element.current.msExitFullScreen) {
      element.current.msExitFullScreen();
    }

    runCb(false);
  };

  // DOM 참조와 fullscreen 트리거, exitrFull 함수를 반환
  return { element, triggerFull, exitrFull };
};

const Fullscreen = () => {
  const onFulls = (isFull) => {
    // isFull이 true면 fullscreen 모드, false면 일반 모드
    console.log(isFull ? "we are full" : "we are small");
  };

  // 훅 호출, 콜백 전달
  const { element, triggerFull, exitrFull } = useFullscreen(onFulls);

  return (
    // <div className="App"></div>
    <div>
      <div ref={element}>
        <img src="https://i.ibb.co/R6RwNxx/grape.jpg" alt="grape" width="250" />
        <button onClick={exitrFull}>exit Fullscreen </button>
      </div>

      <button onClick={triggerFull}>Make Fullscreen </button>
    </div>
  );
};

export default Fullscreen;
