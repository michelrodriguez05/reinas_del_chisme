import chalk from "chalk";
import Chismosa from "./chismosa.js";

class TiaVecina extends Chismosa {
    constructor(nombre, reputacion, nivelChisme) {
        super(nombre, reputacion, nivelChisme);
        this.chismes = [
            "La vecina nueva llega siempre con bolsas sospechosas 🛍️",
            "Al hijo de Don Pedro lo vieron con otra en el parque 💔",
            "Dicen que la tienda de la esquina va a cerrar 🏪",
            "La presidenta de la junta se pelea con todo el mundo 😡"
        ];
        this.chismeActual = null;
    }
    recolectarInfo() {
        let randomIndex = Math.floor(Math.random() * this.chismes.length);
        this.chismeActual = this.chismes[randomIndex];

        console.log(chalk.bgBlackBright(`${this.nombre} aprovecha la reunión del barrio para escuchar discretamente`))
        let cambioChisme = Math.floor(Math.random() * 3) + 2
        let cambioReputacion = Math.random() < 0.5 ? -1 : 0;

        this.nivelChisme = Math.min(10, this.getNivelChisme() + cambioChisme);
        this.reputacion = Math.max(0, this.getReputacion() + cambioReputacion)
    }

    contarChisme() {
        if (!this.chismeActual) {
        console.log(chalk.gray(`${this.nombre} aún no tiene ningún chisme para contar`));
        return;
    }

        console.log(chalk.green(`${this.nombre}: Difunde el chisme mientras ofrece café — "${this.chismeActual}"`));

        let cambioChisme = Math.floor(Math.random() * 2) + 1;
        let cambioReputacion = Math.random() < 0.3 ? -2 : 1;

        this.nivelChisme = Math.min(10, this.getNivelChisme() + cambioChisme);
        this.reputacion = Math.max(0, this.getReputacion() + cambioReputacion);
    }
}

export default TiaVecina;
