/*var select = document.getElementById("opc");
var opcaoTexto = select.options[select.selectedIndex].text;
var opcaoValor = select.options[select.selectedIndex].value;
document.querySelector("ptc").innerHTML = opcaoTexto;
*/

function menutrop(){
    let men =  document.querySelector(".menu");
   if(men.style.display == "none"){
    men.style.display = "block";
   }
   else{
    men.style.display = "none"
   }
   let menutrop = document.querySelector(".img_trop")
   if(menutrop.style.display == "block"){
    menutrop.style.display="none"
   }
   else{
    menutrop.style.display = "block";
   }

}
    let name =  document.getElementById("boh");
function horas(){
    let hoas = new Date();
    let hora= hoas.getHours()
    let minut = hoas.getMinutes();
    let segun = hoas.getSeconds();

  
    name.innerHTML=`${zero(hora)}:${zero(minut)}:${zero(segun)}`;
};
function zero (time){
    return time < 10? `0${time}:`:time;
}
setInterval(horas,200);