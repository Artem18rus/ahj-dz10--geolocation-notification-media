import isValidInn from '../validators';

test('validGEO1', () => {
  const totalValue = isValidInn('[55.45654, 65.546987]');
  expect(totalValue).toBe(true);
});

test('validGEO2', () => {
  const totalValue = isValidInn('55.45654,65.546987]');
  expect(totalValue).toBe(true);
});

test('validGEO3', () => {
  const totalValue = isValidInn(' ');
  expect(totalValue).toBe(false);
});

test('validGEO4', () => {
  const totalValue = isValidInn('gfhfghfgh');
  expect(totalValue).toBe(false);
});
