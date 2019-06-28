import '@babel/polyfill';
import './style.css';
import WatchJS from 'melanke-watchjs';
import Bmi from './Bmi';

export default () => {
  const element = document.getElementById('bmi');
  const obj = new Bmi(element);
  obj.init();
  WatchJS.watch(obj.state, 'errorMessage', () => obj.showError());
  WatchJS.watch(obj.state, 'resultIsShown', () => obj.showResult());
};
