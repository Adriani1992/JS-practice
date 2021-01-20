const city = document.querySelector('.change-location');

const updateCity = async(city)=>{
    const cityDets = await getCity(city);
    //coz the forcast.js is behind the app.js, it's able to call function we set in forecast .js
    const weather = await getweather(cityDets.Key);

    return{
        cityDets:cityDets,
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
    .then(data=>console.log(data))
    .catch(err => console.log(err));
});



