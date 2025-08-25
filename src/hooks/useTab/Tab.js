import { useState } from "react";

const content = [
  {
    tab: "Section 1",
    content: "I'm the content of the Section 1",
  },
  {
    tab: "Section 2",
    content: "I'm the content of the Section 2",
  },
];

// 커스텀 훅
const useTabs = (initialTab, allTabs) => {
  // if (!allTabs || !Array.isArray(allTabs)) {
  //   return;
  // }
  const [currentIndex, setCurrentIndex] = useState(initialTab);

  // allTabs가 유효한 배열이 아니면 빈 배열로 처리
  const tabs = Array.isArray(allTabs) ? allTabs : [];

  return {
    currentItem: allTabs[currentIndex] || null, // 현재 보여줄 콘텐츠
    changeItem: setCurrentIndex, // 탭을 바꿀 때 사용하는 함수
  };
};

const Tab = () => {
  const { currentItem, changeItem } = useTabs(0, content);
  return (
    <div className="App">
      <h1>Hello</h1>
      {content.map((section, index) => (
        <button key={index} onClick={() => changeItem(index)}>
          {section.tab}
        </button>
      ))}

      <div>{currentItem.content}</div>
    </div>
  );
};
export default Tab;
