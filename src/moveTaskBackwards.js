const firstColumn = document.querySelector('#first-column');
const secondColumn = document.querySelector('#second-column');

export function moveTaskBackward(
  taskCard,
  currentColumnNumber,
  leftArrowButton,
  rightArrowButton,
) {
  taskCard.cloneNode(true);
  taskCard.remove();
  if (currentColumnNumber === 2) {
    firstColumn?.append(taskCard);
    leftArrowButton?.classList.add('hidden');
  } else if (currentColumnNumber === 3) {
    secondColumn?.append(taskCard);
    rightArrowButton?.classList.remove('hidden');
  }
}
