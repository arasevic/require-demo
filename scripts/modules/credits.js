define(function() {
  console.log("In credits module");

  return {
    getCredits: function() {
      console.log("Getting the number of credits");
      var credits = "100";
      return credits;
    }
  }
});
