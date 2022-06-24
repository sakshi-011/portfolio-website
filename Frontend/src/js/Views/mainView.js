'use strict';

class MainView {
  _allBlocks = document.querySelectorAll('.block');
  _footer = document.querySelector('footer');
  _bioDotsContainer = document.querySelector('.dots--container');
  _bioContent = document.querySelector('.bio');

  // _sectionObserver = new IntersectionObserver(
  //   (entries, observer) => {
  //     const [en] = entries;
  //     if (!en.isIntersecting) return;
  //     en.target.classList.remove('section--hidden', 'footer--hidden');
  //     if (en.target.classList.contains('contact--block'))
  //       this._footer.classList.remove('footer--hidden');
  //     observer.unobserve(en.target);
  //   },
  //   {
  //     root: null,
  //     threshold: 0,
  //   }
  // );

  renderBio(bioArray) {
    const dotActive = document.querySelector('.dot--active');
    this._bioContent.textContent = bioArray[dotActive.dataset.slide];
  }

  addHandlerBio(handler) {
    this._bioDotsContainer.addEventListener('click', function (e) {
      const dot = e.target.closest('.dots');
      if (!dot) return;
      const _bioDots = document.querySelectorAll('.dots');
      _bioDots.forEach(dot => dot.classList.remove('dot--active'));
      dot.classList.add('dot--active');
      handler();
    });
  }

  // init() {
  // this._allBlocks.forEach(block => {
  //   this._sectionObserver.observe(block);
  //   block.classList.add('section--hidden');
  // });
  // this._sectionObserver.observe(this._footer);
  // this._footer.classList.add('footer--hidden');
  // }
}

export default new MainView();
