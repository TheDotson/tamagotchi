import '../styles/main.scss';
import eat from './components/eat';
import play from './components/play';
import fight from './components/fight';
import sleep from './components/sleep';
import progress from './components/progress';

const init = () => {
  eat.eatCard();
  play.funCard();
  fight.fightCard();
  sleep.sleepCard();
  progress.progressBar();
};

init();
