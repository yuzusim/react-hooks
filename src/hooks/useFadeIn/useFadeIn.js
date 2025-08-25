import React, { useEffect, useState, useRef } from "react";

const useFadeIn = (duration = 1, delay = 0) => {
  // if (typeof duration !== "number" || typeof delay !== "number") {
  //   return;
  // }
  const element = useRef();
  useEffect(() => {
    // ref가 없으면 실행 안 함
    if (!element.current) return;
    // duration과 delay가 숫자가 아니면 실행 안 함
    if (typeof duration !== "number" || typeof delay !== "number") return;

    const { current } = element;
    // 지연 시간을 주려면 transition에 delay도 넣어야 함
    current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;

    current.style.opacity = 1; // 애니메이션 시작

    // if (element.current) {
    //   // ref가 연결된 DOM 노드가 있으면
    //   const { current } = element;
    //   // 지연 시간을 주려면 transition에 delay도 넣어야 함
    //   current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;

    //   current.style.opacity = 1; // 애니메이션 시작
    // }
  }, []); // 마운트될 때 한 번만 실행됨
  return { ref: element, style: { opacity: 0 } };
  // useFadeIn 훅에서 반환
  // 처음에 opacity 0으로 시작하도록 style을 반환
};

const FadeIn = () => {
  // 커스텀 훅에서 ref 객체를 가져옴
  const fadeInH1 = useFadeIn(1, 2); // 1초 동안, 지연 2초
  const fadeInP = useFadeIn(5, 10); // 5초 동안, 지연 10초
  return (
    <div className="App">
      <h1 {...fadeInH1}>Hello</h1>
      <p {...fadeInP}>lorem ipsum lalalalala</p>
      {/* ref 연결 */}
    </div>
  );
};
export default FadeIn;
