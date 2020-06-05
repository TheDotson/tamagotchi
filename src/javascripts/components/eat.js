import utils from '../helpers/utils';

const full = 100;

const eatCard = () => {
  let domString = '';
  domString += `
  <h1>Eat</h1>
  <h2>Hungry: ${full}</h2>
  <button id='food'>Food</button> <button id='candy'>Candy</button>
  `;
  utils.printToDom('#eat', domString);
};

export default { eatCard };
