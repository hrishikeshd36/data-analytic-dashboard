const menuBtn = document.querySelector('.menu-btn')
      backBtn = document.querySelector('.btn-back')
      menu = document.querySelector('nav');

menuBtn.addEventListener('click', () => {
    menu.style.transform = 'translateX(0)';
})

backBtn.addEventListener('click', () => {
    menu.style.transform = 'translateX(-100%)';
})