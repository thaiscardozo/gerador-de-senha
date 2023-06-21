import { nanoid } from 'nanoid'
import './style.css';

const passwordBtn = document.querySelector('button');
const passwordAnswer = document.querySelector('h2');

passwordBtn.addEventListener('click', () => {
  passwordAnswer.innerHTML = nanoid()
});