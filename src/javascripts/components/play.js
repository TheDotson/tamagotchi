import utils from '../helpers/utils';

const fun = 50;

const funCard = () => {
  let domString = '';
  domString += `
  <h1>Play</h1>
  <h2>Fun: ${fun}</h2>
  <button id='superFun'>Movie Marathon</button> <button id='mildFun'>Video Games</button>
  `;
  utils.printToDom('#play', domString);
};

export default { funCard };
