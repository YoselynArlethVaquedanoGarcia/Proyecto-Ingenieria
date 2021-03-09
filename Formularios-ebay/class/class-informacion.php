<?php
class Informacion{
    private $pais;
    private $direccion;
    private $adicional;
    private $ciudad;
    private $estado;
    private $codigo;
    private $email;
    private $celular;

    public function __construct(
        $pais,
        $direccion,
        $adicional,
        $ciudad,
        $estado,
        $codigo,
        $email,
        $celular
    ){
        $this->pais = $pais;
        $this->direccion = $direccion;
        $this->adicional = $adicional;
        $this->ciudad = $ciudad;
        $this->estado = $estado;
        $this->codigo = $codigo;
        $this->email = $email;
        $this->celular = $celular;
    }

    /**
     * Get the value of pais
     */ 
    public function getPais(){
        return $this->pais;
    }

    /**
     * Set the value of pais
     *
     * @return  self
     */ 
    public function setPais($pais){
        $this->pais = $pais;
    }

    /**
     * Get the value of direccion
     */ 
    public function getDireccion(){
        return $this->direccion;
    }

    /**
     * Set the value of direccion
     *
     * @return  self
     */ 
    public function setDireccion($direccion){
        $this->direccion = $direccion;
    }

    /**
     * Get the value of adicional
     */ 
    public function getAdicional(){
        return $this->adicional;
    }

    /**
     * Set the value of adicional
     *
     * @return  self
     */ 
    public function setAdicional($adicional){
        $this->adicional = $adicional;
    }

    /**
     * Get the value of ciudad
     */ 
    public function getCiudad(){
        return $this->ciudad;
    }

    /**
     * Set the value of ciudad
     *
     * @return  self
     */ 
    public function setCiudad($ciudad){
        $this->ciudad = $ciudad;
    }

    /**
     * Get the value of estado
     */ 
    public function getEstado()
    {
        return $this->estado;
    }

    /**
     * Set the value of estado
     *
     * @return  self
     */ 
    public function setEstado($estado)
    {
        $this->estado = $estado;
    }

    /**
     * Get the value of codigo
     */ 
    public function getCodigo()
    {
        return $this->codigo;
    }

    /**
     * Set the value of codigo
     *
     * @return  self
     */ 
    public function setCodigo($codigo){
        $this->codigo = $codigo;
    }

    /**
     * Get the value of email
     */ 
    public function getEmail()
    {
        return $this->email;
    }

    /**
     * Set the value of email
     *
     * @return  self
     */ 
    public function setEmail($email){
        $this->email = $email;
    }

     /**
     * Get the value of celular
     */ 
    public function getCelular()
    {
        return $this->celular;
    }

    /**
     * Set the value of celular
     *
     * @return  self
     */ 
    public function setCelular($celular){
        $this->celular = $celular;
    }


    public function __toString(){
        $a["pais"] = $this->pais;
        $a["direccion"] = $this->direccion;
        $a["adicional"] = $this->adicional;
        $a["ciudad"] = $this->ciudad;
        $a["estado"] = $this->estado;
        $a["codigo"] = $this->codigo;
        $a["email"] = $this->email;
        $a["celular"] = $this->celular;
        return json_encode($a);
    }

    //CRUD -> CreateReadUpdateDelete 
    public function guardar(){
        $archivo = fopen('../data/informacion.json','a+'); //r Lectura, w Escritura, a+ Anexar
        fwrite($archivo,$this->__toString()."\n"); //Convertir arreglo a cadena JSON
        fclose($archivo);
        return $this->__toString();
    }

    public function actualizar(){

    }

    public function eliminar(){

    }

    public static function listar(){
        $archivo = fopen("../data/informacion.json","r");
        $respuesta = array();
        while(($linea=fgets($archivo))){
            $respuesta[] = json_decode($linea,true); //Convertir de cadena JSON a arreglo asociativo
        }
        fclose($archivo);
        return json_encode($respuesta);
    }
}

?>