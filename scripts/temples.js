const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu')

hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show')
})


const currentyear = document.querySelector("#currentyear")
const lastModified = document.getElementById("lastModified").textContent = document.lastModified;

const today = new Date();

currentyear.innerHTML = today.getFullYear();