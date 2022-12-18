import InnPopoverWidget from '../widget';

test('widget', () => {
  document.body.innerHTML = '<div class="container"></div>';

  const container = document.querySelector('.container');
  const widget = new InnPopoverWidget(container);

  widget.bindToDOM();

  expect(container.innerHTML).toEqual(InnPopoverWidget.markup);
});
