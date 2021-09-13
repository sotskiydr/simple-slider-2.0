const slider = document.querySelector('.slider');
let counter = 1;
function switcher (){
    slider.innerHTML = `<img src="./pictures/Joker-${counter}.jpg" alt="Joker-${counter}">`;
}
const prevBtn = document.querySelector('.prev');
prevBtn.addEventListener('click' , () => {
    if(counter <= 1){
        return
    }
    counter--
    switcher()
})
const nextBtn = document.querySelector('.next');
nextBtn.addEventListener('click' , () => {
    if(counter >= 9){
        return
    }
    counter++
    switcher()
})
switcher()