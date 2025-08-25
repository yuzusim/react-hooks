import { useState } from "react";

const useInput = (initiaValue, validator) => {
  const [value, setValue] = useState(initiaValue);

  const onChange = (event) => {
    const {
      target: { value },
    } = event;

    let willUpdate = true;
    if (typeof validator === "function") {
      willUpdate = validator(value);
    }

    if (willUpdate) {
      setValue(value);
    }

    console.log(event.target.value); // 사용자 입력 출력
  };
  return { value, onChange };
};

const Input = () => {
  const maxLen = (value) => !value.includes("@");
  const name = useInput("Mr: ", maxLen);
  return (
    <div className="App">
      <h1>Hello</h1>
      <input placeholder="Name" {...name} />
    </div>
  );
};
export default Input;
