
let approaches = 0
console.log('JS загружен')

/* неиспользуемые переменные для таймера между подходами
let ct = null
let timer = null
*/

// прибавляем +1 к approaches
function incrementApproaches() {
  approaches++;
  document.getElementById('approachesDisplay').textContent = approaches;
  console.log('Текущий счет: ', approaches);
}

// ресет переменной approaches
function resetApproaches() {
  approaches = 0;
  document.getElementById('approachesDisplay').textContent = approaches;
  console.log('Текущий счет: ', approaches);
}