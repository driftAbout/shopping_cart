'use strict';

var product;
var products = {};
//var cart_items = [];
var cart_items = {};
var add_to_cart_btn = document.getElementById('add_to_cart');
var product_display = document.getElementById('product_display');
// Look for form data
var form = document.getElementById('order_form');

var imageNames = ['bag.jpg', 'banana.jpg', 'bathroom.jpg', 'boots.jpg', 'breakfast.jpg', 'bubblegum.jpg', 'chair.jpg', 'cthulhu.jpg', 'dog-duck.jpg', 'dragon.jpg', 'pen.jpg', 'pet-sweep.jpg', 'scissors.jpg', 'shark.jpg', 'sweep.png', 'tauntaun.jpg', 'unicorn.jpg', 'usb.gif', 'water-can.jpg', 'wine-glass.jpg'];

function Product(fileName) {
  this.fileName = fileName;
  this.imagePath;
  this.productName;
  this.imageFolder = 'images';
  //this.fileName = 'image/' + name + '.jpg';
  this.createImageInfo();
};
Product.prototype.createImageInfo = function(){
  this.imagePath = this.imageFolder + '/' + this.fileName;
  var nameParts = this.fileName.split('.');
  this.productName = nameParts[0];
};


// Make purchase form data into object
function Order(products, name, address, city, state, zip, phone, credit_card) {
  this.products = products;
  this.name = name;
  this.address = address;
  this.city = city;
  this.state = state;
  this.zip = zip;
  this.phone = phone;
  this.credit_card = credit_card;
};

form.addEventListener('submit', formData);

function formData(e) {
  e.preventDefault();
  console.log('name: ',e.target.name.value);

  var name = e.target.name.value;
  var address = e.target.address.value;
  var city = e.target.city.value;
  var state = e.target.state.value;
  var zip = e.target.zip.value;
  var phone = e.target.phone.value;
  var credit_card = e.target.credit_card.value;

  var order = new Order(cart_items, name, address, city, state, zip, phone, credit_card);
  localStorage.order = JSON.stringify(order);
  localStorage.products = JSON.stringify(products);
  window.location.href = 'cart.html';
};

//This function will create an object of all the products
// the products productName is used as the key
function build_product_objects(){
  for (var i = 0; i < imageNames.length; i++){
    //put product in an object with a key of product name
    product = new Product(imageNames[i]);
    products[product.productName] = product;
  }
}

/*//example data structure of products
products = {
  bag:{fileName: 'bag.jpg', imagePath: 'images/bag.jpg', productName: 'bag', imageFolder: 'images', createImageInfo()}
}
*/
add_to_cart_btn.addEventListener('click', add_product_to_cart);

function add_product_to_cart(e) {
  //cart_items.push({product:form.product.value, quantity:form.quantity.value});
  var selectedProduct = form.product.value
  if(!selectedProduct) return;
  cart_items[selectedProduct] = form.quantity.value;
  console.log(cart_items);
}

form.product.onchange = setDisplayImage;

function setDisplayImage(e){
  product_display.innerHTML = '';
  var product_image = document.createElement('img');
  product_image.setAttribute('src', products[this.value].imagePath);
  product_display.appendChild(product_image);
}

build_product_objects();
