// // // const personDetails = [
// // //     {
// // //         firstName: 'Ajumah',
// // //         lastName: 'Oresajo',
// // //         age: 30,
// // //         isCool: true,
// // //     },
// // //     {
// // //         firstName: 'Rose',
// // //         lastName: 'Liquor',
// // //         age: 28,
// // //         isCool: false,
// // //     },
// // //     {
// // //         firstName: 'John',
// // //         lastName: 'Doe',
// // //         age: 35,
// // //         isCool: true,
// // //     },
// // // ];

// // // const details = personDetails.filter(function (person) {
// // //     return person.isCool === true;
// // // }).map(function (person) {
// // //     return person.lastName;
// // // });

// // // console.log(details);

// // // personDetails.forEach(function (person) {
// // //     console.log(person.lastName);
// // // })

// // // // Normal function
// // // function addNum(num1, num2) {
// // //     return num1 + num2;
// // // }
// // // console.log(addNum(2, 4));


// // // // Arrow function
// // // const addNum = (num1, num2) => {
// // //     return num1 + num2;
// // // }

// // // console.log(addNum(2,3));

// // // function Person(firstName, lastName, dob) {
// // //     this.firstName = firstName;
// // //     this.lastName = lastName;
// // //     this.dob = new Date(dob);
// //     // this.getBirthYear = function () {
// //     //     return this.dob.getFullYear();
// //     // }
// //     // this.getFullName = function () {
// //     //     return `${this.firstName} ${this.lastName}`;
// //     // }
// // };


// // // prototype (another way of writing instead of using the this function)
// // // Person.prototype.getBirthYear = function () {
// // //     return this.dob.getFullYear();
// // // };

// // // Person.prototype.getFullName = function () {
// // //     return `${this.firstName} ${this.lastName}`
// // // }


// // // Classes (Classes are much preferable than prototypes and this function)

// // class Person {
// //     constructor(firstName, lastName, dob) {
// //         this.firstName = firstName;
// //         this.lastName = lastName;
// //         this.dob = new Date (dob);
// //     }

// //     getBirthYear() {
// //         return this.dob.getFullYear();
// //     }

// //     getFullName() {
// //         return `${this.firstName} ${this.lastName}`
// //     }
// // }


// // const person1 = new Person('Ajumah', 'Oresajo', '2-2-1923');
// // console.log(person1.dob.getFullYear());
// // console.log(person1.getFullName());



// // form validation

// const myForm = document.querySelector('#my-form');
// const nameInput = document.querySelector('#name');
// const emailInput = document.querySelector('#email');
// const msgName = document.querySelector('.nameInput');
// const msgEmail = document.querySelector('.emailInput');
// const userList = document.querySelector('#users');

// myForm.addEventListener('submit', onSubmit)

// function onSubmit(e) {
//     e.preventDefault();

//     if (nameInput.value === '') {
//         msgName.classList('error')
//         msgName.innerHTML = 'Please enter your name!'

//         setTimeout(() => nameInput.remove(), 2000)

//     } if (emailInput.value === '') {
//         msgEmail.classList('error');
//         msgEmail.innerHTML = 'Please enter your email!';

//         setTimeout(() => emailInput.remove(), 2000)

//     } else {
//         const li = document.querySelector('li')
//         li.appendChild(document.createTextNode(`${nameInput.value} ${emailInput.value}`));

//         // connect the li to the ul so it would work
//         userList.appendChild(li);

//         // clear fields
//         nameInput.value = '';
//         emailInput.value = '';
//     }
// }