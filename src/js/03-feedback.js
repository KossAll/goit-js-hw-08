const throttle = require("lodash.throttle");

const STORAGE_KEY = `feedback-form-state`;
const formData = {};
const refs = {
    input: document.querySelector(`.feedback-form input`),
    textarea: document.querySelector(`.feedback-form textarea`),
    form: document.querySelector(`.feedback-form`),
}

refs.form.addEventListener(`submit`, onSubmitForm)
refs.form.addEventListener(`input`, throttle(onInputForm, 500));

populateTextarea()   

function onInputForm(e) {
    formData[e.target.name] = e.target.value;
    const formDataJSON = JSON.stringify(formData);
    localStorage.setItem(STORAGE_KEY, formDataJSON)
  
}

function onSubmitForm(e) {
    e.preventDefault();
    e.target.reset();
    localStorage.removeItem(STORAGE_KEY);
   }

function populateTextarea() {
    
    const saveMessage = localStorage.getItem(STORAGE_KEY);
    if (saveMessage) {
        const ItemMessage = JSON.parse(saveMessage);
        refs.input.value = ItemMessage.email;
        refs.textarea.value = ItemMessage.message;
        console.log(on);
   }
}