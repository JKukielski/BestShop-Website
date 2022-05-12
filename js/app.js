const products = document.querySelector('#products');
const orders = document.querySelector('#orders');
const packageSelection = document.querySelector('#package');
const packageChoices = document.querySelectorAll('.select__dropdown li');
const dropDownMenu = document.querySelector('.select__dropdown');
const accountingCheckbox = document.querySelector('#accounting');
const terminalCheckbox = document.querySelector('#terminal');
const totalPrice = document.querySelector('#total-price');
const totalPriceAmount = document.querySelector('.total__price');
const pricingFactors = document.querySelectorAll('[data-id]');



products.addEventListener('input', function(e) {
  
  products.style.color = 'black';
  totalPrice.style.display = 'flex';
  if (products.value < 1) {
    document.querySelector('[data-id=products]').style.display = 'none';
    totalPrice.style.display = 'none';
  }else {
    document.querySelector('[data-id=products]').style.display = 'flex';
    document.querySelector('[data-id=products] .item__calc').innerText = `${products.value} * $0.5`;
    document.querySelector('[data-id=products] .item__price').innerText = `$${products.value * 0.5}`;
  }

});

orders.addEventListener('input', function(e) {
  
  orders.style.color = 'black';
  totalPrice.style.display = 'flex';
  if (orders.value < 1) {
    document.querySelector('[data-id=orders]').style.display = 'none';
    totalPrice.style.display = 'none';
  } else {
    document.querySelector('[data-id=orders]').style.display = 'flex';
    document.querySelector('[data-id=orders] .item__calc').innerText = `${orders.value} * $0.5`;
    document.querySelector('[data-id=orders] .item__price').innerText = `$${orders.value * 0.5}`    
  }

});

packageSelection.addEventListener('click', function(e) {
  
  e.preventDefault();

  packageSelection.classList.toggle('open');
  
});

packageChoices.forEach(function (element) {
  
  element.addEventListener('click', function(e) {
    totalPrice.style.display = 'flex';
    document.querySelector('[data-id=package]').style.display = 'flex';
    document.querySelector('[data-id=package] .item__calc').innerText = element.innerText;
    document.querySelector('.select__input').innerText = element.innerText;
    document.querySelector('.select__input').style.color = 'black';

    if (element.dataset.value === 'basic') {
      document.querySelector('[data-id=package] .item__price').innerText = '$0';
    } else if (element.dataset.value === 'professional') {
      document.querySelector('[data-id=package] .item__price').innerText = '$25';
    } else if (element.dataset.value === 'premium') {
      document.querySelector('[data-id=package] .item__price').innerText = '$60';
    }
  });
});

accountingCheckbox.addEventListener('change', function(e) {
  totalPrice.style.display = 'flex';
  if (accountingCheckbox.checked === true) {
    document.querySelector('[data-id=accounting]').style.display = 'flex'
    document.querySelector('[data-id=accounting] .item__price').innerText = '$35';
  } else {
    document.querySelector('[data-id=accounting]').style.display = 'none';
  }
})


terminalCheckbox.addEventListener('change', function(e) {
  totalPrice.style.display = 'flex';
  if (terminalCheckbox.checked === true) {
    document.querySelector('[data-id=terminal]').style.display = 'flex'
    document.querySelector('[data-id=terminal] .item__price').innerText = '$5';
  } else {
    document.querySelector('[data-id=terminal]').style.display = 'none';
  }
})

const productsForSum = products.value * 0.5;
const ordersForSum = orders.value * 0.5;
