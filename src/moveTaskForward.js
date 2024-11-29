const secondColumn = document.querySelector('#second-column');
const thirdColumn = document.querySelector('#third-column');

export function moveTaskForward(
  taskCard,
  currentColumnNumber,
  leftArrowButton,
  rightArrowButton,
) {
  taskCard.cloneNode(true);
  taskCard.remove();
  if (currentColumnNumber === 1) {
    secondColumn?.append(taskCard);
    leftArrowButton?.classList.remove('hidden');
  } else if (currentColumnNumber === 2) {
    thirdColumn?.append(taskCard);
    rightArrowButton?.classList.add('hidden');
  }
}
