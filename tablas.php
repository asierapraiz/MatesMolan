<?php 
// Recuperamos la información de la sesión
session_start();

if (!isset($_SESSION['usuario'])){
    //die("Error - debe <a href='acceso.php'>identificarse</a>.<br />");   
     header("Location: acceso.php");
}else{
    echo $_SESSION['usuario'];
}
 //Compruebo si es una alta nueva
if(isset($_POST['ladel'])){
    setcookie("ladel",$_POST['ladel']);
}  
?>
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Document</title>
        <script src="Scripts/jquery-1.12.0.js"></script>
        <script src="Scripts/jquery.cookie.js"></script>
        <script src="Scripts/bootbox.min.js"></script>
        <!--Fuente-->
        <link href='https://fonts.googleapis.com/css?family=Patrick+Hand+SC' rel='stylesheet' type='text/css'>

        <link rel="stylesheet" type="text/css" href="estilos/flip.css">
        <link rel="stylesheet" type="text/css" href="estilos/tablas.css">

        <!-- Latest compiled and minified CSS -->
        <link rel="stylesheet" href="bootstrap-3.3.7-dist/css/bootstrap.min.css" crossorigin="anonymous">
        <!-- Optional theme -->
        <link rel="stylesheet" href="bootstrap-3.3.7-dist/css/bootstrap-theme.min.css" crossorigin="anonymous">

        <!-- Latest compiled and minified JavaScript -->
        <script src="bootstrap-3.3.7-dist/js/bootstrap.min.js" crossorigin="anonymous"></script>
        <script src="Scripts/jquery-ui.js"></script>



    </head>

    <body>

        <div id="contenedor">

            <div id="cabecera">

                <h1>Busca las parejasde la tablas del <?php echo ($_POST['ladel'])?>.</h1>
                <hr>
            </div>
            <div id="aside">
                <div id="marcador">
                    <p>PUNTOS PARTIDA</p>
                    <p id="puntos">000</p>
                    <hr>
                    <p>PUNTOS TOTALES</p>
                    <p id="puntosTotales">000
                    </p>
                </div>
            </div>
            <div id="grid" class="col-xs-6">

                <!--Aqui van las cartas que se generan por jscript-->

            </div>
            <div id="asideDch">

                <div id="bocata">
                    <div id="mensaje">
                        <p id="texto" class="mensaje"></p>
                    </div>
                </div>
                <div id="vadorrin">
                    <img id="vadorrin1" src="img/Pose.png">
                    <img id="vadorrin2" src="img/MiraPanel.png">
                </div>
            </div>
        </div>
        <script src="Scripts/funciones.js"></script>
        <script src="Scripts/tablas.js"></script>
        <script src="Scripts/marcador.js"></script>


        <!--<script src="Scripts/logica.js"></script>-->

    </body>

    </html>