'use strict';

const modal = document.querySelector('.modal-window')
const modalBtns = document.querySelectorAll('.show-modal-window')
const overlay = document.querySelector('.overlay')
const showModalHandler = () => {
    modal.classList.remove('hidden')
    overlay.classList.remove('hidden')
    
}

const hideModalHandler = () => {
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
}

for (const btn of modalBtns) {
    btn.addEventListener('click', showModalHandler)
}

overlay.addEventListener('click', hideModalHandler)