import React, { useEffect, useState, useRef } from "react";

const useClick = (onClick) => {
  const element = useRef();
  useEffect(() => {
    // 전달된 onClick이 함수인지 확인
    // if (typeof onclick !== "funtion") {
    //   return;
    // }

    // 컴포넌트가 mount 되었을 때 실행
    if (element.current) {
      element.current.addEventListener("click", onClick);
    }

    // 컴포넌트가 unmount 될 때 실행 (cleanup)
    return () => {
      if (element.current) {
        element.current.removeEventListener("click", onClick);
      }
    };
  }, []); // [] → 의존성 배열이 없으니까 렌더링 될 때마다 실행됨

  return element;
};

const Click = () => {
  // 클릭 시 실행할 함수
  const sayHello = () => console.log("say hello");

  // useClick 호출 → ref 반환됨
  const title = useClick(sayHello);
  return (
    <div className="App">
      <h1 ref={title}>Hi</h1>
    </div>
  );
};
export default Click;
