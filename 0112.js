// const text = document.querySelector('p')

// text.innerText ='I feel like the problem in my group is not only me, also others!!!'

// // console.log(text.innerText)

const texts = document.querySelectorAll('p');

// texts.innerText="They woundn't accept my opinion and also did not consider what i have said is reasonable or not..."
texts.forEach(a=>{
    a.innerText ="They woundn't accept my opinion and also did not consider what i have said is reasonable or not..."
})

const message = document.querySelector('.message');

message.innerHTML ='<h1>Content Hello</h1>'

const people = ['mario','luigi','adriani'];

people.forEach(ppl=>{
    message.innerHTML += `<p>${ppl}</p>`
});

const color = document.querySelector('p');

color.setAttribute('style','color:tomato')