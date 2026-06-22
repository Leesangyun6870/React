import { useState } from "react";

function SelectBox() {
  const [fruit, setFruit] = useState("");
  const [agree, setAgree] = useState(false);
  function handleChange(e) {
    setFruit(e.target.value);
  }
  // 동의하기 (체크박스)
  function handleCheckbox(e) {
    setAgree(e.target.checked);
  }

  return (
    <div style={{ padding: "20px", background: "#ddd" }}>
      <select onChange={handleChange}>
        <option value="">과일 선택</option>
        <option value="사과">사과</option>
        <option value="참외">참외</option>
        <option value="바나나">바나나</option>
        <option value="포도">포도</option>
      </select>

      <h3>선택한 과일 : {fruit}</h3>
      <div style={{ padding: "20px", background: "#b3fef7" }}></div>

      <label>
        <input type="checkbox" checked={agree} onChange={handleCheckbox} />
        약관에 동의합니다.
      </label>
      <p>{agree ? "✅동의 완료!" : "❌아직 동의하지 않았어요!"}</p>
    </div>
  );
}

export default SelectBox;
