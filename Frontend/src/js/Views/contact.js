'use strict';

class Contact {
  _form = document.querySelector('.contact--form');
  _userName = document.querySelector('#user--name');
  _userEmail = document.querySelector('#user--email');
  _userMessage = document.querySelector('#user--message');
  _btnSend = document.querySelector('#btn--send');

  validateFormFields() {
    console.log();
    if (
      this._userName.value.length === 0 ||
      this._userEmail.value.length === 0 ||
      this._userMessage.value.length === 0
    )
      return false;
    else return true;
  }

  addHandlerForm(handler) {
    this._form.addEventListener('submit', function (e) {
      e.preventDefault();
      handler(e);
    });
  }
}

export default new Contact();
