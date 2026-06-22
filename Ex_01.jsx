import { useState } from "react";

function Ex_01() {
  // 기본상태
  const [emoji, setEmoji] = useState("^^");

  // 이모지 변경 함수
  function changeEmoji() {
    //console.log("클릭");
    setEmoji("바뀌는 감정");
  }
  // 토글 이모지 변경 함수
  function toggleEmoji() {
    setEmoji(emoji === "^^" ? "--" : "^^");
  }

  // 입력창 값 출력
  // name이라는 상태변수 만들고, 초기값을 빈 문자열("")
  const [name, setname] = useState("");
  // setName은 name 상태를 바꿀때 사용하는 함수
function handleChange(e){
    // console.log(e.target.value);
    setname(e.target.value)
    //
}
  return (
    <>
      <hr />
      <p>지금 기분: {emoji} </p>
      <button onClick={changeEmoji}>기분 바꾸기</button>
      <button onClick={toggleEmoji}>토글 기분 바꾸기</button>
      {/*입력창 값 출력하기*/}
      <input
        style={{ display: "block", marginTop: "20px", padding: "10px" }}
        type="text"
        placeholder="이름을 입력하세요."
        // 입력창에 보여지는 값은 name 상태와 같음 (양방향 바인딩)
        value={name}
      onChange ={handleChange}


      />
      <p>안녕하세요. <strong>{name || "..."}</strong>님! 반가워요 </p>
    </>
  );
}
export default Ex_01;
