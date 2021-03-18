<?php
class SubCategorias{
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
    public static function listar1(){
        $archivo = fopen("../data/subcategoria1.json","r");
        $respuesta = array();
        while(($linea=fgets($archivo))){
        $respuesta[] = json_decode($linea,true);
        }
        echo json_encode($respuesta);
        fclose($archivo);
    }
    //subcategoria2
    public static function listar2(){
        $archivo = fopen("../data/subcategoria2.json","r");
        $respuesta = array();
        while(($linea=fgets($archivo))){
        $respuesta[] = json_decode($linea,true);
        }
        echo json_encode($respuesta);
        fclose($archivo);
    }
    //subcategoria3
    public static function listar3(){
        $archivo = fopen("../data/subcategoria3.json","r");
        $respuesta = array();
        while(($linea=fgets($archivo))){
        $respuesta[] = json_decode($linea,true);
        }
        echo json_encode($respuesta);
        fclose($archivo);
    }
    //subcategoria4
    public static function listar4(){
        $archivo = fopen("../data/subcategoria4.json","r");
        $respuesta = array();
        while(($linea=fgets($archivo))){
        $respuesta[] = json_decode($linea,true);
        }
        echo json_encode($respuesta);
        fclose($archivo);
    }
    //subcategoria5
    public static function listar5(){
        $archivo = fopen("../data/subcategoria5.json","r");
        $respuesta = array();
        while(($linea=fgets($archivo))){
        $respuesta[] = json_decode($linea,true);
        }
        echo json_encode($respuesta);
        fclose($archivo);
    }
    //subcategoria6
    public static function listar6(){
        $archivo = fopen("../data/subcategoria6.json","r");
        $respuesta = array();
        while(($linea=fgets($archivo))){
        $respuesta[] = json_decode($linea,true);
        }
        echo json_encode($respuesta);
        fclose($archivo);
    }
    //subcategoria7
    public static function listar7(){
        $archivo = fopen("../data/subcategoria7.json","r");
        $respuesta = array();
        while(($linea=fgets($archivo))){
        $respuesta[] = json_decode($linea,true);
        }
        echo json_encode($respuesta);
        fclose($archivo);
    }
    //subcategoria8
    public static function listar8(){
        $archivo = fopen("../data/subcategoria8.json","r");
        $respuesta = array();
        while(($linea=fgets($archivo))){
        $respuesta[] = json_decode($linea,true);
        }
        echo json_encode($respuesta);
        fclose($archivo);
    }
    //subcategoria9
    public static function listar9(){
        $archivo = fopen("../data/subcategoria9.json","r");
        $respuesta = array();
        while(($linea=fgets($archivo))){
        $respuesta[] = json_decode($linea,true);
        }
        echo json_encode($respuesta);
        fclose($archivo);
    }
    //subcategoria10
    public static function listar10(){
        $archivo = fopen("../data/subcategoria10.json","r");
        $respuesta = array();
        while(($linea=fgets($archivo))){
        $respuesta[] = json_decode($linea,true);
        }
        echo json_encode($respuesta);
        fclose($archivo);
    }
    //subcategoria11
    public static function listar11(){
        $archivo = fopen("../data/subcategoria11.json","r");
        $respuesta = array();
        while(($linea=fgets($archivo))){
        $respuesta[] = json_decode($linea,true);
        }
        echo json_encode($respuesta);
        fclose($archivo);
    }
    //subcategoria12
    public static function listar12(){
        $archivo = fopen("../data/subcategoria12.json","r");
        $respuesta = array();
        while(($linea=fgets($archivo))){
        $respuesta[] = json_decode($linea,true);
        }
        echo json_encode($respuesta);
        fclose($archivo);
    }
    //subcategoria13
    public static function listar13(){
        $archivo = fopen("../data/subcategoria13.json","r");
        $respuesta = array();
        while(($linea=fgets($archivo))){
        $respuesta[] = json_decode($linea,true);
        }
        echo json_encode($respuesta);
        fclose($archivo);
    }
    //subcategoria14
    public static function listar14(){
        $archivo = fopen("../data/subcategoria14.json","r");
        $respuesta = array();
        while(($linea=fgets($archivo))){
        $respuesta[] = json_decode($linea,true);
        }
        echo json_encode($respuesta);
        fclose($archivo);
    }
    //subcategoria15
    public static function listar15(){
        $archivo = fopen("../data/subcategoria15.json","r");
        $respuesta = array();
        while(($linea=fgets($archivo))){
        $respuesta[] = json_decode($linea,true);
        }
        echo json_encode($respuesta);
        fclose($archivo);
    }
    //subcategoria16
    public static function listar16(){
        $archivo = fopen("../data/subcategoria16.json","r");
        $respuesta = array();
        while(($linea=fgets($archivo))){
        $respuesta[] = json_decode($linea,true);
        }
        echo json_encode($respuesta);
        fclose($archivo);
    }

}
?>