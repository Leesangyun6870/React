import { useState } from "react";

function Ex() {
  function getName() {
    return "반가워요~";
  }
  // 함수에 매개변수 전달
  function greet(name) {
    alert(`${name}님 환영합니다.`);
  }
  //useState 함수
  const [count, setCount] = useState(0);

  function increase() {
    setCount(count + 1);
  }
  function decrease() {
    setCount(count - 1);
  }

  // 좋아 버튼 카운트
  const [like, setLike] = useState(0);
  function plus() {
    setLike(like + 1);
  }
  // 배열 출력
  const menus = ["HTML", "CSS", "JS", "React"];

  return (
    <>
      <h1>{getName()}</h1>
      {/*함수에 매개변수 전달*/}
      <button onClick={() => greet("김수철")}>인사하기</button>

      {/* useState 함수*/}
      <h2>{count}</h2>
      <button onClick={increase}> +1 증가 </button>
      <button onClick={decrease}> -1 감소 </button>

      {/* 좋아요 버튼 클릭시 카운트 */}
      <p>좋아요 : {like}</p>
      <button onClick={plus}>좋아요 1</button>

      {/*배열출력*/}
      <ul>
        {/* key={index} - 각항목을 구별하기 위한 이름표*/}
        {menus.map((menu, index) => {
          return <li key={index}>{menu}</li>;
        })}
      </ul>
    </>
  );
}
export default Ex;
