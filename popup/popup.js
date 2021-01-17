const btn = document.querySelector('button');
const popup_wrapper = document.querySelector('.popup-wrapper');
const popup_close = document.querySelector('.popup-close');
const close =function(){
    popup_wrapper.style.display = "none"
};
btn.addEventListener('click',()=>{
    popup_wrapper.style.display='block';
});

popup_close.addEventListener('click',()=>{
    close();
});

popup_wrapper.addEventListener('click', ()=>{
    close();
});