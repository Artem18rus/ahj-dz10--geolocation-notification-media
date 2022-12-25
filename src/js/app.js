/* eslint-disable no-unused-vars */
import isValidInn from './validators';

const input = document.querySelector('.input');
const records = document.querySelector('.records');

class InnTimelineWidget {
  constructor() {
    this.input = input;
    this.records = records;

    this.onSubmitPost = this.onSubmitPost.bind(this);
    this.btnModalOkClick = this.btnModalOkClick.bind(this);
    this.onSubmitPostAfterModal = this.onSubmitPostAfterModal.bind(this);
    this.arrGeo = null;
  }

  geolocation() {
    navigator.geolocation.getCurrentPosition(
      (data) => { // выполняется если включена геолокация
        this.latitude = data.coords.latitude;
        this.longitude = data.coords.longitude;
        this.input.addEventListener('keydown', this.onSubmitPost); // обработка по нажатию на Enter в инпуте добавления поста
      },

      (err) => { // выполняется если геолокация неактивна
        this.input.style.background = '#f1090921';
        this.input.readOnly = true;
        this.modal = document.querySelector('.modal');
        this.modal.style.display = 'block'; // появление модального окна

        this.btnModalCancelClick(); // выполняется при клике на кнопку "Отмена" модального кона
        this.btnModalOkClick(); // обработка кнопки "Ок" модального окна
        this.input.addEventListener('keydown', this.onSubmitPostAfterModal); // выполняется после нажатия на Enter в инпуте добалвения поста после нажатия кнопки "Ок" модального окна
      },

      { enableHighAccuracy: true },
    );
  }

  onSubmitPost(e) {
    this.recordsItem = document.querySelectorAll('.records-item');
    if (e.keyCode === 13 && this.recordsItem.length === 0 && this.input.value.length > 2) {
      records.insertAdjacentHTML('afterBegin', `
          <li class="records-item">
            <div class="line1">
              <div class="records-item-content">${this.input.value}</div>
            <div class="records-item-time">${new Date().toLocaleString().slice(0, -3)}</div>
            </div>
            <div class="geolocation">${`${this.latitude}, -${this.longitude}`}</div>
          </li>`);
      this.input.value = '';
    } else if (e.keyCode === 13 && this.recordsItem.length !== 0 && this.input.value.length > 2) {
      records.insertAdjacentHTML('afterBegin', `
          <li class="records-item">
            <div class="line1">
              <div class="records-item-content">${this.input.value}</div>
              <div class="records-item-time">${new Date().toLocaleString().slice(0, -3)}</div>
            </div>
            <div class="geolocation">${`${this.latitude}, -${this.longitude}`}</div>
          </li>`);
      this.input.value = '';
    }
  }

  btnModalCancelClick() {
    this.btnCancel = document.querySelector('.btn-cancel');
    this.btnCancel.addEventListener('click', () => {
      this.modal.style.display = 'none';
      this.input.placeholder = 'Включите геолокацию и обновите страницу!';
    });
  }

  btnModalOkClick() {
    this.inputModal = document.querySelector('.input-modal');
    this.arrGeo = [];
    this.modal.addEventListener('submit', (e) => {
      e.preventDefault();
      if (isValidInn(this.inputModal.value)) {
        this.modal.style.display = 'none';
        this.input.style.background = 'none';
        this.input.readOnly = false;
        this.inputModal.value = this.inputModal.value.replace(/[^0-9,.-]/g, ' ');
        this.inputModal.value = this.inputModal.value.replace(/\s{2,}/g, ' ').replace(/([,]+)(?=\S)/g, '$1 ');
        this.arrGeo.push(this.inputModal.value);
      } else {
        this.modal.reportValidity();
      }
    });
  }

  onSubmitPostAfterModal(e) {
    this.recordsItem = document.querySelectorAll('.records-item');
    if (e.keyCode === 13 && this.recordsItem.length === 0 && this.input.value.length > 2) {
      this.records.insertAdjacentHTML('afterBegin', `
          <li class="records-item">
            <div class="line1">
              <div class="records-item-content">${this.input.value}</div>
              <div class="records-item-time">${new Date().toLocaleString().slice(0, -3)}</div>
            </div>
            <div class="geolocation">${this.arrGeo}</div>
          </li>`);
      this.input.value = '';
    } else if (e.keyCode === 13 && this.recordsItem.length !== 0 && this.input.value.length > 2) {
      this.records.insertAdjacentHTML('afterBegin', `
          <li class="records-item">
            <div class="line1">
              <div class="records-item-content">${this.input.value}</div>
              <div class="records-item-time">${new Date().toLocaleString().slice(0, -3)}</div>
            </div>
            <div class="geolocation">${this.arrGeo[this.arrGeo.length - 1]}</div>
          </li>`);
      this.input.value = '';
    }
  }
}

const eksOne = new InnTimelineWidget();
eksOne.geolocation();
