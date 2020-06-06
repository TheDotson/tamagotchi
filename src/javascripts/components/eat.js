import utils from '../helpers/utils';
import './eat.scss';

let full = 100;

const eatCard = () => {
  let domString = '';
  domString += `
  <h1>Eat</h1>
  <h2>Hungry: ${full}</h2>
  <button id='food'>Food</button> <button id='candy'>Candy</button>
  `;
  utils.printToDom('#eat', domString);
};

const foodEvent = () => {
  if (full < 100) {
    full += 10;
  }
  if (full > 100) {
    full = 100;
  }
  eatCard();
};

const candyEvent = () => {
  full -= 3;
  if (full < 0) {
    full = 0;
  }
  eatCard();
};


$('body').on('click', '#food', foodEvent);
$('body').on('click', '#candy', candyEvent);


export default { eatCard };
