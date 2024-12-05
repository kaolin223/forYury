document.addEventListener('DOMContentLoaded', () => {
    const openBtn = document.querySelector('#openBtn');
    const closeBtn = document.querySelector('#closeBtn');
    const modal = document.querySelector('#modal');

    openBtn.addEventListener('click', () => {
        modal.showModal()
    })

    closeBtn.addEventListener('click', () => {
        modal.close();
    })

})