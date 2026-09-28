import React, { useState } from 'react';
import { readTwo, add, sub, div, pow } from './index';

function App() {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [result, setResult] = useState('');

  const input = (title) => {
    const value = window.prompt(title);
    return value === null ? NaN : Number(value);
  };

  const menu = `
  МЕНЮ:
  1 - ввести два числа
  2 - выполнить сложение
  3 - выполнить вычитание
  4 - выполнить деление
  5 - возвести число в степень
  0 - выход
  `;

  const runMenu = () => {
    let exit = false;
    while (!exit) {
      const choice = window.prompt(menu + '\nВаш выбор:');
      if (choice === null || choice === '0') { exit = true; break; }
      try {
        switch (choice) {
          case '1': {
            const [x, y] = readTwo(input);
            setA(x); setB(y);
            setResult(`Числа сохранены: a=${x}, b=${y}`);
            break;
          }
          case '2': setResult(`Сложение: ${a} + ${b} = ${add(a, b)}`); break;
          case '3': setResult(`Вычитание: ${a} - ${b} = ${sub(a, b)}`); break;
          case '4': setResult(`Деление: ${a} / ${b} = ${div(a, b)}`); break;
          case '5': setResult(`Степень: ${a} ^ ${b} = ${pow(a, b)}`); break;
          default: alert('Неверный пункт');
        }
      } catch (e) {
        setResult('Ошибка: ' + e.message);
      }
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Консольное меню (React)</h1>
      <button onClick={runMenu}>Запустить меню</button>
      <p>{result}</p>
    </div>
  );
}

export default App;