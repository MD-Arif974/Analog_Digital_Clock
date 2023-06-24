let hourHand = document.querySelector('#hour');
let minuteHand = document.querySelector('#minute');
let secondsHand = document.querySelector('#seconds');

let dHour = document.querySelector('#dHour');
let dMinute = document.querySelector('#dMinute');
let dSecond = document.querySelector('#dSecond');


setInterval(function(){
//    console.log("yes bro!!");

     let date = new Date();
     let hours = date.getHours();
     let minutes = date.getMinutes();
     let seconds = date.getSeconds();
     
     hrotation = 30 * hours + (minutes/2);
     mrotation = 6 * minutes;
     srotation = 6 * seconds;

     hourHand.style.transform = `rotate(${hrotation}deg )`;
     minuteHand.style.transform = `rotate(${mrotation}deg )`;
     secondsHand.style.transform = `rotate(${srotation}deg )`;

     dHour.innerText = (hours <= 12 ? hours : (hours - 12));
     dMinute.innerText = minutes;
     dSecond.innerText = seconds;
   
},1000)