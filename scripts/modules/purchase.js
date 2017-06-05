define(["modules/credits","modules/products"], function(credits,products) {

  console.log("In purchase module");

  return {
    purchaseProduct: function() {

      var credit = credits.getCredits();
      if(credit > 0){
        products.reserveProduct();
        return true;
      }
      return false;
    }
  }
});
