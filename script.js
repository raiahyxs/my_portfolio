
document.querySelectorAll('.progress-bar').forEach(bar => {
    const percent = bar.getAttribute('data-percent');
    bar.style.setProperty('--percent', `${percent}%`);
});


document.querySelectorAll('.circular-skill').forEach(skill => {
    const percent = skill.getAttribute('data-percent');
    const angle = (percent / 100) * 360;
    skill.querySelector('.circle').style.setProperty('--angle', `${angle}deg`);
});



const menuIcon = document.getElementById('menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('active');
});



  