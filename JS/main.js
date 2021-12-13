let openModal = document.getElementById('modal');
let closeModal = document.getElementById('close-modal');

closeModal.addEventListener('click', (event) => {
    let modal = document.querySelector('.modal-place')

    if (modal) {
        modal.classList.remove('active');
    }
})

openModal.addEventListener('click', () => {
    let modal = document.querySelector('.modal-place')

    if (modal) {
        modal.classList.add('active');
    }
})

