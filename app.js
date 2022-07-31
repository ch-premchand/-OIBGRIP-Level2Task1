const buttons = document.querySelectorAll('button');
const display = document.querySelector('.display');
const display1 = document.querySelector('.display1');
buttons.forEach(function(button) {
  button.addEventListener('click', calculate);
});
function calculate(event) {
  const clickedButton = event.target.value;
  if (clickedButton === '=') {
  
    if (display.value !== '') 
    {
        display1.value=display.value+'=';
      display.value = eval(display.value);
    }
  } else if (clickedButton === 'C') 
  {
    display1.value = '';
    display.value = '';
  } else {
    display.value += clickedButton;
  }
}