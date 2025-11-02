let searchB = document.querySelector('.fa-solid fa-magnifying-glass');
let searchDiv = document.querySelector('.search');

searchB.addEventListener('click', () =>{

    searchDiv.classList.toggle('fa-times');
    searchB.classList.toggle('active');

});