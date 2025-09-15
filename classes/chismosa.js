// Se crea la calse abstracta principal <<Chismosa>>
class Chismosa {

    // Atributos privados
    #reputacion
    #nivelChisme

    // Se construyen los atributos de la clase
    constructor(nombre, reputacion, nivelChisme) {

        // Verificaciones esenciales
        if (this.constructor === Chismosa) {
            throw new Error("No se puede instanciar la clase abstracta 'Chismosa'");
        }

        if (typeof nombre === "string" && nombre.length >= 2) {
            this.nombre = nombre
        } else {
            throw new Error("Error en el nombre")
        }

        // A reputación se le asigna un rango de valores entre 0 y 10 
        if (typeof reputacion === "number" && reputacion >=0 && reputacion <= 10) {
            this.#reputacion = reputacion
        } else {

            // Se lanza error en caso de que ocurra
            throw new Error("Error en la reputación")
        }

        // A nivel de chisme se le asigna un rango de valores entre 0 y 10 
        if (typeof nivelChisme === "number" && nivelChisme >= 0 && nivelChisme <=10) {
            this.#nivelChisme = nivelChisme 
        } else {
            // Se lanza error en caso de que ocurra
            throw new Error("Error en el nivel de chisme")
        }
    }

    // Método abstracto de recolectar Info
    recolectarInfo() {
        throw new Error("función recolectarInfo no permitida, implementar en subclases")
    }

    // Método abstracto de contar el chisme
    contarChisme() {
        throw new Error("función contarChisme no permitida, implementar en subclases")
    }

    // Método para obtener el valor de la reputación 
    getReputacion() {
        return this.#reputacion
    }

    // Método para obtener el nivel de chisme
    getNivelChisme(){
        return this.#nivelChisme
    }

    // Acceso simulado para acceder al valor privado (reputación)
    set reputacion(valor) {
        if (typeof valor === "number" && valor >= 0 && valor <= 10) {
            this.#reputacion = valor;
        } else {
            throw new Error("Error en la reputación");
        }
    }

    // Acceso simulado para acceder al valor privado (nivelChisme)
    set nivelChisme(valor){
        if (typeof valor === "number" && valor >= 0 && valor <= 10) {
            this.#nivelChisme = valor
        } else {
            throw new Error("Error en el nivel de chisme")
        }
    }

}

// Se exporta la clase abstracta para luego ser importada para la creación de subclases
export default Chismosa;