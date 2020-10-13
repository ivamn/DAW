<?php


class Agenda
{
    private static array $contactos = [];

    public static function addContacto($contacto){
        self::$contactos[] = $contacto;
    }

    public static function deleteContacto(Contacto $contacto){
        $index = null;
        foreach (self::$contactos as $k => $v) {
            if ($v->getId() === $contacto->getId()) {
                $index = $k;
            }
        }
        if ($index !== null) {
            unset(self::$contactos[$index]);
        }
    }

    public static function getContacto($id) {
        return self::$contactos[intval($id)];
    }

    public function __toString()
    {
        $cadena = "";
        foreach (self::$contactos as $contacto):
            $cadena = $cadena . $contacto->__toString() . " <a href='vercontacto.php?id={$contacto}'>Ver contacto</a>" . "<br/>";
        endforeach;
        return $cadena;
    }


}