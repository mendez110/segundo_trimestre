function Ejercicio1y2() {
    class Perro {
        constructor(nombre) {
            this.nombre = nombre;
        }

        ladrar() {
            console.log("¡Woof!", this.nombre);
        }
    }

    let miPerro = new Perro("Kiara");
    miPerro.ladrar();
}

function Ejercicio3al6() {
    /*3*/class CuentaBancaria {
        constructor(titular) {
            this.saldo = 0;
            this.titular = titular;
        }

        depositar(cantidad) {
            this.saldo += cantidad;
        }
        /*fin punto 3*/
        /*5*/
        retirar(cantidad) {
            if (cantidad <= this.saldo) {
                this.saldo -= cantidad;
            } else {
                console.log("Saldo insuficiente");
            }
        }
        /*fin punto 5*/
    }
    /*4*/
    let miCuenta = new CuentaBancaria("Juan");
    miCuenta.depositar(100);
    console.log("Deposito exitoso a la cuenta bancaria del titular: ", miCuenta.titular);
    console.log(miCuenta.titular, "Su saldo es: ", miCuenta.saldo)
/*fin punto 4*/
/*6*/
    miCuenta.retirar(50);
    console.log("Retiro exitoso de la cuenta bancaria del titular: ", miCuenta.titular);
    console.log(miCuenta.titular, "Su saldo es: ", miCuenta.saldo);
    /*fin punto 6*/
}
Ejercicio3al6()