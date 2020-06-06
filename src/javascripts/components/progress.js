import utils from '../helpers/utils';
import './progress.scss';

const progressBar = () => {
  const domString = `
    <h1>Work in Progress...Bar...</h1>
  `;
  utils.printToDom('#progress', domString);
};

export default { progressBar };
