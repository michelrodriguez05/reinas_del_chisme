// Importación de librerias 
import inquirer from "inquirer";
import chalk from "chalk";
import boxen from "boxen";

// Importación de subclases
import TiaVecina from "./classes/tiaVecina.js";
import CompaneraCuriosa from "./classes/companeraCuriosa.js";
import EstudianteEspia from "./classes/estudianteEspia.js";

// Se crea la función para mostrar el menú
function mostrarBienvenida() {

    // Presentación
    const bienvenida = chalk.bold.cyan('👑 REINAS DEL CHISME 👑 - Elija una opción');
    console.log(
        boxen(bienvenida, {
            padding: 1,
            margin: 1,
            borderStyle: 'double',
            borderColor: 'yellow'
        })
    );
}

// Función para pausar la ejecución
async function pausar() {

    // Se crea un prompt
    await inquirer.prompt([
        {
            // tipo de entrada
            type: 'input',
            name: 'continuar',
            message: 'Presiona ENTER para volver al menú chismoso'
        }
    ]);
}

// Funciones del menú (elecciones)
async function menuPrincipal() {

    // Para evitar salidas inesperadas se crea la variable en "false"
    let salir = false;

    // Para mantener la ejecución 
    while (!salir) {

        // Se crea un prompt
        const opciones = await inquirer.prompt([
            {
                // lista de opciones
                type: 'list',
                name: 'accion',
                message: '¿Que opción chismosa vas a elegir?',

                // opciones a elegir
                choices: [
                    { name: '🥊 PELEA DE CHISMOSAS 🥊', value: "pelea" },
                    { name: '🚶‍♂️‍➡️ - Salir', value: "salir" }
                ]
            }
        ]);

        // Elección de las opciones en el menú
        switch (opciones.accion) {

            // Opción para realizar la pelea
            case 'pelea':
                console.log("🥊 PELEA DE CHISMOSAS 🥊")
                peleaChismosas()
                await pausar();
                break;
            // Opción de salir
            case 'salir':
                console.log(chalk.blue('¡Hasta pronto! 👋'));
                salir = true;
                break;
        }
    }
}

// Por defecto se ejecuta la función "mostrarBienvenida"
async function main() {
    mostrarBienvenida();
    await menuPrincipal();
}

// Iniciador del programa
main();

// Función para ejecutar la pelea de chismosas
function peleaChismosas() {
    // Crear arreglo con las chismosas concursantes
    let chismosas = [
        new TiaVecina("Doña Rosa", 7, 2),
        new CompaneraCuriosa("Claudia", 6, 1),
        new EstudianteEspia("Kevin", 5, 1),
    ];

    // Simular 2 rondas por chismosa
    for (let ronda = 1; ronda <= 2; ronda++) {
        console.log(chalk.yellowBright(`\nRonda ${ronda} de chismes:`));

        // Cada chismosa ejecuta dos veces los dos métodos de recolectarInfo() y contarChisme()
        chismosas.forEach(chismosa => {
            chismosa.recolectarInfo();
            chismosa.contarChisme();
        });
    }

    // Mostrar estadísticas finales
    console.log(chalk.cyanBright("\n📊 Resultados finales de la pelea de chismosas:"));

    // Para obtener resultados se llaman los metodos de getNivelChisme() y getReputación()
    chismosas.forEach(chismosa => {
        let nivelChisme = chismosa.getNivelChisme();
        let reputacion = chismosa.getReputacion();

        // Colorear según reglas
        let chismeColor = nivelChisme >= 8 ? chalk.magenta : chalk.whiteBright;
        let reputacionColor = reputacion >= 7 ? chalk.hex("#FFA500") : reputacion <= 3 ? chalk.black : chalk.whiteBright; 

        console.log(chismeColor(`- ${chismosa.nombre} - Nivel de Chisme: ${nivelChisme}/10`));
        console.log(reputacionColor(`⭐ Reputación: ${reputacion}/10\n`));
    });

    // Determinar la chismosa más viral
    let masViral = chismosas.reduce((conteo, actual) =>
        actual.getNivelChisme() > conteo.getNivelChisme() ? actual : conteo
    );

    // Se renderiza la ganadora del chisme
    console.log(
    boxen(
        chalk.whiteBright.bgYellow.bold("🏆 GANADOR 🏆\n\n") +
        chalk.bgMagenta.white(`🏆 La chismosa más viral es: ${masViral.nombre} con nivel ${masViral.getNivelChisme()}/10!\n`) +
        chalk.magenta(`💬 Chisme más viral: "${masViral.chismeActual}"`),
            {
                padding: 1,
                margin: 1,
                borderStyle: "doubleSingle",
                borderColor: "#8A2BE2"
            }
        )
    );
}