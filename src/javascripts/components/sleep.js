import utils from '../helpers/utils';

const energy = 50;

const sleepCard = () => {
  let domString = '';
  domString += `
  <h1>Sleep</h1>
  <h2>Energy: ${energy}</h2>
  <button id='deepSleep'>Slumber</button> <button id='liteSleep'>Nap</button>
  `;
  utils.printToDom('#sleep', domString);
};

export default { sleepCard };
