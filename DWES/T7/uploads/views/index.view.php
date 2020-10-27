<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Subir fichero</title>
    <style>
        input, label {
            display: block;
        }
    </style>
</head>
<body>
<form action="<?= $_SERVER['PHP_SELF'] ?>" method="post" enctype="multipart/form-data">
    <label>Imagen</label>
    <input type="file" name="imagen">
    <input type="submit" value="Enviar">
</form>

<?php if ($error !== '') : ?>
    <div>
        <?= $error ?>
    </div>
    <?php ;endif ?>
<?php if (isset($urlFichero)) : ?>
    <div>
        <img src="<?= $urlFichero ?>" alt="Fichero">
    </div>
    <?php ;endif ?>

</body>
</html>

