<?php

require_once __DIR__ . "/Contacto.php";

$error = '';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $contacto = new Contacto($_FILES['imagen']);
    $contacto->subirArchivo();
    $urlFichero = $contacto->getUrlSubida();
    if ($urlFichero === "") {
        $error = "Error en la subida del fichero";
    }
    /*
    if (!isset($_FILES['imagen'])) {
        $error = "No existe el campo imagen";
    } else {
        if ($_FILES['imagen']['error'] !== UPLOAD_ERR_OK) {
            switch ($_FILES['imagen']['error']) {
                case UPLOAD_ERR_INI_SIZE:
                case UPLOAD_ERR_FORM_SIZE:
                    $error = "Se ha superado el tamaño máximo de archivo";
                    break;
                default:
                    $error = "No se ha podido subir el archivo";
                    break;
            }
        } else {
            if ($_FILES['imagen']['type'] !== 'image/jpeg' &&
                $_FILES['imagen']['type'] !== 'image/png')
                $error = "Formato de archivo no soportado, solo se admite jpg y png";
            else {
                if (is_uploaded_file($_FILES['imagen']['tmp_name']) === false)
                    $error = "Ha habido un problema con el archivo subido al servidor, puede haber sido un ataque";
                else {
                    if (move_uploaded_file($_FILES['imagen']['tmp_name'], __DIR__ . '/uploads/' . $_FILES['imagen']['name']) === false)
                        $error = "No se ha podido mover el fichero subido";
                    else {
                        $error = "El fichero se ha subido correctamente";
                        $urlFichero = 'uploads/' . $_FILES['imagen']['name'];
                    }
                }
            }
        }
    }
    */
}

require __DIR__ . '/views/index.view.php';