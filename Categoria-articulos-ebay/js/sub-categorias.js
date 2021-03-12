$(document).ready(function(){
    console.log("se ha cargado");
    $.ajax({
        url:"ajax/obtener-subcategoria.php?accion=listar1",
        dataType:"json",
        success:function(respuesta){
            console.log(respuesta);
            for(var i=0;i<respuesta.length;i++){
                $("#lista-ul").append(`<li>
                <div class="input-checkbox">
                <a href="#"><span>${respuesta[i].nombre}</span></a>
                </div>
                </li>`);
            };
        },
        error:function(error){
            console.log(error);
            $("#lista-ul").append(error.responseText);
        }
    });
    //sub-categoria2
    $.ajax({
        url:"ajax/obtener-subcategoria.php?accion=listar2",
        dataType:"json",
        success:function(respuesta){
        console.log(respuesta);
            for(var i=0;i<respuesta.length;i++){
                $("#lista-ul-2").append(`<li>
                <div class="input-checkbox">
                <a href="#"><span>${respuesta[i].nombre}</span></a>
                </div>
                </li>`);
            };
        },
        error:function(error){
        console.log(error);
        $("#lista-ul").append(error.responseText);
        }
    });
     //sub-categoria3
     $.ajax({
        url:"ajax/obtener-subcategoria.php?accion=listar3",
        dataType:"json",
        success:function(respuesta){
        console.log(respuesta);
            for(var i=0;i<respuesta.length;i++){
                $("#lista-ul-3").append(`<li>
                <div class="input-checkbox">
                <a href="#"><span>${respuesta[i].nombre}</span></a>
                </div>
                </li>`);
            };
        },
        error:function(error){
        console.log(error);
        $("#lista-ul").append(error.responseText);
        }
    });
    //sub-categoria4
    $.ajax({
        url:"ajax/obtener-subcategoria.php?accion=listar4",
        dataType:"json",
        success:function(respuesta){
        console.log(respuesta);
            for(var i=0;i<respuesta.length;i++){
                $("#lista-ul-4").append(`<li>
                <div class="input-checkbox">
                <a href="#"><span>${respuesta[i].nombre}</span></a>
                </div>
                </li>`);
            };
        },
        error:function(error){
        console.log(error);
        $("#lista-ul").append(error.responseText);
        }
    });
     //sub-categoria5
     $.ajax({
        url:"ajax/obtener-subcategoria.php?accion=listar5",
        dataType:"json",
        success:function(respuesta){
        console.log(respuesta);
            for(var i=0;i<respuesta.length;i++){
                $("#lista-ul-5").append(`<li>
                <div class="input-checkbox">
                <a href="#"><span>${respuesta[i].nombre}</span></a>
                </div>
                </li>`);
            };
        },
        error:function(error){
        console.log(error);
        $("#lista-ul").append(error.responseText);
        }
    });
     //sub-categoria6
     $.ajax({
        url:"ajax/obtener-subcategoria.php?accion=listar6",
        dataType:"json",
        success:function(respuesta){
        console.log(respuesta);
            for(var i=0;i<respuesta.length;i++){
                $("#lista-ul-6").append(`<li>
                <div class="input-checkbox">
                <a href="#"><span>${respuesta[i].nombre}</span></a>
                </div>
                </li>`);
            };
        },
        error:function(error){
        console.log(error);
        $("#lista-ul").append(error.responseText);
        }
    });
     //sub-categoria7
     $.ajax({
        url:"ajax/obtener-subcategoria.php?accion=listar7",
        dataType:"json",
        success:function(respuesta){
        console.log(respuesta);
            for(var i=0;i<respuesta.length;i++){
                $("#lista-ul-7").append(`<li>
                <div class="input-checkbox">
                <a href="#"><span>${respuesta[i].nombre}</span></a>
                </div>
                </li>`);
            };
        },
        error:function(error){
        console.log(error);
        $("#lista-ul").append(error.responseText);
        }
    });
     //sub-categoria8
     $.ajax({
        url:"ajax/obtener-subcategoria.php?accion=listar8",
        dataType:"json",
        success:function(respuesta){
        console.log(respuesta);
            for(var i=0;i<respuesta.length;i++){
                $("#lista-ul-8").append(`<li>
                <div class="input-checkbox">
                <a href="#"><span>${respuesta[i].nombre}</span></a>
                </div>
                </li>`);
            };
        },
        error:function(error){
        console.log(error);
        $("#lista-ul").append(error.responseText);
        }
    });
    //sub-categoria9
    $.ajax({
        url:"ajax/obtener-subcategoria.php?accion=listar9",
        dataType:"json",
        success:function(respuesta){
        console.log(respuesta);
            for(var i=0;i<respuesta.length;i++){
                $("#lista-ul-9").append(`<li>
                <div class="input-checkbox">
                <a href="#"><span>${respuesta[i].nombre}</span></a>
                </div>
                </li>`);
            };
        },
        error:function(error){
        console.log(error);
        $("#lista-ul").append(error.responseText);
        }
    });
    //sub-categoria10
    $.ajax({
        url:"ajax/obtener-subcategoria.php?accion=listar10",
        dataType:"json",
        success:function(respuesta){
        console.log(respuesta);
            for(var i=0;i<respuesta.length;i++){
                $("#lista-ul-10").append(`<li>
                <div class="input-checkbox">
                <a href="#"><span>${respuesta[i].nombre}</span></a>
                </div>
                </li>`);
            };
        },
        error:function(error){
        console.log(error);
        $("#lista-ul").append(error.responseText);
        }
    });
    //sub-categoria11
    $.ajax({
        url:"ajax/obtener-subcategoria.php?accion=listar11",
        dataType:"json",
        success:function(respuesta){
        console.log(respuesta);
            for(var i=0;i<respuesta.length;i++){
                $("#lista-ul-11").append(`<li>
                <div class="input-checkbox">
                <a href="#"><span>${respuesta[i].nombre}</span></a>
                </div>
                </li>`);
            };
        },
        error:function(error){
        console.log(error);
        $("#lista-ul").append(error.responseText);
        }
    });
    //sub-categoria12
    $.ajax({
        url:"ajax/obtener-subcategoria.php?accion=listar12",
        dataType:"json",
        success:function(respuesta){
        console.log(respuesta);
            for(var i=0;i<respuesta.length;i++){
                $("#lista-ul-12").append(`<li>
                <div class="input-checkbox">
                <a href="#"><span>${respuesta[i].nombre}</span></a>
                </div>
                </li>`);
            };
        },
        error:function(error){
        console.log(error);
        $("#lista-ul").append(error.responseText);
        }
    });
    //sub-categoria13
    $.ajax({
        url:"ajax/obtener-subcategoria.php?accion=listar13",
        dataType:"json",
        success:function(respuesta){
        console.log(respuesta);
            for(var i=0;i<respuesta.length;i++){
                $("#lista-ul-13").append(`<li>
                <div class="input-checkbox">
                <a href="#"><span>${respuesta[i].nombre}</span></a>
                </div>
                </li>`);
            };
        },
        error:function(error){
        console.log(error);
        $("#lista-ul").append(error.responseText);
        }
    });
    //sub-categoria14
    $.ajax({
        url:"ajax/obtener-subcategoria.php?accion=listar14",
        dataType:"json",
        success:function(respuesta){
        console.log(respuesta);
            for(var i=0;i<respuesta.length;i++){
                $("#lista-ul-14").append(`<li>
                <div class="input-checkbox">
                <a href="#"><span>${respuesta[i].nombre}</span></a>
                </div>
                </li>`);
            };
        },
        error:function(error){
        console.log(error);
        $("#lista-ul").append(error.responseText);
        }
    });
    //sub-categoria15
    $.ajax({
        url:"ajax/obtener-subcategoria.php?accion=listar15",
        dataType:"json",
        success:function(respuesta){
        console.log(respuesta);
            for(var i=0;i<respuesta.length;i++){
                $("#lista-ul-15").append(`<li>
                <div class="input-checkbox">
                <a href="#"><span>${respuesta[i].nombre}</span></a>
                </div>
                </li>`);
            };
        },
        error:function(error){
        console.log(error);
        $("#lista-ul").append(error.responseText);
        }
    });
    //sub-categoria16
    $.ajax({
        url:"ajax/obtener-subcategoria.php?accion=listar16",
        dataType:"json",
        success:function(respuesta){
        console.log(respuesta);
            for(var i=0;i<respuesta.length;i++){
                $("#lista-ul-16").append(`<li>
                <div class="input-checkbox">
                <a href="#"><span>${respuesta[i].nombre}</span></a>
                </div>
                </li>`);
            };
        },
        error:function(error){
        console.log(error);
        $("#breadcrumb").append(error.responseText);
        }
    });



    $.ajax({
        url:"ajax/articulos.php?accion=listar",
        dataType:"json",
        success:function(res){
            console.log(res);
        },
        error:function(error){
            console.log(error);
        }
    });
});