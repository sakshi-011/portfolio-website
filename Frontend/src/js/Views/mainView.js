'use strict';

class MainView {
  renderBio(bioArray) {
    const bioContent = document.querySelector('.bio');
    const dotActive = document.querySelector('.dot--active');
    bioContent.textContent = bioArray[dotActive.dataset.slide];
  }

  addHandlerBio(handler) {
    const bioDotsContainer = document.querySelector('.dots--container');
    bioDotsContainer.addEventListener('click', function (e) {
      const dot = e.target.closest('.dots');
      if (!dot) return;
      const _bioDots = document.querySelectorAll('.dots');
      _bioDots.forEach(dot => dot.classList.remove('dot--active'));
      dot.classList.add('dot--active');
      handler();
    });
  }

  renderQuizResult(isWin) {
    const imageQuizAnswer = document.querySelector('.quiz--answer');
    if (!isWin) return;
    imageQuizAnswer.innerHTML = `<p class="text--small">That is the correct answer :)</p>`;
  }

  renderPuzzleImage(imageURL) {
    const puzzleArea = document.querySelector('.image--container');
    const html = `<img class="puzzle--piece" src=${imageURL} alt="a random image from sakshi"/>`;
    puzzleArea.insertAdjacentHTML('beforeend', html);
  }

  addHandlerRefreshButton(handler) {
    const btnRefresh = document.querySelector('.btn--refresh');
    btnRefresh.addEventListener('click', function (e) {
      document.querySelector('.image--container').innerHTML = '';
      handler();
    });
  }
}

export default new MainView();
