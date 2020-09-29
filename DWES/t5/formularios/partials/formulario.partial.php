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

require "validacion-formulario.inc.php";

if ($method === "POST") {
    $fecha = $_POST["fecha"] ?? "";
    $fecha = validarFecha($fecha);
    if ($fecha === false) {
        echo "La fecha de nacimiento es un campo obligatorio y debe tener el formato correcto (dd/mm/yyyy)";
    } else {
        $fecha = $fecha->format("d/m/Y");
        echo "Fecha: {$fecha}";
    }
    echo "<br>";
    $email = $_POST["email"] ?? "";
    $email = validarEmail($email);
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