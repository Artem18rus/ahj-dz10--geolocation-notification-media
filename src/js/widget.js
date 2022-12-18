export default class inputModalWidget {
  constructor(parentEl) {
    this.parentEl = parentEl;

    this.onSubmit = this.onSubmit.bind(this);
  }

  static get markup() {
    return `
    <form class='modal'>
      <span class='modal-title'>Что-то пошло не так <br></span>
      <span class='modal-content'>К сожалению, нам не удалось определить ваше местоположение, пожалуста, дайте разрешение на использование геолокации, либо введите координаты вручную.</span>
      <div class='geo-modal'>
        <span class='geo-title'>Широта и долгота через запятую <br></span>
        <input type="text" class="input-modal" name="input-modal" required pattern="^\\[?(-?[1-8]?\\d(?:\\.\\d{1,18})?|90(?:\\.0{1,18})?),(\\s?)(-?(?:1[0-7]|[1-9])?\\d(?:\\.\\d{1,18})?|180(?:\\.0{1,18})?)\\]?$">
        <div class='modal-list-btn'>
          <button type="button" class='btn-cancel'>Отмена</button>
          <button type="submit" class='btn-ok'>Ок</button>
        </div>
      </div>
    </form>
    `;
  }

  static get selector() {
    return '.modal';
  }

  bindToDOM() {
    this.parentEl.innerHTML = inputModalWidget.markup;
    this.element = this.parentEl.querySelector(inputModalWidget.selector);
    this.element.addEventListener('submit', this.onSubmit);
  }
  
  onSubmit(e) {
    e.preventDefault();
    const arrGeo = [];
    const modal = this.parentEl.querySelector('.modal');
    const input = document.querySelector('.input');
    const inputModal = this.parentEl.querySelector('.input-modal')
      modal.style.display = 'none';
      input.style.background = 'none';
      input.readOnly = false;
      arrGeo.push(inputModal.value);
  }
}

