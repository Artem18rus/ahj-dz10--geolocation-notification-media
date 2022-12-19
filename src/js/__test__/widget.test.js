import InputModalWidget from '../widget';

test('widget1', () => {
  document.body.innerHTML = `
  <div class="block">
    <div class="box-content">
      <ul class="records"></ul>
      <div class="container"></div>
      <input type="text" class="input" name="input" placeholder="Введите пост (не менее 3х символов)">
    </div>
  </div>
  `;

  const container = document.querySelector('.container');
  const widget = new InputModalWidget(container);

  widget.bindToDOM();

  expect(container.innerHTML).toEqual(InputModalWidget.markup);
});

test('widget2', () => {
  document.body.innerHTML = `
  <div class="block">
    <div class="box-content">
      <ul class="records"></ul>
      <div class="container"></div>
      <input type="text" class="input" name="input" placeholder="Введите пост (не менее 3х символов)">
    </div>
  </div>
  `;

  const container = document.querySelector('.container');
  const widget = new InputModalWidget(container);

  widget.bindToDOM();
  const inputModalTest = document.querySelector('.input-modal');

  widget.inputModalTest.value = '56.54684, 66.56894';
  widget.submit.click();

  expect(inputModalTest.value).toEqual(true);
});
