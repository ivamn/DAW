<?php


class Agenda
{
    private static ?Agenda $instance = null;
    private array $contactos;

    /**
     * Agenda constructor.
     * @param array $contactos
     */
    private function __construct()
    {
        $this->contactos = [];
    }

    public function addContacto($contacto)
    {
        $this->contactos[] = $contacto;
    }

    public function deleteContacto(Contacto $contacto)
    {
        $index = null;
        foreach ($this->contactos as $k => $v) {
            if ($v->getId() === $contacto->getId()) {
                $index = $k;
                break;
            }
        }
        if ($index !== null) {
            unset($this->contactos[$index]);
        }
    }

    public function getContacto($id)
    {
        foreach ($this->contactos as $k => $v) {
            if ($v->getId() === $id) {
                return $v;
            }
        }
        return null;
    }

    public function __toString()
    {
        $cadena = "";
        foreach ($this->contactos as $contacto):
            $cadena = $cadena . $contacto->__toString();
        endforeach;
        return $cadena;
    }

    public function __clone()
    {
        foreach ($this->contactos as $c) {
            $c = clone $c;
        }
    }

    public static function getInstance()
    {
        if (is_null(self::$instance)) {
            $instance = new Agenda();
            $instance->addContacto(new Contacto(1, "Iván", "123456789", new DateTime(), "1.jpg"));
            $instance->addContacto(new Contacto(2, "Daniel", "123456789", new DateTime(), "1.jpg"));
            $instance->addContacto(new Contacto(3, "Gallego", "123456789", new DateTime(), "1.jpg"));
        }
        return $instance;
    }


}