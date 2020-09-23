<!doctype html>
<html lang="es">
<head>
    <meta charset="utf-8">
    <title>Desarrollo web en entorno servidor</title>
    <meta name="description" content="PHP, PHPStorm">
    <meta name="author" content="Iván Daniel Gallego Torres">
</head>
<body>
<?php
//Elimina los espacios del principio y el final del nombre si los hubiera
$cadena = "  Iván Daniel Gallego Torres    ";
echo trim($cadena);

echo "<br/>";

//Elimina los caracteres "/" del principio y el final del nombre si los hubiera
$cadena = "///Iván Daniel Gallego Torres/";
echo trim($cadena, "/");

echo "<br/>";

//La variable nombre en mayúsculas, minúsculas y con la primera letra en
//mayúscula y las demás en minúsculas
$cadena = "Iván Daniel Gallego Torres";
echo ucfirst(strtolower($cadena));

echo "<br/>";

//Muestra el código ascii de la primera letra del nombre
echo ord($cadena[0]);

echo "<br/>";

//Muestra la longitud del nombre.
echo strlen($cadena);

echo "<br/>";

//Muestra el número de veces que aparece la letra a (mayúscula o
//minúscula).
echo substr_count(strtolower($cadena), "a");

echo "<br/>";

//Muestra la posición de la primera a existente en el nombre (sea mayúscula
//o minúscula). Si no hay ninguna mostrará -1
$pos = strpos(strtolower($cadena), "w");
if ($pos === false) {
    echo -1;
} else {
    echo $pos;
}

echo "<br/>";

//Lo mismo, pero con la última a
$pos = strripos($cadena, "a");
if ($pos === false) {
    echo -1;
} else {
    echo $pos;
}

echo "<br/>";

//Muestra el nombre sustituyendo las letras o por el número cero (sea
//mayúscula o minúscula)
echo str_replace("o", 0, $cadena);

echo "<br/>";

$cadena = "Alejandro";

//Indica si el nombre comienza por "al" o no
echo substr(strtolower($cadena), 0, 2) == "al" ? "${cadena} empieza por 'al'" : "${cadena} no empieza por 'al'";


?>
</body>
</html>