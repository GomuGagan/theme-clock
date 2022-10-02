const hourEl= document.querySelector(".hour");
const minuteEl= document.querySelector(".minute");
const secondEl= document.querySelector(".second");
const dateEl= document.querySelector(".date");
const timeEl= document.querySelector(".time");
const toggle= document.querySelector(".toggle");

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const months = ["Jan", "Feb", "Ma", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

toggle.addEventListener("click", (e)=>{
    const html = document.querySelector("html");

    if (html.classList.contains("dark")){
        html.classList.remove("dark");
        e.target.innerHTML = "Dark Mode";
    } else{
        html.classList.add("dark");
        e.target.innerHTML = "Light Mode";

    }

});

function getTime(){
    const time = new Date();
    const date = time.getDate();
    const month = time.getMonth();
    const day = time.getDay();
    const hours = time.getHours();
    const seconds = time.getSeconds();
    const minutes = time.getMinutes();
    const hoursForClock = hours % 12;
    const ampm = hours >=12 ? "PM" : "AM";

    hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(hoursForClock, 0, 11, 0, 360)}deg)`
    minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(minutes, 0, 59, 0, 360)}deg)`
    secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(seconds, 0, 59, 0, 360)}deg)`
    
    timeEl.innerHTML = `${hoursForClock}:${minutes < 10 ? `0${minutes}` : minutes} ${ampm}`;
    dateEl.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span>`

};


// from stackOverflow
function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
};


getTime();

setInterval(getTime, 1000);

