export const readTwo = (input) => {
  const x = input('Введите первое число:');
  const y = input('Введите второе число:');
  if (isNaN(x) || isNaN(y)) throw new Error('Некорректный ввод');
  return [Number(x), Number(y)];
};

export const add = (a, b) => a + b;
export const sub = (a, b) => a - b;
export const div = (a, b) => {
  if (b === 0) throw new Error('Деление на ноль');
  return a / b;
};
export const pow = (a, b) => Math.pow(a, b);