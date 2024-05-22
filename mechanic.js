const container = document.querySelector("#container");
let draw;
let pregunta;
let boton=document.querySelector("#pixeles")
let contenedor=document.querySelector(".container")
boton.addEventListener("click",()=>{
    container.innerHTML=""
    pregunta=prompt("dime el numero de pixeles que no exceda los 100")
    if (pregunta < 0) {
        drawing();
      } else if (pregunta < 101) {
        drawing();
      }
})
let opacity = 10;

function drawing() {
  for (let i = 0; i <= pregunta * pregunta - 1; i++) {
    draw = document.createElement("div");
    let width = 1200 / pregunta;
    let height = 800 / pregunta;
    draw.style.width = `${width}px`;
    draw.style.height = `${height}px`;
    draw.classList.add("draw")
    container.appendChild(draw);
    draw.addEventListener("mouseenter", (e) => {
      let random = Math.floor(Math.random() * 10);
      //e.target.style.background ='#' + Math.floor(Math.random() * 16777215).toString(16);;
      //e.target.style.background="black"
      e.target.style.opacity=`${opacity+=10}%`
      if(opacity>100){
        opacity=10
      }
    });
  }
}