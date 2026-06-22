// function Button(props) {

//     return(
//         <>
//         <button style={{backgroundColor:props.color, color: props.textColor }}>{props.text}</button>
//         <button></button>
//         </>
//     )
// }
// export default Button;
 
function Button({text, color, textColor}){
return(
    <>
        <button style={{backgroundColor:color , color:textColor}}>
            {text}
        </button>
    </>
)

}
export default Button;