import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Ex from "./Ex.jsx";
import Test from "./test.jsx";
import Ex_01 from "../Ex_01.jsx";
import Name from "../Name.jsx";
import SelectBox from "../selectbox.jsx";
import Button from "./components/Button.jsx";
import WorkCard from "./components/card.jsx";
const fruitList = [
  { name: "사과", price: 1000 },
  { name: "바나나", price: 1500 },
  { name: "포도", price: 2000 },
];

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <Test />
    <Ex />
    <Ex_01 />
    <hr />
    <Name />
    <SelectBox />
    {/* button */}
    <Button text="로그인" />
    <Button text="회원가입" />
    <Button text="탭 버튼" />
    {/*props활용 - 부모 컴포넌트가 자식 컴포넌트에게 데이터를 전달하는 방법 */}
    {/* 카드 */}
    <div className="card-content">
      <WorkCard
        title="클론코딩"
        year="26.04.05~26.04.10"
        tool="HTML, CSS, Javascript"
        img="/images/coffee-blue.jpg"
      />
      <WorkCard title="클론코딩" year="26.04.05~26.04.12" tool="FIGMA" />
      <WorkCard
        title="클론코딩"
        bg="yellow"
        year="26.04.05~26.04.10"
        tool="FIGMA"
        img="/images/coffee-gray.jpg"
      />

      <WorkCard
        title="UIUX"
        year="26.05.05~26.04.10"
        tool="Figma"
        img="/images/coffee-pink.jpg"
      ></WorkCard>
    </div>
    {/* {map 사용 props 가져오기} */}
    <div style={{display: "flex", gap:"10px", marginTop:"20px"}}>

    
    {fruitList.map((Fruits, index) => (
      <Fruits key={index} name={Fruits.name} price={fruit.price} />
    ))}
    </div>

  </StrictMode>,
);
