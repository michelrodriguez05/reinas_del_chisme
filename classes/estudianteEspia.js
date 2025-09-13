import chalk from "chalk";
import Chismosa from "./chismosa.js";

class companeraCuriosa extends Chismosa {
    constructor(nombre, reputacion, nivelChisme) {
        super(nombre, reputacion, nivelChisme);
        this.chismes = [
            "Dicen que el profe de matemáticas tiene un romance secreto con otra profesora 💌📐",
            "Escuché que alguien hackeó la cuenta del grupo de WhatsApp del curso 📱💻",
            "Vi a Juan copiándose en el examen desde el reloj inteligente ⌚👀",
            "Comentan que van a cambiar al director del colegio porque hubo quejas 🏫⚡",
            "Parece que María subió fotos comprometedoras a sus close friends y alguien tomó capturas 📸🤫"
        ];
        this.chismeActual = null;
    }
    recolectarInfo() {
        let randomIndex = Math.floor(Math.random() * this.chismes.length);
        this.chismeActual = this.chismes[randomIndex];

        console.log(chalk.bgBlackBright(`${this.nombre} Lee chats ajenos desde el último puesto del salón`))
        let cambioChisme = Math.floor(Math.random() * 3) + 1;
        let cambioReputacion = Math.random() < 0.5 ? -1 : 3;

        this.nivelChisme = Math.min(10, this.getNivelChisme() + cambioChisme);
        this.reputacion = Math.max(0, this.getReputacion() + cambioReputacion)
    }

    contarChisme() {
        if (!this.chismeActual) {
        console.log(chalk.gray(`${this.nombre} aún no tiene ningún chisme para contar`));
        return;
    }

        console.log(chalk.green(`${this.nombre}: Filtra el chisme por estados en WhatsApp — "${this.chismeActual}"`));

        let cambioChisme = Math.floor(Math.random() * 2) + 4;
        let cambioReputacion = Math.random() < 0.3 ? -3 : 1;

        this.nivelChisme = Math.min(10, this.getNivelChisme() + cambioChisme);
        this.reputacion = Math.max(0, this.getReputacion() + cambioReputacion);
    }
}

export default companeraCuriosa;