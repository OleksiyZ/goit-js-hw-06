// Напиши скрипт управління формою логіна.

// Обробка відправлення форми form.login-form повинна відбуватися відповідно до події submit.
// Під час відправлення форми сторінка не повинна перезавантажуватися.
// Якщо у формі є незаповнені поля, виводь alert з попередженням про те, що всі поля повинні бути заповнені.
// Якщо користувач заповнив усі поля і відправив форму, збери значення полів в об'єкт, де ім'я поля буде ім'ям властивості, а значення поля - значенням властивості. Для доступу до елементів форми використовуй властивість elements.
// Виведи об'єкт із введеними даними в консоль і очисти значення полів форми методом reset.


const formEl = document.querySelector('.login-form');
const emailInputEl = document.querySelector('.login-form');
const passwordInputformEl = document.querySelector('.login-form');

const userGatherInfo = (event) => {
  event.preventDefault();
  const {
    email,
    password
  } = event.currentTarget.elements;

  
  
  if (!email.value || !password.value) {
    alert('Всі поля повинні бути заповнені!!!');
    return
  }

  const userInfo = {
    email: email.value,
    password: password.value,
  }

  console.table(userInfo);
  event.currentTarget.reset();
}

formEl.addEventListener('submit', userGatherInfo);

// const form = document.querySelector(".login-form");

// form.addEventListener("submit", handleSubmit);

// function handleSubmit(event) {
//   event.preventDefault();
//   const {
//     elements: { email, password }
//   } = event.currentTarget;

//   if (email.value === "" || password.value === "") {
//     return alert("Всі поля повинні бути заповнені!");
//   }

//   console.table(`email: ${email.value}, Password: ${password.value}`);
//   event.currentTarget.reset();
// }

// console.log(form);