$("#btn-login").click(function(){
    console.log("hola");
    $.ajax({
		url:"ajax/login.php",
		data:"email="+$("#email").val() + "&password="+$("#password").val(),
		dataType:"json",
		method:"POST",
		success:function(respuesta){
			console.log(respuesta);
			if(respuesta.estatus == 1){
                    window.location.href = "../index.php";
                    console.log("se ha cargado");
                    $("#hola").append(
                        `
                            <p></p>
                        `
                    );
                    console.log("El servidor DICE: "+respuesta.nombre);

            }else{
                if(respuesta.estatus == 0){
                $('#email').css('border-bottom-color', '#F14B4B')
				var mensajeModal = '<div class="modal_wrap">'+
                                    '<div class="mensaje_modal">'+
										'<h2 style="text-align:center;">Error</h2>'+
										'<p><b>Correo incorrecto o</b></p>'+
										'<p><b>Contraseña Incorrecta</b></p>'+
                                        '<span id="btnClose">Finalizar</span>'+
                                    '</div>'+
                                '</div>'
                $('head').append(mensajeModal);
                }
            }
                // CERRANDO MODAL ==============================
                $('#btnClose').click(function(){
                    $('.modal_wrap').remove();
                });
            },
            error:function(error){
                console.error(error);
                $("#notificacion").append(error.responseText);
            }
	});
    
});