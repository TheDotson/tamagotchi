import utils from '../helpers/utils';
import './play.scss';

let fun = 50;

const funCard = () => {
  let domString = '';
  domString += `
  <h1>Play</h1>
  <h2>Fun: ${fun}</h2>
  <button id='superFun'>Movie Marathon</button> <button id='mildFun'>Video Games</button>
  `;
  utils.printToDom('#play', domString);
};

const superEvent = () => {
  if (fun < 100) {
    fun += 50;
  }
  if (fun > 100) {
    fun = 100;
  }
  funCard();
};

const mildEvent = () => {
  if (fun < 100) {
    fun += 2;
  }
  if (fun > 100) {
    fun = 100;
  }
  funCard();
};


$('body').on('click', '#superFun', superEvent);
$('body').on('click', '#mildFun', mildEvent);


export default { funCard };
