function iniciarSeccion(){
	var evaluar = false;
	var formulario = document.getElementById('formulario');
	

	

//ValidarNombre('nombre')
//validarTel('tel');
//validarDire('dir');
//ValidarGenero();
//validarPassword('password')
//validarTerminos();
//(ValidarNombre('nombre')==false) &&

if (ValidarNombre('nombre') !==false)  {
	if (validarTel('tel')!==false) 
	{
 		if (validarDire('dir')!==false)
 	   {
	 		if (ValidarGenero()!==false ) 
	 		{
	 			if (validarPassword('password')!==false) {

	 				if (validarTerminos()!==false) {
	 					alert('Formulario correcto    ');
	 				}else{
	 					alert('Formulario invalalido  ');
	 				}
	 			}else{
	 				alert('Formulario invalalido  ');
	 			}
	 			
	 		}else{
	 			alert('Formulario invalalido  ');
 			}
	 	}else{
	 		alert('Formulario invalalido  ');
 		}

 	}else{
 		alert('Formulario invalalido  ');
 	}
}else{
	alert('Formulario invalalido  ');
}



}


// validar nombre sin simbolos especiales 
function ValidarNombre(id){

		let campo= document.getElementById(id);
		const  patron = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;

		if ( ! patron.test(campo.value)) {
	  			alert("En campo Nombre  solo se permiten letras ");

			 	campo.classList.add('input-error');
			  	campo.classList.remove('input-success');
			  	campo.value="";
			  	campo.focus();
	
		return false;
		  
  		
 	}
 	

}

//Validar el numero telefonico 

function validarTel(id){

	let campo= document.getElementById(id);
	const  patron =/^\d{8}$/;

	  if (! patron.test(campo.value)) {
	  		alert("En el campo Telefono solo se permiten  numeros  ");
		 	campo.classList.add('input-error');
	  		campo.classList.remove('input-success');
			campo.value="";
		  	campo.focus();
		return false;

	}
	
}
//Validar direccion no incluya signos especiales 
function validarDire(id){
		let campo= document.getElementById(id);
	    const  patron =/[A-Za-z0-9]/;
 
    if (! patron.test(campo.value)) {
  		alert(" En el campo direccion no se permite simbolos  ");
 		campo.classList.add('input-error');
  		campo.classList.remove('input-success');
  		campo.value="";
		 campo.focus();
 return false;
	
 }

}

// validar seleccionar un genero 
function ValidarGenero(){
		let campo= document.getElementById('genero1');

	if (document.getElementById('genero1').checked) {
		
		//alert("masculino    ")
		return true;
	}else if (document.getElementById('genero2').checked){
		//alert(" femenino  ");
	return true;
	}else{
		alert('Seleccione un  genero ');
	return false;
		
	}

}

function ValidarPassword2(){
	const inputPassword1= document.getElementById('password');
	const inputPassword2= document.getElementById('conpass');

	if (inputPassword1.value !== inputPassword2.value ){
		alert(" contraseña no coinciden  ");
			inputPassword1.classList.add('input-error');
	  		inputPassword1.classList.remove('input-success');
	  		inputPassword1.value="";
		 	inputPassword1.focus();

		 	inputPassword2.classList.add('input-error');
	  		inputPassword2.classList.remove('input-success');
	  		inputPassword2.value="";
	  		
		return false;
	}
	}
	


function validarPassword(id){
		let campo= document.getElementById(id);
	    const  patron = /^.{4,20}$/;
    	
   if ( patron.test(campo.value)) {
  			if (ValidarPassword2()!== false){
  				console.log(' coinciden ');
  				return true;
  			}else{
  				console.log(' no coinciden  ');
  				return false;
  			}


 	}else{

	 	campo.classList.add('input-error');
	  	campo.classList.remove('input-success');
	  	document.getElementById('conpass').classList.add('input-error');
	  	document.getElementById('conpass').classList.remove('input-success');


	  	document.getElementById('password').value="";
	  	document.getElementById('conpass').value="";
	  	document.getElementById('password').focus();
	  	return false;
	  	
 }

}

function validarTerminos(){
	if (! document.getElementById('invalidCheck2').checked)
	{
		alert('No Acepto los  terminos');
		return false;
	}
}

/// funcion para cambiar la contraseña
function cambiarContraseña(){

	if (validarPassword('password')!==false){
		alert(' Contraseña Actualizada');
	}else{
		alert('Contraseña incorrecta ');
	}
}
