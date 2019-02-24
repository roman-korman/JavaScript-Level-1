"use strict";
/**
 * Функция проверки поля пароля. Отрабатывает, когда с поля убирается фокус
 */
login.onblur = function() {
  let errorMessage = document.getElementById('login_error');
  let log = this.value;
  if (log.length < 2) { //проверяю длину
    errorMessage.innerHTML = 'Login is too short';
    this.classList.add("error");
  } else if (log.length > 50) { //проверяю длину
    errorMessage.innerHTML = 'Login is too long';
    this.classList.add("error");
  } else { //снимаю ошибку
    this.classList.remove("error");
    errorMessage.innerHTML = null;
  }
}
/**
 * Проверка пароля на соответствие правилам
 */
password.onblur = function() {
  let errorMessage = document.getElementById('password_error');
  let pass = this.value;
  if (pass.length < 6) { //проверяю длину
    errorMessage.innerHTML = 'Password is too short';
    this.classList.add("error");
  } else if (pass.length > 50) { //проверяю длину
    errorMessage.innerHTML = 'Login is too long';
    this.classList.add("error");
  } else { //снимаю ошибку
    this.classList.remove("error");
    errorMessage.innerHTML = null;
  }
}
/**
 * Проверка подверждения пароля на соответствие первому
 */
passwordCheck.onblur = function() {
  let errorMessage = document.getElementById('passwordCheck_error');
  let pass = this.value;
  if (pass.length < 6) { //проверяю длину
    errorMessage.innerHTML = 'Password is too short';
    this.classList.add("error");
  } else if (pass.length > 50) { //проверяю длину
    errorMessage.innerHTML = 'Login is too long';
    this.classList.add("error");
  } else if (this.value != password.value) { //сравниваю два значения
    errorMessage.innerHTML = 'Passwords have to coincide';
    this.classList.add("error");
  } else { //снимаю ошибку
    this.classList.remove("error");
    errorMessage.innerHTML = null;
  }
}
