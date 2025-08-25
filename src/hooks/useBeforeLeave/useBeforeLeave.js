import React, { useEffect, useState, useRef } from "react";

const useBeforeLeave = (onBefore) => {
  // onBefore가 함수가 아니면 훅 실행하지 않음
  // if (typeof onBefore !== "function") {
  //   return;
  // }

  // 마우스가 화면을 벗어나면 실행될 함수
  const handle = (event) => {
    // console.log("leaving"); // 화면을 벗어났을 때 콘솔에 "leaving" 출력
    // console.log(event);

    // 마우스가 화면 상단 바깥(탭, 주소창 쪽)으로 나갔을 때만 true가 됨
    const { clientY } = event;
    // if (clientY <= 0) {
    //   onBefore();

    // 수정버전
    // 훅(useEffect) 실행이 조건부
    // "React Hook은 항상 같은 순서로 호출돼야 한다" 규칙 위반이 발생
    if (clientY <= 0 && typeof onBefore === "function") {
      onBefore();
    }
  };
  useEffect(() => {
    // 컴포넌트가 마운트될 때 이벤트 리스너 등록
    document.addEventListener("mouseleave", handle);

    // 컴포넌트가 언마운트될 때 이벤트 리스너 제거 (메모리 누수 방지)
    return () => document.removeEventListener("mouseleave", handle);
  }, []); // 의존성 없이, 이벤트 추가 되는 것 막기 (빈 배열: 컴포넌트가 처음 렌더링될 때만 실행되도록)
};

const BeforeLeave = () => {
  // 마우스가 화면을 떠나기 전에 실행할 콜백 정의
  const beForLife = () => console.log("Pls dont leave");

  // 훅 호출, 콜백 전달
  useBeforeLeave(beForLife);

  return (
    <div className="App">
      <h1>Hello</h1>
    </div>
  );
};

export default BeforeLeave;
