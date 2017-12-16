
$(document).ready(function(){
	$(function(){
   	setTimeout(function() {
      $('#splash').fadeOut(1000);
   	}, 4000);
  });   // vista splash
	


  $("#user-filter").change(function() {    //usado para el filtrado con opciones
    $("#galery").empty();  //cada vez que elijo una opción mi galeria borra lo anterior
    var userOption = $("select").val(); //guardando en una variable el valor de mi elección 
    for (var i = 0; i < foodPlace.length; i++) {   //recorriendo el largo de food place (mi data)
      for(var j = 0; j < foodPlace[i].filters.length; j++) { //voy a recorrer mi array de filtros
        if (foodPlace[i].filters[j] == userOption) { // si el valor de mi opción es igual a uno de mis filtros
          var foodPhoto = foodPlace[i].photo; //guardo la foto de la coincidencia
          var name=foodPlace[i].name; //guardo el nombre del restonant de la coincidencia
          $("#galery").append("<div class='col-xs-4 photo-container'>"+foodPhoto+"</div>"); // agrego a mi galeria la foto del restorant.
      
        };
      };
    };
    });

    
     


});

  


