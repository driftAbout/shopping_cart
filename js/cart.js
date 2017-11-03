'use strict';

var productKeys;
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
  productKeys = Object.keys(products_quantities);
  for (var i = 0; i < productKeys.length; i++){
    imagePath = products[productKeys[i]].imagePath;
    line_order = document.createElement('li');
    order_image = document.createElement('img');
    order_image.setAttribute('src', imagePath);
    line_order.appendChild(order_image);
    title = document.createElement('p');
    title.textContent = products_quantities.product;
    line_order.appendChild(title);
    number_input = document.createElement('input');
    number_input.setAttribute('type', 'number');
    number_input.value = products_quantities[productKeys[i]];
    line_order.appendChild(number_input);
    remove_button = document.createElement('button');
    //remove_button.setAttribute('type','button');
    remove_button.setAttribute('id',productKeys[i]);
    remove_button.textContent = 'remove from cart';
    remove_button.addEventListener('click',  removeFromCart)
    line_order.appendChild(remove_button);
    selected_items_list.appendChild(line_order);
  }
  addUserInfo()
}

function addUserInfo(){
  var order = JSON.parse(localStorage.order);
  var user_info_ids = ['name','address','city', 'state', 'zip', 'phone', 'credit_card'];
  for (var i = 0; i < user_info_ids.length; i++){
    console.log(user_info_ids[i]);
    document.getElementById(user_info_ids[i]).textContent = order[user_info_ids[i]];
  }
}



function  removeFromCart(){
  var product_id = this.getAttribute('id')
  var order = JSON.parse(localStorage.order);
  delete order.products[product_id];
  localStorage.order = JSON.stringify(order);
  this.parentNode.style.display = 'none';
  console.log('id: ', this.getAttribute('id'));
  console.log('parent', this.parentNode);

}
