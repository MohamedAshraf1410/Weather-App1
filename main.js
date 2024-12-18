var demo = document.getElementById('demo')
var search = document.getElementById('search')
var fbutton=document.getElementById('fbutton')
var contact=document.getElementById('contact')
var home=document.getElementById('home')
var homebutton=document.getElementById('homebutton')
var contactbutton=document.getElementById('contactbutton')
var chomebutton=document.getElementById('chomebutton')

const regex = /.{3,}/;

const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let cities = ["roma", "london", "dubai", "manchester", "newyork", "damanhour", "cairo"]

async function getRespnse(city) {

    
    var response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=adadbb1c3c4f40d496b192552241612&q=${city}&days=3`);
    var result = await response.json();

    var cartona = ''
    for (var i = 0; i < result.forecast.forecastday.length; i++) {

        if (i == 0) {
            let day = result.forecast.forecastday[i].date
            let d = new Date(day)
            cartona += `<div class="card card1 text-white col-lg-4 shadow  " >
            <div class="card-header text-white-50 d-flex justify-content-between" ">
                 <h6>${weekdays[d.getDay(result.forecast.forecastday[i].date)]}</h6>
                  <h6>${result.forecast.forecastday[i].date}</h6>
               </div> 
           <div class="card-body  py-5"id="card1">
             <h4>${result.location.name}</h4>
             <h1 class="card-text">${result.current.temp_c}C</h1>
<img src="${"https:" + result.current.condition.icon}"></img>
<h5>${result.current.condition.text}</h5>
<div class="mt-4 pt-5"><span><img src="./icon-umberella.png" alt=""></img> ${result.forecast.forecastday[0].day.daily_chance_of_rain + "%"}</span>
<span><img src="./icon-wind.png" alt=""></img> ${result.current.wind_kph + "KM/H"}</span>
<span></span><img src="./icon-compass.png" alt=""></img>${result.current.wind_dir}</span></div>

           </div>
           
         </div>`}
        else {
            let day = result.forecast.forecastday[i].date
            let d = new Date(day)
            cartona += `<div class="card card1 col-lg-4 text-white text-center shadow   " >
            <div class="card-header text-white-50 d-flex justify-content-between" ">
                 <h6>${weekdays[d.getDay(result.forecast.forecastday[i].date)]}</h6>
                  <h6>${result.forecast.forecastday[i].date}</h6>
               </div> 
           <div class="card-body  py-5"id="card1">
             <h4>${result.location.name}</h4>
             <h3 class="card-text">${"Max: " + result.forecast.forecastday[i].day.maxtemp_c}C</h3>
             <h3 class="card-text">${"Min: " + result.forecast.forecastday[i].day.mintemp_c}C</h3>
             <img src="${"https:" + result.forecast.forecastday[i].day.condition.icon}"></img>
             
             <h3>${result.forecast.forecastday[i].day.condition.text}</h3>
<h5>${result.current.condition.text}</h5>

           </div>
           
         </div>`
            
        }
    }
    demo.innerHTML = cartona
    
}
var locationn=''

   if(navigator.geolocation){
 navigator.geolocation.getCurrentPosition(function(position){console.log("Latitude: " + position.coords.latitude);
    console.log("Longitude: " + position.coords.longitude);
locationn=position.coords.latitude+","+position.coords.longitude;
console.log(locationn)
getRespnse(locationn||'london')
},
    function(error){console.log(error)})
    getRespnse(locationn||'london')
}


function searchCity() {
   var city = ''
    if(regex.test(search.value)){
        city = search.value
        getRespnse(city)
    }

  
}
search.addEventListener('input', searchCity)
fbutton.addEventListener('click',searchCity)
contactbutton.addEventListener('click',function(e){
    contact.style.display='block'
    home.style.display='none'
    contactbutton.classList.add('active')
    homebutton.classList.remove('active')
})
homebutton.addEventListener('click',function(e){
    contact.style.display='none'
    home.style.display='block'
    contactbutton.classList.remove('active')
    homebutton.classList.add('active')
})
chomebutton.addEventListener('click',function(e){
    contact.style.display='none'
    home.style.display='block'
    contactbutton.classList.remove('active')
    homebutton.classList.add('active')
})