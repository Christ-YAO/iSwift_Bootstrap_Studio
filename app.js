const btnEntrant = document.querySelector('.btn1');
const btnSortant = document.querySelector('.btn2');
const textEntrant = document.querySelector('.entrant1');
const textSortant = document.querySelector('.sortant1');
const tabEntrant = document.querySelector('.entrant');
const tabSortant = document.querySelector('.sortant');


btnEntrant.addEventListener('click', () => {
    console.log(btnEntrant)
        tabEntrant.style.display="block";
        tabSortant.style.display="none";
        textEntrant.style.display="flex";
        textSortant.style.display="none";
        btnEntrant.classList.add('active');
        btnSortant.classList.remove('active');
    })

btnSortant.addEventListener('click', () => {
    console.log(btnSortant)
        textEntrant.style.display="none";
        textSortant.style.display="flex";
        tabEntrant.style.display="none";
        tabSortant.style.display="block";
        btnEntrant.classList.remove('active');
        btnSortant.classList.add('active');
    })



