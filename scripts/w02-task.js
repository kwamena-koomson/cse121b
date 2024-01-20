/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
const fullName = 'Kwamena Koomson';
const currentYear = new Date().getFullYear() ;
const profilePicture = "images/kwamena.jpg";


/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.getElementById('year'); 
const imageElement = document.querySelector('img')


/* Step 4 - Adding Content */

yearElement.textContent = currentYear ;
imageElement.setAttribute('src', profilePicture) ;
imageElement.setAttribute('alt', `This is ${fullName}$. He is a student at BYU-Idaho`) ;
nameElement.innerHTML = '<strong>' + fullName + '</strong>';



/* Step 5 - Array */
let favfoods = ['Jollof', 'Tuo Zaafi', 'Pizza', 'Banku'];

foodElement.innerHTML = favfoods;

let newfood = 'Croissant';
favfoods.push(newfood) ;
foodElement.innerHTML += `<br>${favfoods}`;
