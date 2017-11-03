'use strict';


var line_order;
var order_image;
var number_input;
var title;
var imagePath;
var remove_button;
var selected_items_list = document.getElementById('selected_items_list');

if(localStorage.order){
  fillCart();
}


function fillCart(){
  var order = JSON.parse(localStorage.order);
  console.log(order)
  var products_quantities = order.products;
  var products = JSON.parse(localStorage.products);
  console.log(products)
  for (var i = 0; i < products_quantities.length; i++){
    imagePath = products[products_quantities[i].product].imagePath;
    line_order = document.createElement('li');
    order_image = document.createElement('img');
    order_image.setAttribute('src', imagePath);
    line_order.appendChild(order_image);
    title = document.createElement('p');
    title.textContent = products_quantities.product;
    line_order.appendChild(title);
    number_input = document.createElement('input');
    number_input.setAttribute('type', 'number');
    number_input.value = products_quantities[i].quantity;
    line_order.appendChild(number_input);
    remove_button = document.createElement('button');
    remove_button.setAttribute('type','button');
    remove_button.textContent = 'remove from cart';
    line_order.appendChild(remove_button);
    selected_items_list.appendChild(line_order);
  }
}
