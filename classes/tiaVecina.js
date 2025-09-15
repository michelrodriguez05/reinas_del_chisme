// Importación de libreria
import chalk from "chalk";

// Importación de clase padre
import Chismosa from "./chismosa.js";

// Creación de la subclase tiaVecina que extiende de la clase padre "Chismosa"
class TiaVecina extends Chismosa {

    // Construcción de atributos
    constructor(nombre, reputacion, nivelChisme) {

        // Redefinición de los atributos heredados
        super(nombre, reputacion, nivelChisme);

        // Array de chismes
        this.chismes = [
            "La vecina nueva llega siempre con bolsas sospechosas 🛍️",
            "Al hijo de Don Pedro lo vieron con otra en el parque 💔",
            "Dicen que la tienda de la esquina va a cerrar 🏪",
            "La presidenta de la junta se pelea con todo el mundo 😡"
        ];

        // Chisme actual en null
        this.chismeActual = null;
    }

    // Método de recolectar Info
    recolectarInfo() {

        // Indice random para elegir un chisme del Array de chismes
        let randomIndex = Math.floor(Math.random() * this.chismes.length);
        this.chismeActual = this.chismes[randomIndex];

        console.log(chalk.bgBlackBright(`${this.nombre} aprovecha la reunión del barrio para escuchar discretamente`))

        // Lógica de chisme y reputación (Su nivel de chisme sube rápido, pero puede perder reputación si es descubierta)
        let cambioChisme = Math.floor(Math.random() * 2) + 2
        let cambioReputacion = Math.random() < 0.5 ? -1 : 0;

        // Asignación del cambio a los atributos
        this.nivelChisme = Math.min(10, Math.max(0, this.getNivelChisme() + cambioChisme));
        this.reputacion = Math.min(10, Math.max(0, this.getReputacion() + cambioReputacion));
    }

    // Método de contar chisme
    contarChisme() {

        // Si algún caso el método se ejecuta sin haberse ejecutado primero el método de recolectar info se imprime un mensaje
        if (!this.chismeActual) {
        console.log(chalk.gray(`${this.nombre} aún no tiene ningún chisme para contar`));
        return;
    }

        console.log(chalk.green(`${this.nombre}: Difunde el chisme mientras ofrece café — "${this.chismeActual}"`));

        // Lógica de chisme y reputación (Su nivel de chisme sube rápido, pero puede perder reputación si es descubierta)
        let cambioChisme = Math.floor(Math.random() * 2) + 1;
        let cambioReputacion = Math.random() < 0.3 ? -2 : 1;

        // Asignación del cambio a los atributos
        this.nivelChisme = Math.min(10, Math.max(0, this.getNivelChisme() + cambioChisme));
        this.reputacion = Math.min(10, Math.max(0, this.getReputacion() + cambioReputacion));
    }
}

// Se exporta la subclase de "companeraCuriosa"
export default TiaVecina;
