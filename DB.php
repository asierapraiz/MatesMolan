<?php


class DB {  
    protected static function ejecutaConsulta($sql) {
        $opc = array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8");
        $dsn = "mysql:host=localhost;dbname=matesmolan";        
        $usuario='root';
        $contrasena='';        
        $con = new PDO($dsn, $usuario, $contrasena, $opc);
        $resultado = null;
        if (isset($con)) {            
            $resultado = $con->query($sql);             
            $fila = $resultado->fetch(); 
            echo ("Hola".$fila[0]);
            return $resultado; 

          }     
        
    }
    
    public static function verificaCliente($nombre, $clave) {        
        $sql = "SELECT * FROM usuarios ";
        $sql .= "WHERE nombre='".$nombre."'";
        $sql .= "AND clave='" .$clave. "';";
        $resultado = self::ejecutaConsulta ($sql);    
        $fila = $resultado->fetch();         
        echo $fila[0];
        $verificado = false;
        
        if($resultado) {            
                
               // $fila = $resultado->fetch();    
                echo $fila[0];
                $verificado=true; 
                session_start();
                $_SESSION['usuario']=$fila[0];
                $puntos=$fila['puntos'];             
                setcookie ('puntos',$puntos);                           
        }
        return $verificado;
       
    
    }  

  
    public static function altaNueva($nombre, $apellido, $clave){
        $nombreM=strtolower($nombre);
        $apellidoM=strtolower($apellido);
        $claveM=strtolower($clave);
         $sql = "INSERT INTO usuarios ";        
         $sql .="VALUES ('".$nombreM."','".$apellidoM."','".$clave."','0','0');";
         $resultado = self::ejecutaConsulta($sql);
        
    }
    
   
    
    
    
    public static function borraUsuario($nombre, $apellido) {
        $nombreM=strtolower($nombre);
        $apellidoM=strtolower($apellido);
        $sql="DELETE FROM usuarios where nombre='".$nombreM."' and apellido='".$apellidoM."';";        
        self::ejecutaConsulta($sql);     
    }
    
    public static function actualizaDatos($nombre, $apellido, $puntos, $nivel) {          
        $nombreM=strtolower($nombre);
        $apellidoM=strtolower($apellido);
        $sql="UPDATE usuarios SET puntos=".$puntos.", nivel=".$nivel." where nombre='".$nombreM."' and apellido='".$apellidoM."';";                
        self::ejecutaConsulta($sql);     
    }
    
    public static function dameDatos($nombre, $clave){
        $sql="SELECT FROM usuarios WHERE nombre=".$nombre;
        $sql.=" and clave=".$clave;
        if(isset($resultado)) {            
            $fila = $resultado->fetch();            
                    
        }
        return $fila;
    }
     
}

?>