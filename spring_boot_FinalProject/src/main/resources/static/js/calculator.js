/**
 * calculator.js
 */
 
 $(document).ready(function() {
   $('.menu').hide();
   $('.result').hide();
   $('.salaryTab').css('color','blue');
   $('.salary').show();
   $('.salary_result').show();
   $btn = $('.tabBtn');

   var menu = ["salary", "deposit","saving", "loan2", "loan"];
   var result = ["salary_result", "ds_result", "ds_result", "loan2_result", "loan_result"]
   $btn.each(function(index) {
      $(this).on('click', function() {
         $('.tabBtn').css('color','black');
         $(this).css('color','blue');
         $('.menu').hide();
         $('.result').hide();
         $('.' + menu[index]).show();
         $('.' + result[index]).show();
      });
   });
   
   
   

});