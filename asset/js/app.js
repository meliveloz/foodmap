
$(document).ready(function(){
	$(function(){
   	setTimeout(function() {
      $('#splash').fadeOut(1000);
   	}, 4000);
  });
	


  $("#user-filter").change(function() {
    $("#galery").empty();
    var userOption = $("select").val();
    for (var i = 0; i < foodPlace.length; i++) {
      for(var j = 0; j < foodPlace[i].filters.length; j++) {
        if (foodPlace[i].filters[j] == userOption) {
          var foodPhoto = foodPlace[i].photo;
          var name=foodPlace[i].name;
          $("#galery").append("<div class='col-xs-4 photo-container'>"+foodPhoto+"</div>");
      
        };
      };
    };
    });

    
     


});

  


