const currentyear = document.querySelector("#currentyear")
const lastModified = document.getElementById("lastModified").textContent = document.lastModified;

const today = new Date();

currentyear.innerHTML = today.getFullYear();
