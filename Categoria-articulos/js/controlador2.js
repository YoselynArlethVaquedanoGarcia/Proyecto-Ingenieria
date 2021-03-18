$(document).ready(function(){
    console.log("se ha cargado");
    $.ajax({
        url:"ajax/obtener-categoria.php?accion=listar1",
        dataType:"json",
        success:function(respuesta){
            console.log(respuesta);
            for(var i=0;i<respuesta.length;i++){
                $("#select-categoria").append(`<option value="${i}">${respuesta[i].nombre}</option>`);
            };
        },
        error:function(error){
            console.log(error);
            $("#select-categoria").append(error.responseText);
        }
    });
    $.ajax({
        url:"ajax/obtener-cat.php?accion=listar1",
        dataType:"json",
        success:function(respuesta){
            console.log(respuesta);
            for(var i=0;i<respuesta.length;i++){
                $("#comprar-cat").append(`<option value="${i}">${respuesta[i].nombre}</option>`);
            };
        },
        error:function(error){
            console.log(error);
            $("#comprar-cat").append(error.responseText);
        }
    });
});