//MENU
var ejercicio
var opcion = 0;
do{
    opcion=Number(prompt(`Bienvenido
        1. "ingresa un numero del 1 al 15 para elegir una opcion de juego 
        14. Salir del juego`))
        switch(parseInt(opcion)){  
            case 1:
                ejercicio= (ObtenerMayorMenor());
                break;
             case 2:
                 ejercicio = (ObtenerMayoryMenor());
                 break;
             case 3:
                 ejercicio = (CalcularCircunf());
                 break;
             case 4:
                  ejercicio = (CalculartotalCompra());
                 break;
             case 5:
                  ejercicio = (CalcularParImpar(100));
                 break;
             case 6:
                 ejercicio = (CalcularMayorMenorCero());
                 break;
             case 7:
                 ejercicio = (ordenarTresNum());
                 break;
             case 8:
                  ejercicio = (indicarDiaSem());
                 break;
             case 9:
                 ejercicio = (MostrarDosEnDos());
                 break;
             case 10:
                 ejercicio = (MostrarMenu());
                 break;
             case 11:
                 ejercicio = (CalcularSalario());
                 break;
             case 12:
                 ejercicio = (Calculadora());
                 break;
             case 13:
                  ejercicio = (CalcularIMC());
                 break;
            case 14 :
            alert("hasta pronto")
            break;
            default: 
            alert("el numero ingresado no es valido")
        }
}
while(opcion!=14)



//EJERCICIO 1

function ObtenerMayorMenor(){
let numero1 = 78;
let numero2 = 34;
if(numero1 > numero2){
     console.log("el numero mayor es "+ numero1 )
     alert("el numero mayor es "+ numero1 )
}
else if(numero1 < numero2){
    console.log("el numero mayor es "+ numero2)
    alert("el numero mayor es "+ numero2)
}
else{
    console.log("los numeros ingresados son iguales")
    alert("los numeros ingresados son iguales")
}
}
//ObtenerMayorMenor(78,34);

//EJERCICIO 2
function ObtenerMayoryMenor(){
    let numero_1 = parseInt(prompt("Digita tu primer numero "));
    let numero_2 = parseInt(prompt("Digita tu segundo numero"));
    if(numero_1 > numero_2){
        console.log("el numero mayor es "+ numero_1)
        alert("el numero mayor es "+ numero_1)
   }
   else if(numero_1 < numero_2){
       console.log("el numero mayor es "+ numero_2)
       alert("el numero mayor es "+ numero_2)
   }
   else{
       console.log("los numeros ingresados son iguales")
       alert("los numeros ingresados son iguales")
   }
}
//ObtenerMayoryMenor();

//EJERCICIO 3
function CalcularCircunf(){
    let radio = parseFloat(prompt("ingrese la medida de radio"));
    let pi = 3.1416;
    let area = pi * (radio^2);
    console.log("la medida de la circunferencia es: " + area);
    alert("la medida de la circunferencia es: " + area);
}
//CalcularCircunf();

//EJERCICIO 4
function CalculartotalCompra(){
    let cantidadProductos = parseInt(prompt("¿cuantos productos desea llevar?"));
    let precioProducto = parseInt(prompt("Ingrese precio"));
    let totalCompra = cantidadProductos * precioProducto;
    console.log("El valor total de la compra fue: " + totalCompra); 
    alert("El valor total de la compra fue: " + totalCompra);
}
//CalculartotalCompra();

//EJERCICIO 5
function CalcularParImpar(numero){
    for(let i=0; i<=numero; i++){
        if(i % 2 == 0 ){
            console.log(i +" es un numero par")
           alert(i +" es un numero par")
        }
        else if (i % 2 == 1){
           console.log(i +" es un numero impar")
           alert(i +" es un numero impar")
        }
    }
}
//CalcularParImpar(100)

//EJERCICIO 6
function CalcularMayorMenorCero(){
    let numero_67 = 67;
    if(numero_67 > 0){
         console.log("el numero: "+numero_67+" es mayor que cero")
        alert("el numero: "+numero_67+" es mayor que cero")
    }
    else if(numero_67 < 0){
        console.log("el numero: "+numero_67+" es menor que cero")
        alert("el numero: "+numero_67+" es menor que cero")
    }
    else{
        console.log("el "+numero_67+" es igual a cero")
        alert("el "+numero_67+" es igual a cero")
    }
    }
    //CalcularMayorMenorCero();
    
    //EJERCICIO 7
