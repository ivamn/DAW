<?php

require_once __DIR__ . "/SubirFichero.php";

class Contacto
{
    use SubirFichero;
    private $imagen;

    /**
     * Contacto constructor.
     * @param string $imagen
     */
    public function __construct($imagen)
    {
        $this->imagen = $imagen;
    }

    /**
     * @return string
     */
    public function getImagen()
    {
        return $this->imagen;
    }

    /**
     * @param string $imagen
     */
    public function setImagen($imagen): void
    {
        $this->imagen = $imagen;
    }


}