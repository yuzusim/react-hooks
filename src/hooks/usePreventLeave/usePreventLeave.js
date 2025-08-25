import React, { useEffect, useState, useRef } from "react";

// 미리보기에서 URL 새창으로 봐야 호출되는 이벤트 리스너 볼 수 있음

const usePreventLeave = () => {
  // 브라우저가 페이지를 닫거나 새로고침할 때 호출되는 이벤트 리스너
  const listener = (event) => {
    event.preventDefault(); // 기본 동작(페이지 이동)을 막음
    // 크롬 멍청해서 이거  넣어 줘야 함
    event.returnValue = ""; // Chrome 등에서 경고창 표시를 위해 필요
  };

  // 페이지 떠나기 방지 활성화 함수
  const enablePrevent = () => window.addEventListener("beforeunload", listener);
  const disablePrevent = () =>
    window.addEventListener("beforeunload", listener);
  return { enablePrevent, disablePrevent };
};

const PreventLeave = () => {
  // usePreventLeave 훅 호출
  // protect: 페이지 떠나기 방지 활성화 함수
  // unprotect: 페이지 떠나기 방지 해제 함수
  const { enablePrevent, disablePrevent } = usePreventLeave();

  return (
    <div className="App">
      <button onClick={enablePrevent}>protect</button>
      <button onClick={disablePrevent}>unprotect</button>
    </div>
  );
};

export default PreventLeave;
