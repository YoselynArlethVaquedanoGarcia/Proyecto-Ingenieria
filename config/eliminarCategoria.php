<?php
	
	EliminarCategoria($_GET['idCategoria']);

	function EliminarCategoria($idCategoria)
	{
        $conexion=mysqli_connect("localhost","Yoselyn","Yoselyn123","proyecto");
		$consultaCon="DELETE FROM categoria WHERE idCategoria='".$idCategoria."' ";
		$resultadoCon=mysqli_query($conexion,$consultaCon);
	}
?>

<script type="text/javascript">
	alert("Categoria Eliminada exitosamente");
	window.location.href='../containers/RegistroCategorias.php';
</script>