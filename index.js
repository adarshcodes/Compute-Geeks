// Btn for sidebar
const btnMore1 = document.getElementById('btn-top-1');
const btnMore2 = document.getElementById('btn-top-2');
const list1 = document.querySelector('.list-1');
const list2 = document.querySelector('.list-2');


btnMore1.addEventListener('click', ()=> {
    list1.classList.toggle('height-recover');
})

btnMore2.addEventListener('click', () => {
    list2.classList.toggle('height-recover');
})

// Btn for main content

const btnMain1 = document.getElementById('btn-main-1');
const btnMain2 = document.getElementById('btn-main-2');
const cont1 = document.querySelector('.cont-1');
const cont2 = document.querySelector('.cont-2');

btnMain1.addEventListener('click', () => {
    cont1.classList.toggle('height-recover');
})

btnMain2.addEventListener('click', () => {
    cont2.classList.toggle('height-recover');
})