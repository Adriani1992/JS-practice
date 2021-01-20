const getTodos = async ()=>{

    const response = await fetch('0118_sample.json');
    //await means it will wait till fetch get resolved result back, then saved it into response variable.
    //it won't block the resr of  code
    // if(response.status !== 200){
    //     throw new Error('cannot fetch the data');
    // }

    const data = response.json()
    //access the data in json, then assign it into data.
    return data;

    //only blocking the data inside the async function
};



getTodos()
.then((data)=>{
    console.log('resolved:', data)
})
.catch(err=> console.log('rejected:', err.message))

//async return a promise.
//the code outside the function won't be blocked.