export default class InputModalWidget {
  constructor(parentEl) {
    this.parentEl = parentEl;

    this.onSubmit = this.onSubmit.bind(this);
  }

  static get markup() {
    return `
    <form class="modal">
      <span class="modal-title">Что-то пошло не так <br></span>
      <span class="modal-content">К сожалению, нам не удалось определить ваше местоположение, пожалуста, дайте разрешение на использование геолокации, либо введите координаты вручную.</span>
      <div class="geo-modal">
        <span class="geo-title">Широта и долгота через запятую <br></span>
        <input type="text" class="input-modal" name="input-modal" required="" pattern="^\\[?(-?[1-8]?\\d(?:\\.\\d{1,18})?|90(?:\\.0{1,18})?),(\\s?)(-?(?:1[0-7]|[1-9])?\\d(?:\\.\\d{1,18})?|180(?:\\.0{1,18})?)\\]?$">
        <div class="modal-list-btn">
          <button type="button" class="btn-cancel">Отмена</button>
          <button type="submit" class="btn-ok">Ок</button>
        </div>
      </div>
    </form>
    `;
  }

  static get submitSelector() {
    return '.submit';
  }

  static get inputModalSelector() {
    return '.inputModal';
  }

  static get selector() {
    return '.modal';
  }

  bindToDOM() {
    this.parentEl.innerHTML = InputModalWidget.markup;
    this.element = this.parentEl.querySelector(InputModalWidget.selector);
    this.submit = this.element.querySelector(InputModalWidget.submitSelector);
    this.inputModal = this.element.querySelector(InputModalWidget.inputModalSelector);
    this.element.addEventListener('submit', this.onSubmit);
  }

  onSubmit(e) {
    e.preventDefault();
    this.arrGeo = [];
    this.modal = this.parentEl.querySelector('.modal');
    this.input = document.querySelector('.input');
    this.inputModal = this.parentEl.querySelector('.input-modal');
    this.modal.style.display = 'none';
    this.input.style.background = 'none';
    this.input.readOnly = false;
    this.arrGeo.push(this.inputModal.value);
  }
}
