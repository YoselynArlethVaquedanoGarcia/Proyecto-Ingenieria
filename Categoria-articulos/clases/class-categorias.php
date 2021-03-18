<?php
class Categorias{
	private $nombre;

	public function __construct(
		$nombre = null
	){
		$this->nombre = $nombre;
	}

	public function __toString(){
		$var = "SubCategorias{"
		."nombre: ".$this->nombre;
		return $var."}";
	}

	public function getNombre(){
		return $this->nombre;
	}

	public function setNombre($nombre){
		$this->nombre = $nombre;
    }
    //subcategoria1
    public static function listar(){
        $archivo = fopen("../data/categorias.json","r");
        $respuesta = array();
        while(($linea=fgets($archivo))){
        $respuesta[] = json_decode($linea,true);
        }
        echo json_encode($respuesta);
        fclose($archivo);
    }
    

}
?>