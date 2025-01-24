
// add event listener to quantity buttons
document.querySelectorAll('.quantity .minus, .quantity .plus').forEach((btn) => {
    btn.addEventListener('click', (event) => {
      // get input element
      const input = event.target.parentNode.querySelector('.quantity-input');
      // get current value
      let value = parseInt(input.value);
      // increment or decrement value based on button clicked
      if (event.target.classList.contains('plus')) {
        value++;
      } else if (event.target.classList.contains('minus') && value > 1) {
        value--;
      }
      // update input value
      input.value = value;
    });
  });
  