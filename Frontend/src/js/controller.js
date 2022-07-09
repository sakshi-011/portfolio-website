'use strict';

import mainView from './Views/mainView.js';
import { bioArray } from './model.js';
import contact from './Views/contact.js';
import { FORM_URL, BASE_URL } from './config.js';
import * as jsZip from 'jszip';

const form = document.querySelector('.contact--form');

const controlHandlerBio = function () {
  mainView.renderBio(bioArray);
};

const controlHandlerForm = async function (e) {
  if (!contact.validateFormFields()) return;
  let message = new FormData(e.target);

  const status = document.getElementById('form--status');

  try {
    const response = await fetch(FORM_URL, {
      method: form.method,
      body: message,
      headers: {
        Accept: 'application/json',
      },
    });

    if (response.ok) {
      status.innerHTML = 'Thanks for your submission!';
      form.reset();
    } else {
      const data = await response.json();

      if (Object.hasOwn(data, 'errors')) {
        status.innerHTML = data['errors']
          .map(error => error['message'])
          .join(', ');
      } else {
        status.innerHTML = 'Oops! There was a problem submitting your form';
      }
    }
  } catch (error) {
    status.innerHTML = 'Oops! There was a problem submitting your form';
  }
};

const controlHandlerImage = async function () {
  try {
    const res = await fetch(`${BASE_URL}/api/random-image/zip`);

    const data = await res.arrayBuffer();
    if (!res.ok) throw new Error(`${data.message} ${res.status}`);

    const unzip = await jsZip.loadAsync(data);

    unzip.forEach((fileName, file) => {
      if (fileName !== 'original.jpg')
        unzip
          .file(fileName)
          .async('arraybuffer')
          .then(image => {
            const buffer = new Uint8Array(image);
            const blob = new Blob([buffer.buffer]);
            const img = new Image();
            img.src = URL.createObjectURL(blob);
            mainView.renderPuzzleImage(img.src);
          });
    });
  } catch (err) {
    throw err;
  }
};

function init() {
  console.log(
    `        
     _ _
    ( ' )
   (_ o _)
    (_,_)  
    
    **   **     ******
    **   **       **  
    *******       **  
    *******       **  
    **   **       **  
    **   **     ****** ,

    Nice to meet you :)
    You can check out the source code at - https://github.com/sakshi-011/portfolio-website
    If you want to connect with me, shoot me an email at - sakshi.singhania011@gmail.com

    `
  );
  mainView.addHandlerBio(controlHandlerBio);
  mainView.addHandlerRefreshButton(controlHandlerImage);
  contact.addHandlerForm(controlHandlerForm);
  controlHandlerImage();
}
init();