function ordenarTresNum(){
    let num1 = parseInt(prompt("digite el numero 1"));
    let num2 = parseInt(prompt("digite el numero 2"));
    let num3 = parseInt(prompt("digite el numero 3"));
        if(num1 > num2 && num1 > num3){
            if(num2 > num3){
                console.log(`${num1}, ${num2}, ${num3}`)
                alert(`${num1}, ${num2}, ${num3}`)
            }
            else{
                console.log(`${num1}, ${num3}, ${num2}`)
                alert(`${num1}, ${num3}, ${num2}`)
            }
        }
        else if(num2 > num1 && num2 > num3){
                if(num1 > num3){
                    console.log(`${num2}, ${num1}, ${num3}`)
                    alert(`${num2}, ${num1}, ${num3}`)
                }
                else{
                    console.log(`${num2}, ${num3}, ${num1}`)
                    alert(`${num2}, ${num3}, ${num1}`)
                }
        }
        else if(num3 > num1 && num3 > num2){
            if(num1 > num2){
                console.log(`${num3}, ${num1}, ${num2}`)
                alert(`${num3}, ${num1}, ${num2}`)
            }
            else{
                console.log(`${num3}, ${num2}, ${num1}`)
                alert(`${num3}, ${num2}, ${num1}`)
            }
        }
        if(num1 < num2 && num1 < num3){
            if(num2 < num3){
                console.log(`${num1}, ${num2}, ${num3}`)
                alert(`${num1}, ${num2}, ${num3}`)
        }
        else{
            console.log(`${num1}, ${num3}, ${num2}`)
            alert(`${num1}, ${num3}, ${num2}`)
        }
        }
        else if(num2 < num1 && num2 < num3){
            if(num1 < num3){
                console.log(`${num2}, ${num1}, ${num3}`)
                alert(`${num2}, ${num1}, ${num3}`)
            }
            else{
                console.log(`${num2}, ${num3}, ${num1}`)
                alert(`${num2}, ${num3}, ${num1}`)
            }
        }
        else if(num3 < num1 && num3 < num2){
                if(num1 < num2){
                    console.log(`${num3}, ${num1}, ${num2}`)
                    alert(`${num3}, ${num1}, ${num2}`)
                }
                else{
                    console.log(`${num3}, ${num2}, ${num1}`)
                    alert(`${num3}, ${num2}, ${num1}`)
                }
        }
        else if(num1 == num2 && num1 == num3){
            if(num2 == num3){
                console.log("los tres numeros digitados son iguales")
                alert("los tres numeros digitados son iguales")
            }
        }
}
//ordenarTresNum()


    
//EJERCICIO 8
function indicarDiaSem(){
var opcion=prompt("ingrese un numero del 1 al 7 para indicar los dias de la semana: ");
switch(parseInt(opcion)){
    case 1: "Lunes"
       alert(" Lunes es un dia laboral");
       break;
    case 2: "Martes"
        alert(" Martes es un dia laboral");
        break;
    case 3: "Miercoles"
        alert(" Miercoles es un dia laboral");
        break;
    case 4: "Jueves"
        alert(" Jueves es un dia laboral");
        break;
    case 5: "Viernes"
        alert(" Viernes es un dia laboral");
        break;
    case 6: "Sabado"
        alert(" Sabado es un dia festivo");
        break;
    case 7: "domingo"
        alert(" Domingo es un dia festivo");
    default:
        alert("el numero ingresado no corresponde a ningun dia semanal, ingrese un numero del 1 al 7");
        break;
    }  
}
//indicarDiaSem() 

//EJERCICIO 9
function MostrarDosEnDos(){
    let n = 48
    let i = 1;
    for( i >= 0; i <= n;i++){
        if(i % 2 == 0 ){
            console.log(i)
            alert(i)
        }
    }
}
//MostrarDosEnDos()

