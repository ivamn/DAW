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
require "ISelectorIndividual.php";
require "SelectorIndividual.php";
require "SIRadioOpcion.php";
require "SISelect.php";

$canciones = [
    "Radioactive", "Hamidashimono", "Warriors", "Alone", "Sing me to sleep"
];

$list_radio = new SIRadioOpcion("Canciones", "canciones", $canciones, -1);
$list_select = new SISelect("Canciones", "canciones", $canciones, -1);

$method = $_SERVER["REQUEST_METHOD"];
?>

<form method="post" action="<?= $_SERVER["PHP_SELF"] ?>">

    <?= $list_radio->generaSelector(); ?>
    <input type="submit" value="Enviar">
    <br>

    <?php
    if ($method === "POST") {
        $index = $_POST["canciones"] ?? -1;
        if ($index !== -1) {
            echo "Has seleccionado {$canciones[intval($index)]}";
        } else {
            echo "No has seleccionado ninguna canción";
        }
    }
    ?>

</form>

<br>
<hr>
<br>

<form method="post" action="<?= $_SERVER["PHP_SELF"] ?>">

    <?= $list_select->generaSelector(); ?>
    <input type="submit" value="Enviar">
    <br>

    <?php
    if ($method === "POST") {
        $index = $_POST["canciones"] ?? -1;
        if ($index !== -1) {
            echo "Has seleccionado {$canciones[intval($index)]}";
        } else {
            echo "No has seleccionado ninguna canción";
        }
    }
    ?>

</form>
</body>
</html>
