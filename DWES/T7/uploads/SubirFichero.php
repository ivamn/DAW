<?php

trait SubirFichero
{
    private array $tiposPermitidos = ["image/jpeg", "image/png"];
    private string $directorioSubidas = __DIR__ . "\img";
    private string $nombreCampoImagen = "imagen";
    private string $error = "";
    private string $url_subida = "";

    private function estaImagenSeleccionada(): bool
    {
        return isset($_FILES[$this->nombreCampoImagen]);
    }

    private function comprobarCodigoError(): bool
    {
        return $_FILES[$this->nombreCampoImagen]['error'] === UPLOAD_ERR_OK;
    }

    private function comprobarTipoArchivo(): bool
    {
        $permitido = false;
        foreach ($this->tiposPermitidos as $t) {
            $permitido = $_FILES[$this->nombreCampoImagen]['type'] === $t;
            if ($permitido) {
                break;
            }
        }
        return $permitido;
    }

    private function comprobarFicheroSubido(): bool
    {
        return is_uploaded_file($_FILES['imagen']['tmp_name']);
    }

    private function existeArchivo()
    {
        return is_file($this->directorioSubidas . "/" . $_FILES[$this->nombreCampoImagen]["name"]);
    }

    public function subirArchivo(): bool
    {
        $correcto = true;
        $correcto = $this->estaImagenSeleccionada();
        if ($correcto) {
            $correcto = $this->comprobarCodigoError();
        }
        if ($correcto) {
            $correcto = $this->comprobarTipoArchivo();
        }
        if ($correcto) {
            $correcto = $this->comprobarFicheroSubido();
        }
        if ($correcto) {
            $nombreArchivo = $_FILES[$this->nombreCampoImagen]["name"];
            if ($this->existeArchivo())
                $nombreArchivo = time() . $nombreArchivo;
            $correcto = move_uploaded_file($_FILES[$this->nombreCampoImagen]["tmp_name"], $this->directorioSubidas . "\\" . $nombreArchivo);
            $this->url_subida = "img\\" . $nombreArchivo;
        }

        return $correcto ? "" : $this->url_subida;
    }

    /**
     * @return string
     */
    public function getUrlSubida(): string
    {
        return $this->url_subida;
    }


}