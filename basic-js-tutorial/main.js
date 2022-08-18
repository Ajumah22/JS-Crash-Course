// const ul = document.querySelector('.items');

// ul.firstElementChild.textContent = "Oresajo"
// ul.children[1].innerText = "Funmilola"
// ul.lastElementChild.innerHTML = "<h1>Ajumah</h1>"


// const btn = document.querySelector('.btn')
// btn.style.background = "red";

// event listener
const btn = document.querySelector('.btn')

// click, mouseover, mouseout
// btn.addEventListener('click', (e) => {
//     e.preventDefault();
//     document.querySelector('.container').style.background = 'green';
//     document.querySelector('body').classList.add('bg-dark');
//     document.querySelector('.items').lastElementChild.innerHTML = '<h2>Ajumah</h2>'
// })


// BASIC FORM VALIDATION

const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msgName = document.querySelector('.msgName'); //there's an empty div with the className of msg
const msgEmail = document.querySelector('.msgEmail'); //there's an empty div with the className of msg
const userList = document.querySelector('#users'); //we re targeting the empty ul with the id of users


// we need to add an event Listener to submit our form

myForm.addEventListener('submit', onSubmit);

// create a function for the onSubmit
function onSubmit(e) {
    // to prevent default after clicking on the submit function
    e.preventDefault();

    // add an if statement to validate your inputs
    if (nameInput.value === '') {
        msgName.classList.add('error'); //the error has been styled in css
        msgName.innerHTML = 'Please enter your name'
        
        setTimeout(() => msgName.remove(), 1000);

    } if (emailInput.value === '') {
        msgEmail.classList.add('error'); //the error has been styled in css
        msgEmail.innerHTML = 'Please enter your email'
        
        // set a timeout so the message leaves after a while
        setTimeout(() => msgEmail.remove(), 1000);
    } else {
        // create an li to add the new input on the browser using the empty ul provided;
        const li = document.createElement('li');
        // add a textNode with the input values
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`))


        // append the li into the ul so it would work
        userList.appendChild(li);

        // clear fields
        nameInput.value = '';
        emailInput.value = '';
    }
}