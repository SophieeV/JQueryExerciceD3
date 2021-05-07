  var firstName=/[A-Z][a-z]*(-[A-Z][a-z]?)?/;
  var telNumber=/^0[6-7][0-9]{10}$/;
  var mailAdress=/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
  $(document).ready(function(){
      $("#b1").click(function(event){
          if(firstName.test($("#surname").val())== false){
              event.preventDefault();
              $('#surname').css("border","3px solid red");
          }else{
              $('#surname').css("border","3px solid green");
          }
          if(firstName.test($("#name").val())== false){
              event.preventDefault();
              $('#name').css("border","3px solid red");
          }else{
              $('#name').css("border","3px solid green");
          }
          if(telNumber.test($("#phone").val())== false){
                  event.preventDefault();
                  $('#phone').css("border","3px solid red");
          }else{
              $('#phone').css("border","3px solid green");
          }
          if(mailAdress.test($("#email").val())== false){
              event.preventDefault();
                  $('#email').css("border","3px solid red");
          }else{
              $('#email').css("border","3px solid green");
          }
      })
  })
