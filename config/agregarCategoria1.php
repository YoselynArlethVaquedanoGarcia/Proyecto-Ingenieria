<?php


	NuevaCategoria($_POST['idCategoria'], $_POST['Tipocategoria']);

	function NuevaCategoria($idCategoria, $Tipocategoria)
	{
        $conexion=mysqli_connect("localhost","Yoselyn","Yoselyn123","proyecto");
		echo $consultaCon="INSERT INTO categoria (idCategoria,Tipocategoria) VALUES ('".$idCategoria."', '".$Tipocategoria."')";
        $resultadoCon=mysqli_query($conexion,$consultaCon);
	
	}
?>

<script type="text/javascript">
	alert("Categoria Ingresada exitosamente");
	window.location.href='../containers/RegistroCategorias.php';
</script>