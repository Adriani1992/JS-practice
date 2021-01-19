const getTodos =(callback)=> {
const request = new XMLHttpRequest();

request.addEventListener('readystatechange',()=>{
    // console.log(request,request.readyState);
    //readState is return the state an XMLHttpRequest client is in.
    if(request.readyState=== 4 && request.status ===200){
        const data = JSON.parse(request.responseText);
        callback(undefined, data);
    }else if(request.readyState ===4){
        callback('could not fetch data', undefined)
    }
    //0 means unsent 
    //1 means opened => open()has been called
    //2 means HEADERS_RECEIVED => send() has been called and headers and status are available.
    //3 means LOADING => Downloading; responseText holds partial data.
    //4 means DONE => The operation is complete.
})



request.open('GET','https://jsonplaceholder.typicode.com/todos/')
//'GET' is the type of request we want to make
//'URL' is the endpoints we get the data from

request.send()
//send the request!!
};

getTodos((err,data)=>{
    console.log('callback fired');
    if(err){
    console.log(err);
    }else{
        console.log(data);
    }
});