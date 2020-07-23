function orderPizza() {
  var pizza1=parseInt(document.getElementById("vegPizza").value) * 820;
  var pizza2=parseInt(document.getElementById("chongo").value) * 940;
  var pizza3=parseInt(document.getElementById("seafood").value) * 990;
  var pizza4=parseInt(document.getElementById("ruspante").value) *820;
  var pizza5=parseInt(document.getElementById("marguerita").value) * 740;
  var pizza6=parseInt(document.getElementById("hawaii").value) * 820;
  var pizza7=parseInt(document.getElementById("salami").value) * 940;
  var pizza8=parseInt(document.getElementById("spicy").value) * 870;
  var pizza9=parseInt(document.getElementById("chicago").value) * 820;
  var pizza10=parseInt(document.getElementById("alfredo").value) * 820;

  if (isNaN(pizza1)==true){
    pizza1=0;
  }
  if (isNaN(pizza2)==true){
    pizza2=0;
  }

  if (isNaN(pizza3)==true){
    pizza3=0;
  }
  if (isNaN(pizza4)==true){
    pizza4=0;
  }
  if (isNaN(pizza5)==true){
    pizza5=0;
  }
  if (isNaN(pizza6)==true){
    pizza6=0;
  }
  if (isNaN(pizza7)==true){
    pizza7=0;
  }
  if (isNaN(pizza8)==true){
    pizza8=0;
  }
  if (isNaN(pizza9)==true){
    pizza9=0;
  }
  if (isNaN(pizza10)==true){
    pizza10=0;
  }

  var total = (pizza1 +  pizza2 +  pizza3 +  pizza4 +  pizza5 +  pizza6 +  pizza7
  +  pizza8 +  pizza9 +  pizza10);

  if (isNaN(pizza1)==true || isNaN(pizza2)==true || isNaN(pizza3)==true || isNaN(pizza4)==true ||
  isNaN(pizza5)==true || isNaN(pizza6)==true || isNaN(pizza7)==true || isNaN(pizza8)==true ||
  isNaN(pizza9)==true || isNaN(pizza10)==true)  {
    alert("Error!! Enter only Numeric values");
  }
  else{
    document.getElementById('total').value=total;
  }


}
