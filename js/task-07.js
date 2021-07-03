const inputFontSize = document.querySelector('#font-size-control');
const inputText = document.querySelector('#text');

inputFontSize.addEventListener('input', onInput);

function onInput(event) {
    inputText.style.fontSize = event.currentTarget.value + "px";
  }