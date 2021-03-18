console.log("se ha cargado el DOM");

$("#btn-buscar").click(function(){
    $.ajax({
        url:"ajax/busqueda.php",
        data:"busqueda="+$("#busqueda").val(),
        dataType:"json",
        method:"POST",
        success:function(respuesta){
            console.log(respuesta);
            if (respuesta.estatus == 1){
                if (respuesta.articulo=="articulo1")
                    window.location.href = "Articulo-1.php";//redireccionar
                if (respuesta.articulo=="articulo2")
                    window.location.href = "Articulo-2.php";//redireccionar
                if (respuesta.articulo=="articulo3")
                    window.location.href = "Articulo-3.php";
                if (respuesta.articulo=="articulo4")
                    window.location.href = "Articulo-4.php";
                if (respuesta.articulo=="articulo5")
                    window.location.href = "Articulo-5.php";
                if (respuesta.articulo=="articulo6")
                    window.location.href = "Articulo-6.php";
                if (respuesta.articulo=="articulo7")
                    window.location.href = "Articulo-7.php";
                if (respuesta.articulo=="articulo8")
                    window.location.href = "Articulo-8.php";
                if (respuesta.articulo=="articulo9")
                    window.location.href = "Articulo-9.php";
                if (respuesta.articulo=="articulo10")
                    window.location.href = "Articulo-10.php";
                if (respuesta.articulo=="articulo11")
                    window.location.href = "Articulo-11.php";
                if (respuesta.articulo=="articulo12")
                    window.location.href = "Articulo-12.php";
                if (respuesta.articulo=="articulo13")
                    window.location.href = "Articulo-13.php";
                if (respuesta.articulo=="articulo14")
                    window.location.href = "Articulo-14.php";
                if (respuesta.articulo=="articulo15")
                    window.location.href = "Articulo-15.php";
                if (respuesta.articulo=="articulo16")
                    window.location.href = "Articulo-16.php";
                if (respuesta.articulo=="articulo17")
                    window.location.href = "Articulo-17.php";
                if (respuesta.articulo=="articulo18")
                    window.location.href = "Articulo-18.php";
                    
                
            }else 
                alert("busqueda incorrecta");
        },
        error:function(error){
            console.error(error);
            $("#error").append(error.responseText);
        }
    });
});