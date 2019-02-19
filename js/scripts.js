$(document).ready(function() {
  var height = parseInt(prompt("How tall are you?"));

  if (height >=40 && height < 80) {
    $('#rides-tall').show();
  }
   else if (height >= 80) {
    $('#rides-short').show();
  }
  else { (height < 40)
    alert("Sorry, come back next year!")
    $('#rides-tall').hide();
    $('#rides-short').hide();


  };
});
