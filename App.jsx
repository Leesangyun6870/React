function App() {
    const [color , setColor] = usestate("red")
    function handleChange(){

        setColor(e.target.value);
    }



  return (
    <>
      <section>
        <h1>종아하는 색 선택</h1>
    <PropsEx name="하경미"/>

        <select onChange={handleChange} value={color} style={{ padding: "10px", marginTop: "20px" }}>
          <option value="red">빨강</option>
          <option value="green">초록</option>
          <option value="blue">파랑</option>
          <option value="yellow">노랑</option>
        </select>
        <p style={{ marginTop: "20px" }}>
          당신 선택한 색은 <strong style={{color: color, padding:"10px", color:"#fff"}}>{color}</strong>
        </p>
      </section>
    </>
  );
}
export default App;
