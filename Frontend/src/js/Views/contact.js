'use strict';

class Contact {
  validateFormFields() {
    const userName = document.querySelector('#user--name');
    const userEmail = document.querySelector('#user--email');
    const userMessage = document.querySelector('#user--message');
    if (
      userName.value.length === 0 ||
      userEmail.value.length === 0 ||
      userMessage.value.length === 0
    )
      return false;
    else return true;
  }

  addHandlerForm(handler) {
    const form = document.querySelector('.contact--form');
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      handler(e);
    });
  }
}

export default new Contact();
