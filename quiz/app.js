const correctAnwser =['choco','mayday','efy','one'];

const form = document.querySelector('.quiz-form');


form.addEventListener('submit', function(e){
    e.preventDefault();
    let score = 0;
    const YourAnswer=[form.food.value,form.band.value, form.friend.value,form.sibiling.value];
    // if(YourAnswer[0]===correctAnwser[0]){
    //     score += 25;
    // } else{
    //     score += 0;
    // };
    // if (YourAnswer[1] === correctAnwser[1]) {
    //     score += 25;
    // } else {
    //     score += 0;
    // };
    // if (YourAnswer[2] === correctAnwser[2]) {
    //     score += 25;
    // } else {
    //     score += 0;
    // };
    // if (YourAnswer[3] === correctAnwser[3]) {
    //     score += 25;
    // } else {
    //     score += 0;
    // };
    YourAnswer.forEach((array, index)=>{
        if(array === correctAnwser[index]){
            score += 25;
        } else{
            score +=0;
        }
    })
    // console.log(score);
    scrollTo(0,0);
   const scarea = document.querySelector('.sc');
   scarea.classList.remove('d-none');
   const p = document.querySelector('.text-primary');
//    p.innerHTML= score+'%';

   let output = 0;
   const timer= setInterval(()=>{
        p.innerHTML = output + '%';
        if(output === score){
            clearInterval(timer)
        }else{
            output++;
        }
    },30)

});

