/* Ejemplo
var n = prompt("digite un numero");
var con = 1;
while (con <= parseInt(n)) {
    document.write("<p>" + con + "</p>");
    con = con + 1;
}*/


document.addEventListener("DOMContentLoaded", function() {
    // Ejercicio 1
    var number = document.querySelector('.numNat');
    var btnNumNat = document.querySelector('.sumNumNat-btn')
    var sumNumNat = document.querySelector('.sumNumNat');
    
    btnNumNat.addEventListener('click', function () {
        var cont = 0;
        var suma = 0;

        while (cont <= number.value) {
            suma = suma + cont;
            cont++;
        }
        sumNumNat.innerHTML = "La suma es: " + suma;
    })

    //Ejercicio 2

    var cantNotas = document.querySelector('.notas'),
        btnNota = document.querySelector('.nota-btn'),
        prom = document.querySelector('.prom'),
        notas = [];

    btnNota.addEventListener('click', function () {
        var contNotaA = 0;
        var contNotaD = 0;
        var sumaA = 0;
        var sumaD = 0;

        for (let i = 1; i <= cantNotas.value; i++) {
            notas.push(Number(prompt("ingrese la nota: ")));
        }

        for (let n = 0; n < notas.length; n++) {
            if (notas[n] >= 3) {
                sumaA = sumaA + Number(notas[n]);
                contNotaA++;
            } else {
                sumaD = sumaD + Number(notas[n]);
                contNotaD++;
            }
        }
        prom.innerHTML = "El promedio de las notas aprobadas es " + (sumaA / contNotaA) + " el promedio de las notas desaprobadas es " + (sumaD / contNotaD) + " el promedio total es " + ((sumaA + sumaD) / cantNotas.value);
    })

    //Ejercicio 3

    var btnEnteros = document.querySelector('.enteros-btn'),
        enteros = document.querySelector('.enteros');

    btnEnteros.addEventListener('click', function () {
        var num = prompt("Ingresa un numero entero: (escribe fin para terminar) ");
        var suma = 0;
        var cont = 0;
        var numero = "";

        while (num != "fin") {
            numero = numero + num;
            suma = suma + parseInt(num);
            cont++;
            num = prompt("Ingresa un numero entero: (escribe fin para terminar) ");
        }

        enteros.innerHTML =  "La cantidad de numeros ingresados es: " + cont + "\n" + 
        " la suma de todos los numero es: " + suma + "\n" + 
        " los numeros ingresados fueron: " + numero
    })

    //Ejercicio 4

    var btnMulti = document.querySelector('.multi-btn');

    btnMulti.addEventListener('click', function () {
        var num = prompt("Ingresa un numero: ");

        for (let cont = 1; cont <= 30; cont++) {
            document.write("<p>" + cont + " X " + num + " = " + (cont * num) + "</p>");
        }
    })

     //Ejercicio 5

    var btnMultiDes = document.querySelector('.multiDes-btn');

    btnMultiDes.addEventListener('click', function () {
        var num = prompt("Ingresa un numero: ");
        var contador = 10;
        
        while (contador >= 1) {
            document.write("<p>" + contador + " X " + num + " = " + (contador * num) + "</p>");
            contador--;
        }
    })

    //Ejercicio 6

    var btnInterval = document.querySelector('.interval-btn');

    btnInterval.addEventListener('click', function () {
        var num = prompt("Ingresa un numero para el intervalo: ");
        var cont = 1;
        
        while (cont <= 30) {
            document.write("<p>" + cont + "</p>");
            cont = cont + parseInt(num);
        }
    })

    //Ejercicio 7

    var btnIntervalReg = document.querySelector('.intervalReg-btn');

    btnIntervalReg.addEventListener('click', function () {
        var num = prompt("Ingresa un numero para el intervalo: ");
        var cont = 30;
        
        while (cont >= 1) {
            document.write("<p>" + cont + "</p>");
            cont = cont - parseInt(num);
        }
    })

    // Ciclos anidados

    //Ejercicio 8

    var btnAltura = document.querySelector('.altura-btn');

    btnAltura.addEventListener('click', function () {
        var altura = prompt("Ingresa un numero para la altura: ");
        var aster = 1;
        var icon = '*';

        while (aster <= altura) {
            console.log(aster);
            document.write("<p>" + icon.repeat(aster)  + "</p>");

            aster++
        }
    })

    //Ejercicio 9

    var btnAlturaDes = document.querySelector('.alturaDes-btn');

    btnAlturaDes.addEventListener('click', function () {
        var altura = prompt("Ingresa un numero para la altura: ");
        var aster = 1;
        var icon = '*';

        for (let i = 0; i < altura; i++) {
            let espacio = '';
            for (let esp = altura; esp > i; esp--) {
                espacio = espacio + "*";
            }
            document.write("<p>" + espacio + "</p>");
        }
    })

    //Ejercicio 10

    var btnVentas = document.querySelector('.ventas-btn');

    btnVentas.addEventListener('click', function () {
        var cantClientes = 0;
        var clientes = [];
        var productos = [];
        var precios = [];

        cantClientes= prompt("Ingrese la cantidad de clientes: ");
        for (let i = 1; i <= cantClientes; i++) {
            productos = prompt("Ingrese la cantidad de productos: ");
            //clientes.push.apply(i);
            console.log(cantClientes[i]);
            console.log(productos);
        }
        // for (let i = 0; i < clientes.length; i++) {
        //     nombres.push(prompt("Ingrese el nombre del alumno " + (i+1) + ": "));
        //     materias.push(prompt("Ingrese la materia del estudiante " + (i+1) + ": "))
            
        //     for (let n = 0; n < cantNotas; n++) {
        //         notas.push(Number(prompt("Ingrese la nota " + (n+1) + " del estudiante " + (i+1) + ": ")));

        //         sumatoria = Number(sumatoria) + notas[n];
        //     }

        //     promedio = (Number(sumatoria) / cantNotas).toFixed(1);

        //     document.write("<p>" + "Estudiante " + (i+1) + ": " + nombres[i] + "<br>" + 
        //         "Materia: " + materias[i] + "<br>" + 
        //         "Nota 1: " + notas[0] + "<br>" + 
        //         "Nota 2: " + notas[1] + "<br>" +
        //         "Nota 3: " + notas[2] + "<br>" + 
        //         "Promedio: " + promedio + "</p>");
        // }
    })

    //Ejercicio 11

    var btnNotas = document.querySelector('.notas-btn');

    btnNotas.addEventListener('click', function () {
        var alumnos = 2;
        var cantNotas = 3;
        var nombres = [];
        var materias = [];
        var notas = [];
        var promedio;
        var sumatoria = 0;

        for (let i = 0; i < alumnos; i++) {
            nombres.push(prompt("Ingrese el nombre del alumno " + (i+1) + ": "));
            materias.push(prompt("Ingrese la materia del estudiante " + (i+1) + ": "))
            
            for (let n = 0; n < cantNotas; n++) {
                notas.push(Number(prompt("Ingrese la nota " + (n+1) + " del estudiante " + (i+1) + ": ")));

                sumatoria = Number(sumatoria) + notas[n];
            }

            promedio = (Number(sumatoria) / cantNotas).toFixed(1);

            document.write("<p>" + "Estudiante " + (i+1) + ": " + nombres[i] + "<br>" + 
                "Materia: " + materias[i] + "<br>" + 
                "Nota 1: " + notas[0] + "<br>" + 
                "Nota 2: " + notas[1] + "<br>" +
                "Nota 3: " + notas[2] + "<br>" + 
                "Promedio: " + promedio + "</p>");
        }
    })

    //Ejercicio 12

    var btnTable = document.querySelector('.table-btn');

    btnTable.addEventListener('click', function () {
        var body = document.getElementsByTagName("body")[0];
        var tabla = document.createElement("table");
        var tblBody = document.createElement("tbody");

        
        var fila1 = document.createElement("tr");
        for (var f1 = 1; f1 <= 5; f1++) {
            var celda = document.createElement("td");
            var textoCelda = document.createTextNode(f1);
            celda.appendChild(textoCelda);
            fila1.appendChild(celda);
        }
        tblBody.appendChild(fila1);
        var fila2 = document.createElement("tr");
        for (var f2 = 6; f2 <= 10; f2++) {
            var celda = document.createElement("td");
            var textoCelda = document.createTextNode(f2);
            celda.appendChild(textoCelda);
            fila2.appendChild(celda);
        }
        tblBody.appendChild(fila2);
        var fila3 = document.createElement("tr");
        for (var f3 = 11; f3 <= 15; f3++) {
            var celda = document.createElement("td");
            var textoCelda = document.createTextNode(f3);
            celda.appendChild(textoCelda);
            fila3.appendChild(celda);
        }
        tblBody.appendChild(fila3);

        tabla.appendChild(tblBody);
        body.appendChild(tabla);
        tabla.setAttribute("border", 2);
        tabla.setAttribute("id", "tabla");
    })

    //Ejercicio 13

    var btnAge = document.querySelector('.age-btn');

    btnAge.addEventListener('click', function () {
        var age = 0;
        var alumnos = 3;
        var mayor = 0;
        var menor = 0;

        for (let i = 1; i <= alumnos; i++) {
            age = prompt("Ingresa la edad del alumno " + i + ": ");

            if (age >= 18) {
                mayor = mayor + 1;
            } else {
                menor = menor + 1;
            }
        }
        document.write("<p> El numero de estudiantes mayores de edad es: " + mayor + "</p>");
        document.write("<p> El numero de estudiantes menores de edad es: " + menor + "</p>");
    })

    //Ejercicio 14

    var btnRandom = document.querySelector('.random-btn');

    btnRandom.addEventListener('click', function () {
        var numRandom = Math.floor(Math.random() * 20)+ 1;
        var intentosRealizados = 0;
        console.log(numRandom);
        while (intentosRealizados < 3){
            var numeroUser = prompt("Ingresa el numero en el que estoy pensando del (1-20):");

            if (numeroUser < numRandom) {
                numeroUser = prompt("El numero es muy bajo intenta de nuevo: ");
                intentosRealizados = intentosRealizados + 1;
            } 
            if (numeroUser > numRandom) {
                numeroUser = prompt("El numero es muy alto intenta de nuevo: ");
                intentosRealizados = intentosRealizados + 1;
            } 
            if (numeroUser == numRandom) {
                alert("FELICIDADES acertaste el numero era: " + numeroUser);
                intentosRealizados = 3;
            }
        }
    })
});