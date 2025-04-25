//  Crear una clase Cliente con un atributo privado saldo
// y un método privado calcularDescuento() que se utilice
// dentro de un método público aplicarDescuento()

class Cliente {
    #saldo;

    constructor(saldoInicial) {
    this.#saldo = saldoInicial;
    }

    #calcularDescuento() {
        if (this.#saldo > 1000) {
        return 0.10; 
        } else {
        return 0.05; 
        }
    }

    aplicarDescuento() {
    const descuento = this.#calcularDescuento();
    const montoDescontado = this.#saldo * descuento;
    this.#saldo -= montoDescontado;

    console.log(`Descuento aplicado: $${montoDescontado}`);
    console.log(`Nuevo saldo: $${this.#saldo}`);
    }

    getSaldo() {
    return this.#saldo;
    }
}

const cliente1 = new Cliente(1500);
cliente1.aplicarDescuento();

console.log(cliente1.getSaldo());