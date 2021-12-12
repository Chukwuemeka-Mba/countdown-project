const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4")



let futureDate = new Date(2021, 11, 27, 11, 30);

// let tempDate = new Date();
// let tempYear = tempDate.getFullYear();
// let tempMonth = tempDate.getMonth();
// let tempDay = tempDate.getDate();

// const futureDate = new Date(tempYear, tempMonth, tempDay + 10, 11, 30, 0)


const year = futureDate.getFullYear();
var month = futureDate.getMonth();
var month = months[month]
const hour = futureDate.getHours();
const mins =  futureDate.getMinutes();
const day = weekdays[futureDate.getDay()];
const date = futureDate.getDate();

giveaway.textContent = `Party Starts on ${day}, ${date} ${month} ${year} ${hour}: ${mins}am.`

const futureTime = futureDate.getTime()
    function getRemainingTime() {

        const today = new Date().getTime();
        const t = futureTime - today;

        // console.log(t);

        // 1sec = 1000ms
        // 1min = 60s
        // 1hr = 60min
        // 1day = 24hr

        const oneDay = 24 * 60 * 60 * 1000;
        const oneHr = 60 * 60 * 1000;
        const oneMin = 60*1000;


        const days = parseInt(t/oneDay);
        const hours = parseInt((t % oneDay) / oneHr);
        const minutes = parseInt((t % oneHr) / oneMin);
        const seconds = parseInt((t % oneMin) / 1000);


        // set values array

        const values = [days, hours, minutes, seconds];

        function format(item) {
            if(item < 10){
            return (item = `0${item}`);
        } 
        return item 
        }

        items.forEach(function (item, index){
            item.innerHTML = format(values[index]);
        });
        if (t < 0){
            clearInterval(countdown);
            deadline.innerHTML = `<h4 class="expired>Sorry 
            the party is Over</h4>`;
        }
        
    }
// countdown
let countdown = setInterval(getRemainingTime, 1000);
getRemainingTime();



        // const days = document.querySelector(".days")
        // const hours = document.querySelector(".hours")
        // const minutes = document.querySelector(".mins")
        // const seconds = document.querySelector(".secs")


        // days.textContent = parseInt(remDays);
        // hours.textContent = parseInt(remHours);
        // minutes.textContent = parseInt(remMins);
        // seconds.textContent = parseInt(remSecs);