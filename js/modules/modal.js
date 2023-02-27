function closeModal() {
    modals.classList.add('hide');
    modals.classList.remove('show');
    document.body.style.overflow = '';
}
function openModal() {
    modals.classList.add('show');
    modals.classList.remove('hide');
    document.body.style.overflow = 'hidden';
    const modalTimerId = setTimeout(openModal, 300000);
    clearInterval(modalTimerId);
}
const modalTrigger = document.querySelectorAll('[data-modal]'),
    modals = document.querySelector('.modal');
function modal() {
    // Modal

    const modalTrigger = document.querySelectorAll('[data-modal]'),
        modal = document.querySelector('.modal');

    modalTrigger.forEach(btn => {
        btn.addEventListener('click', openModal);
    });

    closeModal();

    openModal();

    modal.addEventListener('click', (e) => {
        if (e.target === modal || e.target.getAttribute('data-close') == "") {
            closeModal();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.code === "Escape" && modal.classList.contains('show')) {
            closeModal();
        }
    });

    const modalTimerId = setTimeout(openModal, 300000);
    // Изменил значение, чтобы не отвлекало

    function showModalByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            openModal();
            window.removeEventListener('scroll', showModalByScroll);
        }
    }
    window.addEventListener('scroll', showModalByScroll);
}

export default modal;
export { openModal };
export { closeModal };