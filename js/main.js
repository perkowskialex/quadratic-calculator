//x^2 - 4x + 3 = 0
// x = ((-b) +/- sqrt(b^2-4ac)) / 2a
// need one result for + and one result for -

const solution = document.querySelector('.solve');
const answer = document.querySelector('.answer');
const result = document.querySelectorAll('.result');
const aBox = document.querySelector('#A');
const bBox = document.querySelector('#B');
const cBox = document.querySelector('#C');

solution.addEventListener('click', quadraticSolve)

function quadraticSolve(a,b,c) {
  a = aBox.value;
  b = bBox.value;
  c = cBox.value;

  let resultAdd = (((-1*b) + Math.sqrt((Math.pow(b,2)-(4*a*c)))) / (2*a));
  console.log('result added = ' + resultAdd)
  let resultSub = (((-1*b) - Math.sqrt((Math.pow(b,2)-(4*a*c)))) / (2*a));
  console.log('result subtracted = ' + resultSub)

  if (isNaN(resultAdd)===true && isNaN(resultSub) === true) {
    answer.textContent = 'Javascript cannot handle radicals well';
  }

  else {
  answer.textContent = ('x = ' + resultAdd + ' and ' + resultSub);
  }
};

