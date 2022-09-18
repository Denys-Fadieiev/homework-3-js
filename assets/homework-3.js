'use strict';

// Напишите следующие функции:

// Функция которая принимает строку и возвращает количество слов в ней.
const DISSALLOWED_WORDS = ['', '-', '+', '=', ',', '.', ')', '(',];

const str = 'Никогда не ошибается тот, кто ничего не делает';

const wordsCount = (str, DISSALLOWED_WORDS) => str.split(' ').filter((word) => !DISSALLOWED_WORDS.includes(word)).length;

console.log(wordsCount(str, DISSALLOWED_WORDS));


// Функция, которая получает строку и возвращает размер самого большого слова в ней.

const excerption = 'Никогда не ошибается тот, кто ничего не делает';

const biggestWord = (excerption) => excerption.split(' ').reduce((a, b) => (b.length > a.length ? b : a)).length;
console.log(biggestWord(excerption));

// or

let string = 'Никогда не ошибается тот, кто ничего не делает';
const words = string.split(' ');

let longWord = 0;
const longestWord = (words) => {
  for (let i = 0; i < words.length; i++){
    if (words[i].length > longWord){
      longWord = words[i].length
    }
  }
  return longWord;
}

console.log(longestWord(words));



