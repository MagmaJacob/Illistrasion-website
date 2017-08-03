(function() {

  var myFunction = function(){
    document.getElementById("appear").className += " dissappear";
  }
  var myFunction2 = function(){
    document.getElementById("dissappear").className -= " dissappear";
  };

  var myInput = document.getElementById("myInput");
  // element.addEventListener("click", myInput);

  myInput.addEventListener("click", function() {
    myFunction();
    myFunction2();
  })
})()
