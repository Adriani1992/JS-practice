const key = 'FKgqsCn04iUySlgPC3M69qS0KqV4gwD5';
//Location API give us a keycode then that key code make a request to weather API to get city info.


//get weather info 

const getweather = async(id)=>{
    const base = 'http://dataservice.accuweather.com/currentconditions/v1/';

    const query = `${id}?apikey=${key}`;

    const response = await fetch(base + query);
    const data =  await response.json();

    return data[0];

};


//get city info
const getCity = async(city)=>{
    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    //the website we wanna make request for

    const query = `?apikey=${key}&q=${city}`;

    const response = await fetch(base + query);
    const data = await response.json();

    return data[0];
   
};

// getCity('osaka')
// .then(data=> {
//    return getweather(data.Key);
// }).then(data=> console.log(data))
// .catch(err => console.log(err));

// getweather('2421828')
// .then(data => console.log(data))
// .catch(err => console.log(err));