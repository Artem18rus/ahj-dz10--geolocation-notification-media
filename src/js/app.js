import inputModalWidget from './widget';

const container = document.querySelector('.container');
const timeline = new inputModalWidget(container);


const input = document.querySelector('.input');
const records = document.querySelector('.records');

class InnTimelineWidget {
  static geolocation() {
    navigator.geolocation.getCurrentPosition(
      (data) => { // выполняется если включена геолокация
        const { latitude, longitude } = data.coords;
        input.addEventListener('keydown', (e) => { // обработка по нажатию на Enter в инпуте добавления поста
          if (e.keyCode === 13 && input.value.length > 2) {
            const recordsItem = document.querySelectorAll('.records-item');
            if (recordsItem.length === 0) {
              records.insertAdjacentHTML('afterBegin', `
            <li class="records-item">
              <div class="line1">
                <div class="records-item-content">${input.value}</div>
              <div class="records-item-time">${new Date().toLocaleString().slice(0, -3)}</div>
              </div>
              <div class="geolocation">${`${latitude}, -${longitude}`}</div>
            </li>`);
            } else {
              records.insertAdjacentHTML('afterBegin', `
            <li class="records-item">
              <div class="line1">
                <div class="records-item-content">${input.value}</div>
                <div class="records-item-time">${new Date().toLocaleString().slice(0, -3)}</div>
              </div>
              <div class="geolocation">${`${latitude}, -${longitude}`}</div>
            </li>`);
            }
            input.value = '';
          }
        });
      },

      (err) => { // выполняется если геолокация неактивна


        
        timeline.bindToDOM();


        input.style.background = '#f1090921';
        input.readOnly = true;
        const modal = document.querySelector('.modal');
        modal.style.display = 'block'; // появление модального окна

        const btnCancel = document.querySelector('.btn-cancel');
        btnCancel.addEventListener('click', (e) => { // выполняется при клике на кнопку "Отмена" модального кона
          modal.style.display = 'none';
          input.placeholder = 'Включите геолокацию и обновите страницу!';
        });

        const inputModal = document.querySelector('.input-modal');
        const arrGeo = [];
        modal.addEventListener('submit', (e) => { // обработка кнопки "Ок" модального окна
          e.preventDefault();
          modal.style.display = 'none';
          input.style.background = 'none';
          input.readOnly = false;
          arrGeo.push(inputModal.value);
        });

        input.addEventListener('keydown', (e) => { // выполняется после нажатия на Enter в инпуте добалвения поста после нажатия кнопки "Ок" модального окна
          if (e.keyCode === 13 && input.value.length > 2) {
            const recordsItem = document.querySelectorAll('.records-item');
            if (recordsItem.length === 0) {
              records.insertAdjacentHTML('afterBegin', `
              <li class="records-item">
                <div class="line1">
                  <div class="records-item-content">${input.value}</div>
                  <div class="records-item-time">${new Date().toLocaleString().slice(0, -3)}</div>
                </div>
                <div class="geolocation">${arrGeo}</div>
              </li>`);
            } else {
              records.insertAdjacentHTML('afterBegin', `
              <li class="records-item">
                <div class="line1">
                  <div class="records-item-content">${input.value}</div>
                  <div class="records-item-time">${new Date().toLocaleString().slice(0, -3)}</div>
                </div>
                <div class="geolocation">${arrGeo[arrGeo.length - 1]}</div>
              </li>`);
            }
            input.value = '';
          }
        });
      },
      { enableHighAccuracy: true },
    );
  }
}

InnTimelineWidget.geolocation();
