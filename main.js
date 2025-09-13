// se importa la libreria "inquirer"
const inquirer = require('inquirer');

// Se importa la libreria "chalk"
const chalk = require('chalk');

// Se importa la libreria "boxen"
const boxen = require('boxen');

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
                    {name: '🥊 PELEA DE CHISMOSAS 🥊', value: "pelea"},
                    {name: '👾 - Chismosa más VIRAL', value: "viral"},
                    {name: '💥 - Chismes en tendencia', value: "tendencia"},
                    {name: '🚶‍♂️‍➡️ - Salir', value: "salir"}
                ]
            }
        ]);

        // Elección de las opciones en el menú
        switch (opciones.accion) {

            // Opción para realizar la pelea
            case 'pelea':
                console.log("🥊 PELEA DE CHISMOSAS 🥊")
                await pausar();
                break;
            // Opción para la chismosa mas viral
            case 'viral':
                console.log("👾 - Chismosa más VIRAL")
                await pausar();
                break;
            // Opción de chismes en tendencia
            case 'tendencia':
                console.log("💥 - Chismes en tendencia")
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

main();