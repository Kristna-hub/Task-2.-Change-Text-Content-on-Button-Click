
const changeTextButton = document.getElementById('changeTextButton');


const textParagraph = document.getElementById('textParagraph');

changeTextButton.addEventListener('click', function() {

  textParagraph.textContent = 'New Text Content';
});

