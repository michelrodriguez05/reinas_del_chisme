// Importación de libreria
import chalk from "chalk";

// Importación de clase padre
import Chismosa from "./chismosa.js";

// Creación de la subclase estudianteEspia que extiende de la clase padre "Chismosa"
class companeraCuriosa extends Chismosa {

    // Construcción de atributos
    constructor(nombre, reputacion, nivelChisme) {

        // Redefinición de los atributos heredados
        super(nombre, reputacion, nivelChisme);

        // Array de chismes
        this.chismes = [
            "Dicen que el profe de matemáticas tiene un romance secreto con otra profesora 💌📐",
            "Escuché que alguien hackeó la cuenta del grupo de WhatsApp del curso 📱💻",
            "Vi a Juan copiándose en el examen desde el reloj inteligente ⌚👀",
            "Comentan que van a cambiar al director del colegio porque hubo quejas 🏫⚡",
            "Parece que María subió fotos comprometedoras a sus close friends y alguien tomó capturas 📸🤫"
        ];

        // Chisme actual en null
        this.chismeActual = null;
    }

    // Método de recolectar Info
    recolectarInfo() {

        // Indice random para elegir un chisme del Array de chismes
        let randomIndex = Math.floor(Math.random() * this.chismes.length);
        this.chismeActual = this.chismes[randomIndex];

        console.log(chalk.bgBlackBright(`${this.nombre} Lee chats ajenos desde el último puesto del salón`))

        // Lógica de chisme y reputación (Gana reputación, pero su chisme sube lento de nivel)
        let cambioChisme = Math.floor(Math.random() * 2) + 1;
        let cambioReputacion = Math.random() < 0.7 ? -1 : 3;

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

        console.log(chalk.green(`${this.nombre}: Filtra el chisme por estados en WhatsApp — "${this.chismeActual}"`));

        // Lógica de chisme y reputación (Gana reputación, pero su chisme sube lento de nivel)
        let cambioChisme = Math.floor(Math.random() * 2) + 2;
        let cambioReputacion = Math.random() < 0.3 ? -3 : 1;
    
        // Asignación del cambio a los atributos
        this.nivelChisme = Math.min(10, Math.max(0, this.getNivelChisme() + cambioChisme));
        this.reputacion = Math.min(10, Math.max(0, this.getReputacion() + cambioReputacion));
    }
}

// Se exporta la subclase de "companeraCuriosa"
export default companeraCuriosa;