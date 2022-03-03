const cityName = document.getElementById('cityName');
const submitBtn = document.getElementById('submitBtn');

const city_name = document.getElementById('city_name');
const temp_real_val = document.getElementById('temp_real_val');
const temp_status = document.getElementById('temp_status');
const datahide = document.querySelector('.middle_layer');

const getInfo = async(event) => {
    event.preventDefault();

    let cityVal = cityName.value;

    if(cityVal === ""){
        city_name.innerText = `Plz write the name before search`;
        datahide.classList.add("data_hide");
    }else{

        try{
           
           let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=93a1d51aa1bbe3ff484ccf5c50f4d56f`
            const response = await fetch(url);

            const data = await response.json();
            const arrData = [data];

            city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;
            temp_real_val.innerText = (arrData[0].main.temp/10).toFixed(2);
            const tempMood = arrData[0].weather[0].main;
            console.log(tempMood);

            //condition to check sunny or cloudy
            if (tempMood == "Clear") {
            temp_status.innerHTML =
                "<i class='fas  fa-sun' style='color: #eccc68;'></i>";
            } else if (tempMood == "Clouds") {
            temp_status.innerHTML =
                "<i class='fas  fa-cloud' style='color: #f1f2f6;'></i>";
            } else if (tempMood == "Rain") {
            temp_status.innerHTML =
                "<i class='fas  fa-cloud-rain' style='color: #a4b0be;'></i>";
            } else {
            temp_status.innerHTML =
                "<i class='fas  fa-cloud' style='color:#f1f2f6;'></i>";

            }
            datahide.classList.remove('data_hide');
            cityVal = "";
           
       
        }catch{
            cityVal = " ";
            datahide.classList.add("data_hide");
            city_name.innerText =  `please enter the proper city name`;
            console.log('please add the proper city name');
        }
        
    }
}

submitBtn.addEventListener('click', getInfo);

const day_name = document.getElementById("day")
const today_date = document.getElementById("today_date")
const curDate = document.getElementById("Date");

var weekday = new Array(6);
weekday[0] = "Sun";
weekday[1] = "Mon";
weekday[2] = "Tue";
weekday[3] = "Web";
weekday[4] = "Thu";
weekday[5] = "Fri";
weekday[6] = "Sat";

var months =[
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
]
var now = new Date();
var day = now.getDay();
var month = now.getMonth();
var date = now.getDate();
 var hour = now.getHours();
 var minute = now.getMinutes();
var period ="AM";
if(hour>11)
period= "PM"

if(hour>12)
hour = hour-12;
if(hour<10)
hour = "0"+hour;
if(minute<10)
minute= "0"+minute;
day_name.innerText = `${weekday[day]}`
today_date.innerText = `${months[month]} ${date} | ${hour}:${minute} ${period}`
// curDate.innerHTML = `${weekday[day]} | ${months[month]} ${date} | ${hour}:${minute} ${period}`;