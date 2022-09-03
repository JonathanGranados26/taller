var Num = [];
function crearMatriz() {
    var cantFil = document.getElementById("filas").value;
    var cantCol = document.getElementById("columnas").value;
    var matriz = document.getElementById("Matriz");

    var tabla = "<table>";
//creacion de la tabla
    for (var i = 1; i <= cantFil; i++) {//filas
        tabla += "<tr>";
            for (var f = 1; f <= cantCol; f++) {//columnas
                tabla += "<td style = 'color: blue ;'>"
                tabla += (numAleatorios = Math.floor(Math.random() * 100)); //numeros aleatorios en un rango del 0 a 100
                Num.push(numAleatorios);
                tabla += "</td>";
            }
        tabla += "</tr>";
    }
    tabla += "</table>"
    matriz.innerHTML = tabla;

    //Numero mayor
    let ContenidoMax = document.getElementById('numMayor');
    var numMax = Math.max.apply(null, Num);
    ContenidoMax.innerHTML = '<p style="color: blue;"> Numero menor : ' + (numMax) + '</p>';

    //Numero menor
    let ContenidoMin = document.getElementById('numMenor');
    var numMin = Math.min.apply(null, Num);
    ContenidoMin.innerHTML = '<p style="color: blue;"> Numero menor : ' + (numMin) + '</p>';

    delete numMax;
}
