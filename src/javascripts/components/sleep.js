import utils from '../helpers/utils';
import './sleep.scss';

let energy = 50;

const sleepCard = () => {
  let domString = '';
  domString += `
  <h1>Sleep</h1>
  <h2>Energy: ${energy}</h2>
  <button id='deepSleep'>Slumber</button> <button id='liteSleep'>Nap</button>
  `;
  utils.printToDom('#sleep', domString);
};

const slumberEvent = () => {
  if (energy < 100) {
    energy += 60;
  }
  if (energy > 100) {
    energy = 100;
  }
  sleepCard();
};

const napEvent = () => {
  if (energy < 100) {
    energy += 50;
  }
  if (energy > 100) {
    energy = 100;
  }
  sleepCard();
};


$('body').on('click', '#deepSleep', slumberEvent);
$('body').on('click', '#liteSleep', napEvent);


export default { sleepCard };
