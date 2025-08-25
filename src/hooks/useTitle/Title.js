import { useEffect, useState } from "react";

const useTitle = (initialTitle) => {
  // 상태 설정
  // 여기서 initialTitle은 title 상태의 초기값
  const [title, setTitle] = useState(initialTitle); // 여기서 초기값 설정
  const updateTitle = () => {
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerText = title; // 실제 <title> DOM 변경
  };
  useEffect(updateTitle, [title]); // title이 바뀔 때마다 실행
  return setTitle; // 외부에서 title을 바꿀 수 있도록 함수 반환
};

const Title = () => {
  const titleUpdate = useTitle("Loading...");
  setTimeout(() => titleUpdate("Home"), 5000);

  return (
    <div className="App">
      <h1>Hi</h1>
    </div>
  );
};

export default Title;
