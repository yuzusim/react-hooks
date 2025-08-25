import React, { useEffect, useState, useRef } from "react";

const useConfirm = (message = "", onConfirm, onCancel) => {
  if (onConfirm && typeof onConfirm !== "function") {
    return;
  }
  if (onCancel && typeof onCancel !== "function") {
    return;
  }

  const confirmAction = () => {
    // ✅ window.confirm 으로 명시해야 ESLint 에러 안남
    if (window.confirm(message)) {
      onConfirm && onConfirm();
      // confirm 함수가 브라우저에 메시지를 띄우고
      // 사용자가 "확인"을 누르면 true 반환 → callback 실행
    } else {
      onCancel && onCancel();
    }
  };
  return confirmAction;
};

//   const useConfirm = (message = "", callback, rejection) => {
//     // if (!conConfirm || typeof onConfirm !== "function") {
//     //   return;
//     // }
//     if (!callback || typeof callback !== "function") {
//       return;
//     }

//     const confirmAction = () => {
//       if (confirm(message)) {
//         callback();
//         // confirm 함수가 브라우저에 메시지를 띄우고
//         // 사용자가 "확인"을 누르면 true 반환 → callback 실행
//       } else {
//         rejection();
//       }
//     };
//     return confirmAction;
//   };

const Confirm = () => {
  // 삭제 동작 함수
  const deleteWorld = () => console.log("삭제됨!");
  // 취소 동작 함수
  const abort = () => console.log("취소!");

  // useConfirm 훅 사용 (확인 메시지와 실행할 함수 전달)
  // 여기서는 취소까지 3개 인자 전달
  const confirmDelete = useConfirm(
    "정말 삭제하시겠습니까?",
    deleteWorld,
    abort
  );

  return (
    <div className="App">
      <button onClick={confirmDelete}>삭제하기</button>
    </div>
  );
};

export default Confirm;
