const city = document.querySelector('.change-location');
const card = document.querySelector('.card');
const detail = document.querySelector('.detail');
const time = document.querySelector('.time');
const icon = document.querySelector('.icon img');


const UpdateUi = function(data){
    const cityDets = data.cityDets;
    const weather = data.weather;
    //destructing variable means to take off the object and store them in a variable tha same name as property
   //const {cityDets, weather} = data
   //means it will find the value call cityDets in data then set it in the variable name cityDets and also the value equals
   //to cityDets either.
    //const cityDets = data.cityDets === const {cityDets}

    detail.innerHTML =` <h5 class="my-3">${cityDets.EnglishName}</h5>
                <div class="my-3">${weather.WeatherText}</div>
                <div class="display-4 my-4">
                    <span>${weather.Temperature.Metric.Value}</span>
                    <span>&deg;C</span>`;

    const weatherIcon = `img/icons/${weather.WeatherIcon}.svg`;

    icon.setAttribute('src', weatherIcon);

    let timeSrc = null;
    if (weather.IsDayTime) {
        timeSrc = 'img/day.svg'
    } else {
        timeSrc = 'img/night.svg'
    };

    

    time.setAttribute('src', timeSrc)

                if(card.classList.contains('d-none')){
                    card.classList.remove('d-none')
                }


}

//update the image




const updateCity = async(city)=>{
    const cityDets = await getCity(city);
    //coz the forcast.js is behind the app.js, it's able to call function we set in forecast .js
    const weather = await getweather(cityDets.Key);

    return{
        cityDets:cityDets,
        //you can delete one of this, if they are use same name. => only cityDets
        weather:weather,


        
    };
};

city.addEventListener('submit', e=>{
    //prevent default action
    e.preventDefault();

    //get city value
console.log(city.city);
    const location = city.city.value.trim();
    city.reset();

    updateCity(location)
    .then(data=>UpdateUi(data))
    .catch(err => console.log(err));
});
//something happened



