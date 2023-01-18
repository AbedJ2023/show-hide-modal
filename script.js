'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');

// to loop over the buttons and click in any of them:
for (let i = 0; i < btnOpenModal.length; i++) {
  btnOpenModal[i].addEventListener('click', () => {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  });
}

// function to close the modal to pass it as argument

const closeModal = () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnCloseModal.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    closeModal();
  }
});
