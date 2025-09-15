// Importación de libreria
import chalk from "chalk";

// Importación de clase padre
import Chismosa from "./chismosa.js";

// Creación de la subclase companeraCuriosa que extiende de la clase padre "Chismosa"
class companeraCuriosa extends Chismosa {

    // Construcción de atributos
    constructor(nombre, reputacion, nivelChisme) {

        // Redefinición de los atributos heredados
        super(nombre, reputacion, nivelChisme);

        // Array de chismes
        this.chismes = [
            "Escuché que el jefe está planeando un viaje secreto con la secretaria ✈️🤫",
            "Dicen que van a recortar personal en el área de contabilidad 📉",
            "Vi a Laura salir de la oficina de recursos humanos con una sonrisa sospechosa 😏",
            "Comentan que el nuevo practicante es hijo del gerente 👀",
            "Parece que alguien se llevó comida de la nevera que no era suya 🍲❌",
        ];

        // Chisme actual en null
        this.chismeActual = null;
    }

    // Método de recolectar Info
    recolectarInfo() {

        // Indice random para elegir un chisme del Array de chismes
        let randomIndex = Math.floor(Math.random() * this.chismes.length);
        this.chismeActual = this.chismes[randomIndex];

        console.log(chalk.bgBlackBright(`${this.nombre} hace preguntas aparentemente profesionales a los compañeros de trabajo`))

        // Lógica de chisme y reputación (Aumenta mucho el nivel del chisme, pero también su reputación puede verse afectada si exagera)
        let cambioChisme = Math.floor(Math.random() * 2) + 1;
        let cambioReputacion = Math.random() < 0.5 ? -1 : 1;

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

        console.log(chalk.green(`${this.nombre}: Comenta el chisme como ejemplo de vida en el trabajo — "${this.chismeActual}"`));

        // Lógica de chisme y reputación (Aumenta mucho el nivel del chisme, pero también su reputación puede verse afectada si exagera)
        let cambioChisme = Math.floor(Math.random() * 2) + 1;
        let cambioReputacion = Math.random() < 0.5 ? -2 : 3;

        // Asignación del cambio a los atributos
        this.nivelChisme = Math.min(10, Math.max(0, this.getNivelChisme() + cambioChisme));
        this.reputacion = Math.min(10, Math.max(0, this.getReputacion() + cambioReputacion));
    }
}

// Se exporta la subclase de "companeraCuriosa"
export default companeraCuriosa;