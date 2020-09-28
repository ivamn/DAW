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
$method = $_SERVER["REQUEST_METHOD"];
?>
<form action="<?= $_SERVER["PHP_SELF"]; ?>" method="post">
    <label for="fecha">Fecha de nacimiento</label>
    <input type="text" name="fecha" value="">
    <br>
    <label for="email">Email</label>
    <input type="email" name="email" value="">
    <br>
    <label for="observaciones">Observaciones</label>
    <input type="text" name="observaciones" value="">
    <br>
    <br>
    <input type="submit" value="Enviar">
</form>
<?php

function filtrarCampo(string $campo)
{
    if (empty($campo)) {
        return false;
    }
    return htmlspecialchars($campo);
}

if ($method === "POST") {
    $fecha = $_POST["fecha"] ?? "";
    $fecha = filtrarCampo($fecha);
    $fecha = date_create_from_format("d/m/Y", $fecha);
    if ($fecha === false) {
        echo "La fecha de nacimiento es un campo obligatorio y debe tener el formato correcto (dd/mm/yyyy)";
    } else {
        $fecha = $fecha->format("d/m/Y");
        echo "Fecha: {$fecha}";
    }
    echo "<br>";
    $email = $_POST["email"] ?? "";
    $email = filtrarCampo($email);
    $email = filter_var($email, FILTER_VALIDATE_EMAIL);
    if ($email === false) {
        echo "El email es un campo obligatorio y debe tener el formato correcto (nombre@dominio.org)";
    } else {
        echo "Email: {$email}";
    }
    echo "<br>";
    $observaciones = htmlspecialchars($_POST["observaciones"]) ?? "No hay observaciones";
    echo "Observaciones: {$observaciones}";
}
?>
</body>
</html>