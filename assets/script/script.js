function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function changeColor() {
  const titleElement = document.getElementById('titulo');
  titleElement.style.color = getRandomColor();
}

setInterval(changeColor, 50); // Muda a cor a cada 500 milissegundos (0,5 segundos)

function vibrar() {
  navigator.vibrate([500, 100, 500]); // Padrão de vibração: 200ms vibração, 100ms pausa, 200ms vibração
}

let str = "";
let display = document.querySelector(".tela");
let buttons = document.querySelectorAll(".buttonbox");
buttons.forEach(function(button){
    button.addEventListener("click", function(dets){
        if (dets.target.innerHTML == "=") {
            try{
                str = eval(str);
                display.innerHTML = str;
            }catch(error){
                str = "Error";
                display.innerHTML = str;
            }
            
        }
        else if (dets.target.innerHTML == "C") {
            str = "";
            display.innerHTML = str;
        }
        else if (dets.target.innerHTML == "DEL") {
            str = str.slice(0, -1);
            display.innerHTML = str;
        }
        else{
            str = str + dets.target.innerHTML;
            display.innerHTML = str;
        }
    })
})