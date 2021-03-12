function iniciarSeccion(){
	
	ValidarGenero();
	ValidarPassword2();
	validarTerminos();
	

}

function validarTel(campo){

	  if (/^\d{4}-\d{2}-\d{2}$/.test(campo.value)) {
	  		alert("telefono bueno");
	  		campo.classList.remove('input-error');
  			campo.classList.add('input-success');

	 }else{
	 	console.log("telefono malo");
	 	campo.classList.add('input-error');
  		campo.classList.remove('input-success');
	 }
}


function validarNombre(campo){
    
    if ( /^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(campo.value)) {
  		console.log("nombre bueno ");
  		campo.classList.remove('input-error');
  		campo.classList.add('input-success');
 	}else{
 	//alert(" En el nombre no se permite simbolos  ");

 	campo.classList.add('input-error');
  	campo.classList.remove('input-success');
 }
}

function validarDire(campo){
 
    if (/[A-Za-z0-9]/.test(campo.value)) {
  		console.log(" direccion bueno ");
  		campo.classList.remove('input-error');
  		campo.classList.add('input-success');
 }else{
 	alert(" En direccion no se permite simbolos  ");
 	campo.classList.add('input-error');
  	campo.classList.remove('input-success');
 }
}

function validarPassword(campo){
    	
    if ( /^.{4,12}$/.test(campo.value)) {
  		console.log("contraseña bueno ");
  		campo.classList.remove('input-error');
  		campo.classList.add('input-success');
  		//campo.disabled = true;
 	}else{
 	//alert(" En el nombre no se permite simbolos  ");

 	campo.classList.add('input-error');
  	campo.classList.remove('input-success');
 }

}




function ValidarGenero(){
	if (document.getElementById('genero1').checked) {
		console.log("Masculino");
	}else if (document.getElementById('genero2').checked){
		console.log("femenino");

	}else{
		//alert(" no hay genero seleccionado");
	}

}

function ValidarPassword2(){
	const inputPassword1= document.getElementById('password');
	const inputPassword2= document.getElementById('conpass');

	if (inputPassword1.value !== inputPassword2.value ){
		console.log(" contraseña invalida ");
		inputPassword1.classList.remove('input-success');
		inputPassword1.classList.remove('form-control');
		inputPassword2.classList.remove('form-control');
		inputPassword1.classList.add('form-control');
		inputPassword2.classList.add('form-control');



	}else{
		console.log("validad");
		inputPassword2.classList.add('form-control');
		inputPassword1.classList.add('form-control');


	}
}

function validarTerminos(){
	if (document.getElementById('invalidCheck2').checked)
	{
		alert('checkbox2 esta seleccionado');
	}else{
		alert('no esta seleccionado los terminos ');
	}
}
