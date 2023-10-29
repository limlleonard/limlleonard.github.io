const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');
const btnEmail= document.getElementById("#btn-email");

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

// navLinks.forEach(link => {
//     link.addEventListener('click', () => {
//         document.body.classList.remove('nav-open');
//     })
// })

btnEmail.addEventListener("click", () => {
    navigator.clipboard.writeText('test1');
    alert("Email adresse 'menglin.li@bearingpoint.com' copied");
    console.log('test1')
});