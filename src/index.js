import './style.css';
import { getButtonsWrapper } from './getButtonsWrapper';
import { moveTaskForward } from './moveTaskForward';
import { moveTaskBackward } from './moveTaskBackwards';

const taskInput = document.querySelector('.add-task-input');
const taskInputButton = document.querySelector('.add-task-button');
const tasksWrapper = document.querySelector('.tasks-column');
const errorLabel = document.querySelector('.add-input-error-label');

if (errorLabel) {
  errorLabel.innerText = 'Task title cannot be empty';
}

taskInputButton?.addEventListener('click', function() {
  const taskTitle = taskInput?.value;
  const taskCard = document.createElement('div');
  const buttonsWrapper = getButtonsWrapper();
  taskCard.classList.add('single-task');
  taskCard.innerText = taskTitle;

  taskCard.append(buttonsWrapper);

  const binButton = buttonsWrapper.querySelector('.button-bin');
  const rightArrowButton = buttonsWrapper.querySelector('.button-right-arrow');
  const leftArrowButton = buttonsWrapper.querySelector('.button-left-arrow');
  leftArrowButton?.classList.add('hidden');

  binButton.addEventListener('click', function() {
    taskCard.remove();
  });

  let currentColumnNumber = 1;
  rightArrowButton.addEventListener('click', function() {
    moveTaskForward(
      taskCard,
      currentColumnNumber,
      leftArrowButton,
      rightArrowButton,
    );
    currentColumnNumber += 1;
    console.log(currentColumnNumber);
  })

  leftArrowButton.addEventListener('click', function() {
    moveTaskBackward(
      taskCard,
      currentColumnNumber,
      leftArrowButton,
      rightArrowButton,
    );
    currentColumnNumber -= 1;
  })

  if (taskTitle !== '') {
    tasksWrapper?.append(taskCard);
    taskInput.value = '';
    errorLabel?.classList.remove('active');
  } else {
    errorLabel?.classList.add('active');
  }
});
