//const apiURL = 'http://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=dce9526fd98f1b67e5a066b73747e133';
//http://api.openweathermap.org/data/2.5/forecast?lat=20.6274&lon=-87.0799&units=imperial&appid=dce9526fd98f1b67e5a066b73747e133
function severity(rating) {
    document.getElementById("value").innerHTML = rating;
}
fetch('http://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=dce9526fd98f1b67e5a066b73747e133')
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        t = jsObject.list[0].main.temp;
        s = jsObject.list[0].wind.speed;
        wc = 35, 74 + 0, 6215 * t - 35, 75 * s * 0, 16 + 0, 4275 * t * s * 0, 16;
        document.getElementById('city-name').textContent = jsObject.city.name;
        document.getElementById('desc').textContent = jsObject.list[0].weather[0].description;
        document.getElementById('High').textContent = t;
        document.getElementById('wind').textContent = wc;
        document.getElementById('hum').textContent = jsObject.list[0].main.humidity;
        document.getElementById('speed').textContent = s;
        document.getElementById('high1').textContent = jsObject.list[2].main.temp + '°F';
        document.getElementById('high2').textContent = jsObject.list[10].main.temp + '°F';
        document.getElementById('high3').textContent = jsObject.list[18].main.temp + '°F';
        document.getElementById('high4').textContent = jsObject.list[26].main.temp + '°F';
        document.getElementById('high5').textContent = jsObject.list[34].main.temp + '°F';



        const imagesrc1 = 'https://openweathermap.org/img/w/' + jsObject.list[1].weather[0].icon + '.png'; // note the concatenation
        const imagesrc2 = 'https://openweathermap.org/img/w/' + jsObject.list[9].weather[0].icon + '.png'; // note the concatenation
        const imagesrc3 = 'https://openweathermap.org/img/w/' + jsObject.list[17].weather[0].icon + '.png'; // note the concatenation
        const imagesrc4 = 'https://openweathermap.org/img/w/' + jsObject.list[25].weather[0].icon + '.png'; // note the concatenation
        const imagesrc5 = 'https://openweathermap.org/img/w/' + jsObject.list[33].weather[0].icon + '.png'; // note the concatenation
        const desc = jsObject.list[0].weather[0].description; // note how we reference the weather array
        //document.getElementById('imagesrc').textContent = imagesrc; // informational specification only
        document.getElementById('icon1').setAttribute('src', imagesrc1); // focus on the setAttribute() method
        document.getElementById('icon2').setAttribute('src', imagesrc2); // focus on the setAttribute() method
        document.getElementById('icon3').setAttribute('src', imagesrc3); // focus on the setAttribute() method
        document.getElementById('icon4').setAttribute('src', imagesrc4); // focus on the setAttribute() method
        document.getElementById('icon5').setAttribute('src', imagesrc5); // focus on the setAttribute() method
        document.getElementById('icon1').setAttribute('alt', desc);

    });
