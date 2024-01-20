const apiKey="64e1ec2e52a18ce2e148624360daa836";
const apiBase="https://api.openweathermap.org/data/2.5/weather?&units=metric&q="

const searchInput=document.querySelector(".search input")

const weathericon=document.querySelector(".weather-icon")
const searchBtn=document.querySelector(".search-btn")
const error=document.querySelector(".error")
const info=document.querySelector(".info")

const msg=document.querySelector(".msg")
searchBtn.addEventListener('click',()=>{
    
    if(searchInput.value===""){
        error.style.display="block"
        info.style.display="none"
        msg.innerHTML="Please Enter City Name"
    }
    
        getWeatherdata(searchInput.value)
        
    
})

async function getWeatherdata(city){
    const response=await fetch(apiBase +city +`&appid=${apiKey}`);

    if(response.status=="404"){
        msg.innerHTML="   Invalid City Name"
        error.style.display="block"
        info.style.display="none"
    }

    var data =await response.json();
    
    console.log(data)

    document.querySelector(".city").innerHTML=data.name ;
    document.querySelector(".temp").innerHTML= Math.round(data.main.temp)+"<span>°C</span>";
    document.querySelector(".humidity").innerHTML= data.main.humidity+"%";
    document.querySelector(".windspeed").innerHTML=data.wind.speed+"km/h";

    

    if(data.weather[0].main=='Clouds'){
        weathericon.src="images/cloud.png"  
    }else if(data.weather[0].main=='Clear'){
        weathericon.src="images/clear.png"
    }else if(data.weather[0].main=='Rain'){
        weathericon.src="images/rain.png"
    }else if(data.weather[0].main=='Snow'){
        weathericon.src="images/snow.png"
    }else if(data.weather[0].main=='Mist'){
        weathericon.src="images/mist.png"
    }
    
    info.style.display="block"
    error.style.display="none"
    
}
