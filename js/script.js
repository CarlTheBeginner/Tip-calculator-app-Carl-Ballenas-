const btnTip = document.querySelectorAll('.btn');
const billInput = document.querySelector('.bill-input');
const customInput = document.querySelector('.custom-input');
const peopleInput = document.querySelector('.people-input');
const amountTip = document.querySelector('.amount-tip');
const btnReset = document.querySelector('.btn-reset');

let startCalculating = true;

const calculateTip = function (input) {
  if (!peopleInput.value) {
    startCalculating = false;
    peopleInput.classList.add('border-red');
    peopleInput.placeholder = `Can't be zero!!`;
  } else {
    peopleInput.classList.remove('border-red');
    peopleInput.placeholder = ``;
    startCalculating = true;
    let totalTip = (parseFloat(billInput.value) * input) / 100;
    let totalAmt = parseFloat(billInput.value) + totalTip;
    let tipPerson = parseFloat(totalTip) / peopleInput.value;
    let totalPerson = parseFloat(totalAmt) / peopleInput.value;

    amountTip.textContent = `$ ${tipPerson.toFixed(2)}`;
    document.querySelector('.total-tip').textContent = `$ ${totalPerson.toFixed(
      2
    )}`;
  }
};

btnTip.forEach((el) => {
  el.addEventListener('click', (e) => {
    e.preventDefault();
    if (!peopleInput.value) {
      startCalculating = false;
      peopleInput.classList.add('border-red');
      peopleInput.placeholder = `Can't be zero!!`;
    } else {
      peopleInput.classList.remove('border-red');
      peopleInput.placeholder = ``;
      startCalculating = true;
      // THIS WILL REMOVE THE PERCENTAGE SIGN.
      let text = el.textContent;
      text = text.replace('%', '');

      // CALCULATE ALL VALUES
      let totalTip = (parseFloat(billInput.value) * text) / 100;
      let totalAmt = parseFloat(billInput.value) + totalTip;
      let tipPerson = parseFloat(totalTip) / peopleInput.value;
      let totalPerson = parseFloat(totalAmt) / peopleInput.value;

      // ADDING 2 DECIMAL PLACES
      amountTip.textContent = `$${tipPerson.toFixed(2)}`;
      document.querySelector(
        '.total-tip'
      ).textContent = `$${totalPerson.toFixed(2)}`;
    }
  });
});

customInput.addEventListener('input', (e) => {
  e.preventDefault();

  const inputFloat = parseFloat(customInput.value);
  calculateTip(inputFloat);
});

btnReset.addEventListener('click', (e) => {
  e.preventDefault();

  billInput.value = '';
  peopleInput.value = '';
  document.querySelector('.total-tip').textContent = '$0.00';
  amountTip.textContent = '$0.00';
  customInput.value = '';
});
