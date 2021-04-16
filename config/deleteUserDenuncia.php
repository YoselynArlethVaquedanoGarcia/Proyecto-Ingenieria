<?php
	
	EliminarCategoria($_GET['idUsuario']);
echo $_GET['idUsuario'];
	function EliminarCategoria($idUsuario)
	{
        $conexion=mysqli_connect("localhost","Chris","zxcv","proyecto");
		$consultaCon="DELETE FROM usuario WHERE idUsuario='".$idUsuario."' ";
		$resultadoCon=mysqli_query($conexion,$consultaCon);
	}
?>

<script type="text/javascript">
	alert("Usuario Eliminado Exitosamente");
	window.location.href='../html/ltr/darDeBaja.php';
</script>