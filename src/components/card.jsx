function WorkCard({title, year, tool, bg, img}){
 return(
    <>
    <div className="card" style={{ backgroundColor: bg }}>
        <img src={img} alt={title} />
        <h2>{title}</h2>
        <p>제작 기간:{year}</p>
        <p>사용툴 :{tool}</p>
    </div>
    </>
 )

}
export default WorkCard;