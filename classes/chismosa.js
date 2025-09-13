class Chismosa {
    #reputacion
    #nivelChisme

    constructor(nombre, reputacion, nivelChisme) {
        if (this.constructor === Chismosa) {
            throw new Error("No se puede instanciar la clase abstracta 'Chismosa'");
        }

        if (typeof nombre === "string" && nombre.length >= 2) {
            this.nombre = nombre
        } else {
            throw new Error("Error en el nombre")
        }

        if (typeof reputacion === "number" && reputacion >=0 && reputacion <= 10) {
            this.#reputacion = reputacion
        } else {
            throw new Error("Error en la reputación")
        }

        if (typeof nivelChisme === "number" && nivelChisme >= 0 && nivelChisme <=10) {
            this.#nivelChisme = nivelChisme 
        } else {
            throw new Error("Error en el nivel de chisme")
        }
    }

    recolectarInfo() {
        throw new Error("función recolectarInfo no permitida, implementar en subclases")
    }

    contarChisme() {
        throw new Error("función contarChisme no permitida, implementar en subclases")
    }

    getReputacion() {
        return this.#reputacion
    }

    getNivelChisme(){
        return this.#nivelChisme
    }

    set reputacion(valor) {
        if (typeof valor === "number" && valor >= 0 && valor <= 10) {
            this.#reputacion = valor;
        } else {
            throw new Error("Error en la reputación");
        }
    }

    set nivelChisme(valor){
        if (typeof valor === "number" && valor >= 0 && valor <= 10) {
            this.#nivelChisme = valor
        } else {
            throw new Error("Error en el nivel de chisme")
        }
    }

}

export default Chismosa;