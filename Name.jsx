import { useState } from "react";

function Name() {
  const [inputname, setInputname] = useState("");
  const [saveName, setSaveName] = useState("");

  function handleChange(e) {
    setInputname(e.target.value);
  }

  function handleSave() {
    setSaveName(inputname);
    setInputname("");
  }

  return (
    <>
      <h1>이름저장하기</h1>

      <input
        type="text"
        placeholder="이름을 입력하세요"
        value={inputname}
        onChange={handleChange}
      />

      <button onClick={handleSave}>저장</button>

      <p>{saveName && `안녕하세요, ${saveName}`}</p>
    </>
  );
}

export default Name;