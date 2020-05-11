$(document).ready(function(){
    $("#design-img").click(function(){
      $("#design-img").slideDown('1500').hide('1000');
      $("#design").show('1500');
    });
    $("#design").click(function(){
      $("#design").slideUp('1500');
      $("#design-img").slideDown('1500');
    });
  });
  $(document).ready(function(){
    $("#development-img").click(function(){
      $("#development-img").slideDown('1500').hide('1000');
      $("#development").show('1500');
    });
    $("#development").click(function(){
      $("#development").slideUp('1500');
      $("#development-img").slideDown('1500');
    });
  });
  $(document).ready(function(){
    $("#product-img").click(function(){
      $("#product-img").slideDown('1500').hide('1000');
      $("#product").show('1500');
    });
    $("#product").click(function(){
      $("#product").slideUp('1500');
      $("#product-img").slideDown('1500');
    });
  });
  $(document).ready(function(){
    $("form#form").submit(function(event){
      // event.preventDefault();
      var name = $("input#name").val();
      var email = $("input#email").val();
      var message = $("textarea#comment").val();
      if ($("input#email").val() && $("input#email").val()){
        alert (name + ", we have received your message. Thank you for reaching out to us.");
      }
      else {
        alert("Please enter your name and email!");
      }
      
    });
  
  });