//EJERCICIO 10 

function MostrarMenu(){
    let opciones = 0;
    do{
        opciones=Number(prompt(`Bienvenido
        1. menu
        2. Salir`))
        switch(opciones){
            case 1: alert("hasta pronto")
            break;
            case 2: prompt("1. Python, \
            2. Java, \
            3. JavaScript, \
            4. C#, \
            5. PHP, \
            6. C/, \
            7. Objective-C,\
            8. Cobol,\
            9. .Net, \
            10. C++")
            default:
            alert("si quiere ver las 10 tecnologias presione 2")
        }
    }
while(opciones!=2)

}

//EJECICIO 11

function CalcularSalario(){
    let valorHora = parseInt(prompt("Ingrese el valor de la hora: "));
    let cantidadHoras = parseInt(prompt("Ingrese la cantidad de horas: "));
    let nombre = prompt("Ingrese el nombre del empleado: ");
    let salario = (valorHora*cantidadHoras);
    console.log(`El empleado ${nombre} ganó un salario de ${salario} trabajando ${cantidadHoras} horas con un valor de ${valorHora} hora`);
    alert(`El empleado ${nombre} ganó un salario de ${salario} trabajando ${cantidadHoras} horas con un valor de ${valorHora} hora`);
    if (cantidadHoras < 24){
        console.log("No puede trabajar menos de 24 horas")
        alert("No puede trabajar menos de 24 horas")
    }
    if (cantidadHoras > 96){
        let horasExtra = ((cantidadHoras - 96) * valorHora)
        let pension = (salario * 0.04)
        let salud = (salario * 0.04)
        let salarioTotal = ((salario+horasExtra)-(pension+salud))
        console.log(`El valor de las horas extras es de: $${horasExtra}\n`)
        alert(`El valor de las horas extras es de: $${horasExtra}\n`)
        console.log(`El valor que se le deduce por pensión es: $${pension}\n`)
        alert(`El valor que se le deduce por pensión es: $${pension}\n`)
        console.log(`El valor que se le deduce por salud es: $${salud}\n`)
        alert(`El valor que se le deduce por salud es: $${salud}\n`)
        console.log(`Su salario total es de:  ${salarioTotal}\n`)
        alert (`Su salario total es de:  ${salarioTotal}\n`)
    }
    }
    
 //EJERCICIO 12
    function Calculadora(){
        let num_1 = parseInt(prompt("ingrese el numero 1"));
        let num_2 = parseInt(prompt("ingrese el numero 2"));
        let suma = num_1 + num_2;
        let resta = num_1 - num_2;
        let multiplicacion = num_1 * num_2;
        let division = num_1 / num_2
        let opcion = prompt("que operacion realizara? elija una opcion: +, -, *, / ");
        switch(opcion){
            case "+":
                alert(`${num_1} + ${num_2} = ${suma}`);
                break;
            case "-":
                alert(`${num_1} - ${num_2} = ${resta}`);
                break;
            case "*":
                alert(`${num_1} * ${num_2} = ${multiplicacion}`);
                break;
            case "/":
                alert(`${num_1} / ${num_2} = ${division}`);
            break;
        }
    }
    //Calculadora()
    
 //EJERCICIO 13
    function CalcularIMC(){
        let peso = parseFloat(prompt("ingrese su peso"));
        let estatura = parseFloat(prompt("ingrese estatura"));
        let imc = (peso / (estatura * estatura));
        console.log(`su imc es: ${imc}`);
        alert(`su imc es: ${imc}`);
        if(imc < 18.5){
            console.log("su peso es bajo")
            alert("su peso es bajo")
        }
        else if(imc >= 18.5 && imc <= 24.9){
            console.log("su peso es normalL")
            alert("su peso es normalL")
        }
        else if(imc >= 25 && imc <= 29.9){
            console.log("usted tiene sobrepeso")
            alert("usted tiene sobrepeso")
        }
        else if(imc >= 30 && imc <= 39.9){
            console.log("usted es obeso")
            alert("usted es obeso")
        }
        else{
            console.log("usted es una ballena encallada")
            alert("usted es una ballena encallada")
        }
    }
    //CalcularIMC()