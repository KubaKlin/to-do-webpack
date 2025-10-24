export function getButtonsWrapper() {
  const buttonsWrapper = document.createElement('div');
  buttonsWrapper.classList.add('task-button-wrapper');

  const leftArrowButton = document.createElement('button');
  leftArrowButton.classList.add('button-left-arrow');
  buttonsWrapper.append(leftArrowButton);

  const binButton = document.createElement('button');
  binButton.classList.add('button-bin');
  buttonsWrapper.append(binButton);

  const rightArrowButton = document.createElement('button');
  rightArrowButton.classList.add('button-right-arrow');
  buttonsWrapper.append(rightArrowButton);

  return buttonsWrapper;
}
