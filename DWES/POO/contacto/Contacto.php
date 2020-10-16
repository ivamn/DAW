<?php

class Contacto
{
    private int $id;
    private string $nombre;
    private string $telefono;
    private DateTime $fecha_alta;
    private string $foto;

    /**
     * Contacto constructor.
     * @param int $id
     * @param string $nombre
     * @param string $telefono
     * @param DateTime $fecha_alta
     * @param string $foto
     */
    public function __construct(int $id, string $nombre, string $telefono, DateTime $fecha_alta, string $foto)
    {
        $this->id = $id;
        $this->nombre = $nombre;
        $this->telefono = $telefono;
        $this->fecha_alta = $fecha_alta;
        $this->foto = $foto;
    }

    /**
     * @return int
     */
    public function getId(): int
    {
        return $this->id;
    }

    /**
     * @param int $id
     */
    public function setId(int $id): void
    {
        $this->id = $id;
    }

    /**
     * @return string
     */
    public function getNombre(): string
    {
        return $this->nombre;
    }

    /**
     * @param string $nombre
     */
    public function setNombre(string $nombre): void
    {
        $this->nombre = $nombre;
    }

    /**
     * @return string
     */
    public function getTelefono(): string
    {
        return $this->telefono;
    }

    /**
     * @param string $telefono
     */
    public function setTelefono(string $telefono): void
    {
        $this->telefono = $telefono;
    }

    /**
     * @return DateTime
     */
    public function getFechaAlta(): DateTime
    {
        return $this->fecha_alta;
    }

    /**
     * @param DateTime $fecha_alta
     */
    public function setFechaAlta(DateTime $fecha_alta): void
    {
        $this->fecha_alta = $fecha_alta;
    }

    /**
     * @return string
     */
    public function getFoto(): string
    {
        return $this->foto;
    }

    /**
     * @param string $foto
     */
    public function setFoto(string $foto): void
    {
        $this->foto = $foto;
    }

    public function __toString()
    {
        return "{$this->id}: {$this->nombre} - Tel: {$this->telefono} - Fecha de alta: {$this->fecha_alta->format("d/m/Y")} - Foto: {$this->foto}"
         . "   <a href='vercontacto.php?id={$this->id}'>Ver contacto</a>" . "<br/>";
    }

    public function __clone()
    {
        $this->fecha_alta = clone $this->fecha_alta;
    }


}