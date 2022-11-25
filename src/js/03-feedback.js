const throttle = require("lodash.throttle");

const STORAGE_KEY = `feedback-form-state`;
const refs = {
    form: document.querySelector(`.feedback-form`),
}

refs.form.addEventListener(`submit`, onSubmitForm)
refs.form.addEventListener(`input`, throttle(onInputForm, 500));

populateTextarea()   

function onInputForm(e) {
    e.preventDefault();
    const message = refs.form.elements.message.value;
  const email = refs.form.elements.email.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify({email, message}))
  
}

function onSubmitForm(e) {
    e.preventDefault();

    const { elements: { email, message }, } = e.currentTarget;
    if (email.value !== "" && message.value !== "") {
        console.log({ email: email.value, message: message.value },)
        localStorage.clear();
        refs.form.reset();
    }
}



function populateTextarea() { 
    const outputTextContent = localStorage.getItem(STORAGE_KEY);
        const outputObjectContent = JSON.parse(outputTextContent) || { email: "", message: "" };
    const { email, message } = outputObjectContent;
    
        refs.form.elements.email.value = email;
    refs.form.elements.message.value = message;
    
}
