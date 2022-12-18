import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';
const SRORAGE_KEY_input = 'cmb-input';

const formEl = document.querySelector('form');
console.log(formEl);
const inputEl = document.querySelector('input');
console.log(inputEl);
const textareaEl = document.querySelector('textarea');
console.log(textareaEl);

startLocalStorage();

formEl.addEventListener('submit', onFormSubmit);
textareaEl.addEventListener('input', throttle(onTextareaInput, 1000));
inputEl.addEventListener('input', onInput);

function onFormSubmit(evt) {
  evt.preventDefault();
  console.log('EXIT ->');

  evt.currentTarget.reset();

  localStorage.removeItem(STORAGE_KEY);
  localStorage.removeItem(SRORAGE_KEY_input);
}
function onTextareaInput(evt) {
  const message = evt.target.value;
  console.log(message);

  localStorage.setItem(STORAGE_KEY, message);
}
function onInput(evt) {
  const nameOff = evt.target.value;
  localStorage.setItem(SRORAGE_KEY_input, nameOff);
}
function startLocalStorage() {
  const saveMessageText = localStorage.getItem(STORAGE_KEY);

  if (saveMessageText) {
    console.log(saveMessageText);
    textareaEl.value = saveMessageText;
  }

  const saveInputText = localStorage.getItem(SRORAGE_KEY_input);

  if (saveInputText) {
    inputEl.value = saveInputText;
  }
}
