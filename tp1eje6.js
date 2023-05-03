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
        var cateto1 = parseInt(prompt("ingrese el primer cateto"));
        var cateto2 = parseInt(prompt("ingrese el segundo cateto"));
        var sumacatetoalcuadrado=(cateto1*cateto2) + (cateto2*cateto1);
        var hipotenusa=Math.pow(sumacatetoalcuadrado, 0.5);
        alert("la hipotenusa es"+hipotenusa);
    </script>
</body>
</html>