<?php
require_once('DB.php');
$error="";

if (isset($_SESSION['usuario'])){
    //die("Error - debe <a href='acceso.php'>identificarse</a>.<br />");
    echo $_SESSION['usuario'];
}else{ echo ("no hay usuario");}
   
//Compruebo si es una alta nueva
if(isset($_POST['nuevo'])){
    if($_POST['clave']=='kendu'){          
         DB::borraUsuario($_POST['nombre'],$_POST['apellido']);
    }elseif($_POST['clave']=='aldatu'){   
        $puntos=6;
        $nivel=6;
        DB::actualizaDatos($_POST['nombre'],$_POST['apellido'],$puntos, $nivel);
    } else{        
        DB::altaNueva($_POST['nombre'], $_POST['apellido'], $_POST['clave']);
        echo("enviado alta nueva");
    }
}

// Comprobamos si ya se ha enviado el formulario
if (isset($_POST['acceso'])) {      
        // Comprobamos las credenciales con la base de datos
        if (DB::verificaCliente($_POST['nombre'], $_POST['clave'])) {            
            $_SESSION['usuario']=$_POST['nombre'];    
           // header('Location:menu.html');  
           
        }
        else {
            global $error;            
            // Si las credenciales no son válidas, se vuelven a pedir
            $error = "Usuario o contraseña no válidos!";  
            echo "<script src='Scripts/acceso.js'></script>";
            echo "<script>$(document).ready(function(){
            $('#entrar').click();
            })</script>";
        }
    }
?>

    <!DOCTYPE html>

    <html lang="es">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Document</title>

        <script src="Scripts/jquery-1.12.0.js"></script>
        <script src="Scripts/jquery.cookie.js"></script>
        <script src="Scripts/jquery.validate.min.js"></script>


        <!--Fuente-->
        <link href='https://fonts.googleapis.com/css?family=Patrick+Hand+SC' rel='stylesheet' type='text/css'>

        <link rel="stylesheet" type="text/css" href="estilos/acceso.css">
        <!-- Latest compiled and minified CSS -->
        <link rel="stylesheet" href="bootstrap-3.3.7-dist/css/bootstrap.min.css" crossorigin="anonymous"> .
        <!-- Optional theme -->
        <link rel="stylesheet" href="bootstrap-3.3.7-dist/css/bootstrap-theme.min.css" crossorigin="anonymous">

        <!-- Latest compiled and minified JavaScript -->
        <script src="bootstrap-3.3.7-dist/js/bootstrap.min.js" crossorigin="anonymous"></script>
    </head>

    <body>

        <div id="contenedor" class="container">

            <!-- Example row of columns -->

            <div class="row">

                <div id="cabecera" class="col-xs-12">
                    <h1>LAS MATES MOLAN.</h1>
                </div>
                <div id="grid" class="col-xs-12 col-sm-7">
                    <div id="bocata">
                        <div id="eleccion">
                            <p><span class='error'><?php  echo $error; ?></span></p>

                            <p>
                                <button id="altaNueva">ALTA NUEVA</button>
                            </p>
                            <p>
                                <button id="entrar">ENTRAR</button>
                            </p>

                        </div>
                        <form id="formulario1" action="acceso.php" method="post" hidden="true">

                            <p>Nombre
                                <input type="text" name="nombre" maxlength="25">
                            </p>
                            <p>Apellido
                                <input type="text" name="apellido" maxlength="25">
                            </p>
                            <p>Clave
                                <input type="text" name="clave" maxlength="25">
                            </p>

                            <input type="text" name="nuevo" hidden value="0">
                            <p>
                                <input type="submit" value="Enviar" class="enviar" />
                            </p>

                        </form>

                        <form id="formulario2" action="acceso.php" method="post" hidden="true">

                            <p>Nombre
                                <input type="text" name="nombre" maxlength="50" />
                            </p>
                            <p>Contraseña
                                <input type="text" name="clave" maxlength="50" />
                            </p>
                            <input type="text" name="acceso" hidden value="0">
                            <p>
                                <input type="submit" value="Enviar" class="enviar" />
                            </p>
                        </form>

                        <!--Menu para seleccionar la pantalla de juego.-->
                        <div id="menuJuegos" hidden>
                            <form id="sumas" action="juego.php" method="post">
                                <input type="submit" value="Sumas" class="enviar" />
                                <input type="text" name="" hidden value="0">
                            </form>
                            <form id="3" action="tablas.php" method="post">
                                <input type="text" name="ladel" value="3" hidden>
                                <input type="submit" value="La tabla del 3" class="enviar" />
                            </form>
                            <form id="4" action="tablas.php" method="post">
                                <input type="text" name="ladel" value="4" hidden>
                                <input type="submit" value="La tabla del 4" class="enviar" />
                            </form>
                            <form id="5" action="tablas.php" method="post">
                                <input type="text" name="ladel" value="5" hidden>
                                <input type="submit" value="La tabla del 5" class="enviar" />
                            </form>
                            <form id="6" action="tablas.php" method="post">
                                <input type="text" name="ladel" value="6" hidden>
                                <input type="submit" value="La tabla del 6" class="enviar" />
                            </form>
                            <form id="7" action="tablas.php" method="post">
                                <input type="text" name="ladel" value="7" hidden>
                                <input type="submit" value="La tabla del 7" class="enviar" />
                            </form>
                            <form id="8" action="tablas.php" method="post">
                                <input type="text" name="ladel" value="8" hidden>
                                <input type="submit" value="La tabla del 8" class="enviar" />
                            </form>
                            <form id="9" action="tablas.php" method="post">
                                <input type="text" name="ladel" value="9" hidden>
                                <input type="submit" value="La tabla del 9" class="enviar" />
                            </form>
                            <form id="10" action="tablas.php" method="post" hidden="true">
                                <input type="submit" value="La tabla del 10" class="enviar" />
                                <input type="text" name="ladel" value="10" hidden>
                            </form>
                            <form id="11" action="tablas.php" method="post" hidden="true">
                                <input type="submit" value="La tabla del 11" class="enviar" />
                                <input type="text" name="ladel" value="11" hidden>
                            </form>
                            <form id="12" action="tablas.php?ladel=12" method="post" hidden="true">
                                <input type="submit" value="La tabla del 12" class="enviar" />
                                <input type="text" name="ladel" value="12" hidden>
                            </form>
                        </div>
                    </div>


                </div>
                <div id="lateralDch" class="col-xs-12 col-sm-5">


                    <div id="vadorrin">
                        <img id="vadorrin1" src="img/Pose.png">
                        <img id="vadorrin2" src="img/MiraPanel.png">
                    </div>
                </div>
            </div>
        </div>




        <script src="Scripts/acceso.js"></script>
        <script src="Scripts/validar.js"></script>
        <!--<script src="bootbox.min.js">
        </script>-->
        <!--<script src="funciones.js"></script>-->
        <!--<script src="reloj.js"></script>-->
        <!--<script src="logica.js"></script>-->



    </body>

    </html>