import utils from '../helpers/utils';

const strength = 100;

const fightCard = () => {
  let domString = '';
  domString += `
  <h1>Fight</h1>
  <h2>Strength: ${strength}</h2>
  <button id='runAway'>Tactical Retreat</button> <button id='combat'>FIGHT!</button>
  `;
  utils.printToDom('#fight', domString);
};

export default { fightCard };
