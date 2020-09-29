<?php
$method = $_SERVER["REQUEST_METHOD"];

function filtrarCampo(string $campo)
{
    if (empty($campo)) {
        return false;
    }
    return htmlspecialchars($campo);
}

function validarEmail(string $email) {
    $email = filtrarCampo($email);
    return filter_var($email, FILTER_VALIDATE_EMAIL);
}

function validarFecha(string $fecha) {
    $fecha = filtrarCampo($fecha);
    return date_create_from_format("d/m/Y", $fecha);
}


?>