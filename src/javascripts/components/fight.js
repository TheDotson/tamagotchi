import utils from '../helpers/utils';
import './fight.scss';

let strength = 100;

const fightCard = () => {
  let domString = '';
  domString += `
  <h1>Fight</h1>
  <h2>Strength: ${strength}</h2>
  <button id='runAway'>Tactical Retreat</button> <button id='combat'>FIGHT!</button>
  `;
  utils.printToDom('#fight', domString);
};

const retreatEvent = () => {
  if (strength < 100) {
    strength += 1;
  }
  if (strength > 100) {
    strength = 100;
  }
  fightCard();
};

const fightEvent = () => {
  strength -= 10;
  if (strength < 0) {
    strength = 0;
  }
  fightCard();
};


$('body').on('click', '#runAway', retreatEvent);
$('body').on('click', '#combat', fightEvent);


export default { fightCard };
