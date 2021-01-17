const addf = document.querySelector('.add');
const todos = document.querySelector('.todos');
const del = document.querySelector('.delete');
const search =document.querySelector('.search input')

const generateList = function(content){
    let html = 
    ` <li class="list-group-item d-flex justify-content-between align-items-center">
                <span>${content}</span>
                <i class="far fa-trash-alt delete"></i>
            </li>`;
    return html
}


addf.addEventListener('submit', e=>{
e.preventDefault();
    let content = addf.add.value.trim();

    if(content.length){
        todos.innerHTML += generateList(content);
        addf.reset();
    }
    

});

todos.addEventListener('click', (e)=>{
    e.preventDefault();
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove()
    }
    
})

//search
const match = function(kv){
    const matchar = Array.from(todos.children);
    matchar
    .filter((todo)=>{
        return !todo.textContent.toLowerCase().includes(kv)})
        .forEach((todo)=>{
        todo.classList.add('filtered')})    
    matchar
    .filter((todo)=>{
        return todo.textContent.toLowerCase().includes(kv)})
        .forEach((todo)=>{
        todo.classList.remove('filtered')})    

}


search.addEventListener('keyup', ()=>{
    let kv = search.value.trim().toLowerCase();
    match(kv)
})
