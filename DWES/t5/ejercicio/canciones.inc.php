<?php
function canciones () :array {
    return [
        "OnlySee" => [["Don't Get Me Started", "Pop"], ["I Don't Want to Want You", "Blues"], ["Onlysee", "Rock"], ["Stories", "Jazz"], ["Madlove", "Blues"]],
        "It Won't Be Soon Before Long" => [["If I Never See Your Face Again", "Blues"], ["Makes Me Wonder", "Rock"], ["Little of Your Time", "Pop"], ["Wake Up Call", "Jazz"]],
        "Night Visions" => [["Radioactive", "Pop"], ["Tiptoe", "Rock"], ["It's Time", "Pop"], ["Demons", "Jazz"], ["Every Night", "Blues"]]
    ];
}

function displaySongs(array $canciones)
{
    $canciones = array_filter($canciones, function ($album) {
        return sizeof($album) !== 0;
    });
    array_map(function ($k, $v) {
        $nombresCanciones = array_map(function ($n) {
            return "{$n[0]} ($n[1])";
        }, $v);
        echo nl2br($k . " => " . implode(" - ", $nombresCanciones) . "\n");
    }, array_keys($canciones), $canciones);
}
?>