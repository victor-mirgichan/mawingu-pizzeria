function getVariety() {
  var selectedPizz = document.getElementById("pizz").value;
  return parseInt(selectedPizz);
}
function getSizeCost() {
  var selectedSize = document.getElementById("size").value;
  return parseInt(selectedSize);
}

function getCrustCost() {
  var selectedCrust = document.getElementById("crust").value;
  return parseInt(selectedCrust);
}
function getToppingCost() {
  var selectedtoppingone = document.getElementById("toppingone").value;
  return parseInt(selectedtoppingone);
}
function getNumber() {
  var selectedNumber = document.getElementById("numberofpizza").value;
  return parseInt(selectedNumber);
}
/* function mushrooms() {
  var mushroom = 0;
  var addMushroom = document.getElementById("toppingone");
  if (addMushroom.checked === true) {
      mushroom = 150;
  }
  return parseInt(mushroom);
}

function sausages() {
  var sausage = 0;
  var addsausage = document.getElementById("toppingone");
  if (addsausage.checked === true) {
      sausage = 50;
  }
  return parseInt(sausage);
}
function onions() {
  var onion = 0;
  var addonions = document.getElementById("toppingone");
  if (addMushroom.checked === true) {
      onion = 100;
  }
  return parseInt(onion);
}
function tikkaSaucee() {
  var tikkaSauce = 0;
  var addtikkaSauce = document.getElementById("toppingone");
  if (addtikkaSauce.checked === true) {
      tikkaSauce = 120;
  }
  return parseInt(tikkaSauce);
}
function mozarellaCheese() {
  var cheese = 0;
  var addmozarellaCheese = document.getElementById("toppingone");
  if (addmozarellaCheese.checked === true) {
      cheese = 110;
  }
  return parseInt(cheese);
}
*/ 
function calctotalPrice(e) {
  event.preventDefault();
  var totalPrice = (getSizeCost() + getCrustCost() + getToppingCost()) * (getNumber());
  
      console.log(totalPrice);
  alert("You have ordered  " + getNumber() + " Pizza, Your total payable amount is " + totalPrice +"." + "Please fill in your delivery details to complete your order");
}



// Delivery form inputs and alerts



$(document).ready(function () {
  $("#delivery").submit(function () {

      var name = $("input#name").val();
      var number = $("input#number").val();
      var location = $("input#location").val();

      alert("Hello " + name + ". Your order has been successfuly received and  it will be delivered to " +  location + " within  45 minutes. The delivery cost is ksh 150/= Thank you for choosing Mawingu Pizzeria.");
      // $(this).get(0).reset();
      //  event.preventDefault();
  });
  
});