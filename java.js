
function janiTime(){
let a = new Date();
let time = a.getHours() + ":" + a.getMinutes() + ":" + a.getSeconds(); 
let date = a.toLocaleDateString();
let showClock = `${time}  ${date} `; 
document.querySelector('#clock').innerHTML = showClock;

}


setInterval(janiTime, 1000);