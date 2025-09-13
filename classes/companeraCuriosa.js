import chalk from "chalk";
import Chismosa from "./chismosa.js";

class companeraCuriosa extends Chismosa {
    constructor(nombre, reputacion, nivelChisme) {
        super(nombre, reputacion, nivelChisme);
        this.chismes = [
            "Escuché que el jefe está planeando un viaje secreto con la secretaria ✈️🤫",
            "Dicen que van a recortar personal en el área de contabilidad 📉",
            "Vi a Laura salir de la oficina de recursos humanos con una sonrisa sospechosa 😏",
            "Comentan que el nuevo practicante es hijo del gerente 👀",
            "Parece que alguien se llevó comida de la nevera que no era suya 🍲❌",
        ];
        this.chismeActual = null;
    }
    recolectarInfo() {
        let randomIndex = Math.floor(Math.random() * this.chismes.length);
        this.chismeActual = this.chismes[randomIndex];

        console.log(chalk.bgBlackBright(`${this.nombre} hace preguntas aparentemente profesionales a los compañeros de trabajo`))
        let cambioChisme = Math.floor(Math.random() * 3) + 1;
        let cambioReputacion = Math.random() < 0.5 ? -1 : 1;

        this.nivelChisme = Math.min(10, this.getNivelChisme() + cambioChisme);
        this.reputacion = Math.max(0, this.getReputacion() + cambioReputacion)
    }

    contarChisme() {
        if (!this.chismeActual) {
        console.log(chalk.gray(`${this.nombre} aún no tiene ningún chisme para contar`));
        return;
    }

        console.log(chalk.green(`${this.nombre}: Comenta el chisme como ejemplo de vida en el trabajo — "${this.chismeActual}"`));

        let cambioChisme = Math.floor(Math.random() * 2) + 1;
        let cambioReputacion = Math.random() < 0.3 ? -1 : 3;

        this.nivelChisme = Math.min(10, this.getNivelChisme() + cambioChisme);
        this.reputacion = Math.max(0, this.getReputacion() + cambioReputacion);
    }
}

export default companeraCuriosa;