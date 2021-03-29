<?php
	

	ModificarCategoria($_POST['idCategoria'], $_POST['Tipocategoria']);

	function ModificarCategoria($id_categoria, $categoria)
	{
        $conexion=mysqli_connect("localhost","Yoselyn","Yoselyn123","proyecto");
		$consultaCon="UPDATE categoria SET Tipocategoria= '".$categoria."' WHERE idCategoria='".$id_categoria."' ";
		$resultadoCon=mysqli_query($conexion,$consultaCon);
	}
?>

<script type="text/javascript">
	alert("Categoria Modificada exitosamente");
	window.location.href='../containers/RegistroCategorias.php';
</script>