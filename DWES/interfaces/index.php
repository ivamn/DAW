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

$list = new SISelect("titulo", "nombre", ["T1", "T2", "T3"], 1);
?>

<form method="post" action="<?= $_SERVER["PHP_SELF"] ?>">
    <?= $list->generaSelector(); ?>
</form>
</body>
</html>
