const modalMain = document.getElementById('modal_main');
modalMain.classList.add('modal_active');

const modalClose = document.getElementsByClassName('modal__close');
console.log(modalClose);

Array.from(modalClose).forEach((modalCloseButton) =>{
   modalCloseButton.onclick = () =>{
      modalCloseButton.closest('.modal').classList.remove('modal_active');
   }
});

const successButton = document.getElementsByClassName('show-success')[0];
const modalSuccess = document.getElementById('modal_success');

successButton.onclick = () =>{
   modalMain.classList.remove('modal_active');
   modalSuccess.classList.add('modal_active');
}

  
