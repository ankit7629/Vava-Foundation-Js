const nevBtn = document.querySelector('#menuBtn');
const nevleftcontain = document.querySelector('#nevleft-contain');
const closeBtn = document.querySelector('.close');

nevBtn.addEventListener('click', () => {
    nevleftcontain.classList.toggle('nevleft-contain-show');
})

closeBtn.addEventListener('click', () => {
    nevleftcontain.classList.remove('nevleft-contain-show');
})

// donate form 

const donateform = document.querySelector('.donateform');
const donateBtn = document.getElementById('donateBtn');
const closeform = document.getElementById('closeform');

donateBtn.addEventListener('click', () => {
    donateform.classList.add('donateform-show')
});

closeform.addEventListener('click', () => {
    donateform.classList.remove('donateform-show')
})
