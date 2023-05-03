<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>
        var preciodelarticulo=parseInt(prompt("ingrese el valor de precio del articulo"));
        descuento=preciodelarticulo*0.20;
        preciocondescuento=preciodelarticulo-descuento;
        iva=preciocondescuento*0.15;
        preciofinal=preciocondescuento+iva,
        alert("valor de iva"+iva);
        alert("valor de descuento"+descuento);
        alert("valor de precio final"+preciofinal);
    </script>
</body>
</html>