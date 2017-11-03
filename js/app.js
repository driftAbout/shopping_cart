'use strict';

// Make purchase form data into object
function Purchase(product, quantity, name, address, city, state, zip, phone, credit_card) {
  this.product = product;
  this.quantity = 0;
  this.name = name;
  this.address = address;
  this.city = city;
  this.state = state;
  this.zip = zip;
  this.phone = phone;
  this.credit_card = credit_card;
};

// Look for form data
var form = document.getElementById('order_form');
form.addEventListener('add_to_cart', formData);
