class Forecast {
    constructor() {
        this.key = 'FKgqsCn04iUySlgPC3M69qS0KqV4gwD5';
        this.weatherURL = 'http://dataservice.accuweather.com/currentconditions/v1/';
        this.cityURL = 'http://dataservice.accuweather.com/locations/v1/cities/search'
    }
    async updateCity(city) {
        const cityDets = await this.getCity(city);
        const weather = await this.getweather(cityDets.Key);
        return{cityDets:cityDets, weather: weather}
    }
    async getCity(city) {
        const query = `?apikey=${this.key}&q=${city}`;

        const response = await fetch(this.cityURL + query);
        const data = await response.json();
        return data[0];
    }
    async getweather(id) {
        const query = `${id}?apikey=${this.key}`;

        const response = await fetch(this.weatherURL + query);
        const data = await response.json();

        return data[0];
    }
}

// const key = 'FKgqsCn04iUySlgPC3M69qS0KqV4gwD5';
// //Location API give us a keycode then that key code make a request to weather API to get city info.


// //get weather info 

// const getweather = async(id)=>{
//     const base = 'http://dataservice.accuweather.com/currentconditions/v1/';

//     const query = `${id}?apikey=${key}`;

//     const response = await fetch(base + query);
//     const data =  await response.json();

//     return data[0];

// };


// //get city info
// const getCity = async(city)=>{
//     const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
//     //the website we wanna make request for

//     const query = `?apikey=${key}&q=${city}`;

//     const response = await fetch(base + query);
//     //aviod CROS method//
//     // const url = await fetch(base + query).then(response => response.text() )
//     // .then(text => console.log(text))
//     // .catch(()=> console.log("can't access" + url + "response"))
    
//     const data = await response.json();
   

//     return data[0];
   
// };

// const url = "https://example.com"; // site that doesn’t send Access-Control-*
// fetch(url)
//     .then(response => response.text())
//     .then(contents => console.log(contents))
//     .catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))

// getCity('osaka')
// .then(data=> {
//    return getweather(data.Key);
// }).then(data=> console.log(data))
// .catch(err => console.log(err));

// getweather('2421828')
// .then(data => console.log(data))
// .catch(err => console.log(err));

