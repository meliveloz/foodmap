
$(document).ready(function(){
	$(function(){
   	setTimeout(function() {
      $('#splash').fadeOut(1000);
   	}, 2000);
  });   // vista splash
	


 // $("galery").append("<a href='Akas-acapulco-sol-chair'><div class='product'><img src='img/AKAS.jpg' /><p class='producttitle'>Acapulco Sol</p><p class='productdesc>Chair</p></div></a>'");
$("#user-filter").on("change",function(){
//alert(this.value);
  $("#galery").empty();
  var prodsel=this.value;
for(i=0 ; i< foodPlace.length; i++){
  if(prodsel== foodPlace[i].filters)
 $("#galery").append("<div class='col-xs-3 modal-click'>"+foodPlace[i].photo+"<p class='producttitle'>"+foodPlace[i].name+"</p><p class='productdesc>Chair</p></div>'");

}

$(".modal-click").click(function(){ //al hacer click en el contenedor de las fotos
  $("#myModal").modal(); //iniciando el modal desde javascript
  var thisPhoto = $(this).children("img").attr("alt"); // guardamos la variable del Alt de la foto al hacer click
  for(i=0 ; i< foodPlace.length; i++){ //recorremos la data
    if (thisPhoto == foodPlace[i].name) { // si el alt de la foto es igual al nombre entonces...
      $(".modal-title").empty(); //borramos el titulo anterior
      $(".modal-body").empty();// borramos el contenido del modal-body (la dirección);
      $(".modal-title").html(foodPlace[i].name); // agregamos el nuevo nombre
      
     for (var n = 0; n < foodPlace[i].address.length; n++) { //recorremos la data en los array address
      $(".modal-body").append("<p class='adress-modal'>"+ foodPlace[i].address[n] +"</p>"); //agregamos la nueva dirección
     };

    };

};



});
    
});     


});

  


