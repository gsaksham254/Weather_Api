// const Btn = document.getElementById("#btn");
// Btn.addEventListener("click",()=>{
//     window.location.reload();
// })
console.log("hello");
link = "https://api.openweathermap.org/data/2.5/weather?q=Hyderabad&appid=5cd1e340147059d0f3af4a61961ff38e";
let request = new XMLHttpRequest();
request.open('GET',link,true);
request.onload = ()=>{
    let data = JSON.parse(request.response);
    console.log(data);
    document.getElementById("city").innerHTML = data.name;
    document.getElementById("weather").innerHTML = data.weather[0].description;
    document.getElementById("temp").innerHTML = Math.round(data.main.temp-273.15);
    document.getElementById("icon").src="https://openweathermap.org/img/wn/" + data.weather[0].icon +".png";
}
if(request.status >= 200 && request.status < 400){
    let temp = data.main.temp;
}
else{
    console.log("error");
}
request.send();