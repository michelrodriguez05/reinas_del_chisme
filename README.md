# Reinas del Chisme

Simulación divertida en consola donde diferentes "chismosas profesionales" recolectan y difunden chismes con estilos distintos y compiten para ver cuál logra volver su chisme más viral.

## 🔖 Descripción

Proyecto en JavaScript (Node.js) que modela una pequeña "batalla de chismes" entre varias subclases de una clase abstracta Chismosa. Cada chismosa tiene reputación y un nivel de chisme (ambos en rango 0–10). La aplicación corre en la consola, presenta un menú interactivo y muestra estadísticas finales.

## 🗂️ Estructura del proyecto
````
reinas_del_chisme/
├── classes/
│   ├── chismosa.js                # Clase abstracta base
│   ├── tiaVecina.js               # Subclase: Tía vecina
│   ├── companeraCuriosa.js        # Subclase: Compañera curiosa
│   └── estudianteEspia.js         # Subclase: Estudiante espía
├── diagrama_de_clases/            # Imagen del diagrama de clases 
├── main.js                        # Punto de entrada (menú + simulación)
├── package.json                   # Dependencias y scripts
└── .gitignore
````
Nota: el archivo principal que ejecuta la aplicación es main.js (ver package.json).

## 🧩 Dependencias (librerías usadas)

El proyecto utiliza las siguientes dependencias (tal como aparecen en package.json):

- **chalk** — Para colorear y dar estilo a la salida por consola.

- **inquirer** — Para mostrar un menú interactivo en consola y recibir opciones del usuario.

- **boxen** — Para encuadrar / resaltar secciones de texto (bienvenido, ganador, etc.).

Estas librerías ya están listadas en ``package.json`` y se instalan con ``npm install.``

## ⚙️ Requisitos

Node.js (se recomienda Node 14+ o una versión LTS moderna porque el proyecto usa módulos ES type: "module").

## 🚀 Instalación y ejecución

**1.** Clonar el repositorio:
````
git clone https://github.com/michelrodriguez05/reinas_del_chisme/tree/develop
````
**2.** Instalar dependencias:
````
npm install
````
**3.** Ejecutar la aplicación (menú en consola):
````
npm start
````
o
````
node main.js
````
La aplicación iniciará un menú interactivo (usando inquirer) donde podrás iniciar la simulación, ver estadísticas y más.

## 🧠 Cómo funciona

- **Clase abstracta Chismosa**

- Propiedades privadas: `` #reputacion``,`` #nivelChisme ``(ambas entre 0 y 10).

- Constructor: recibe ``nombre``, ``reputacion``, ``nivelChisme``.

- Métodos esperados (abstractos): ``recolectarInfo()`` y ``contarChisme()`` — las subclases deben implementarlos.

- Getters y setters controlan límites y validaciones; si se intenta instanciar ``Chismosa`` directamente o pasar valores inválidos, se lanza un ``Error``.

- **Subclases implementadas**

- Tía Vecina ``(TiaVecina)``: aprovecha reuniones de barrio para escuchar; al contar, difunde el chisme ofreciendo café. Sube rápidamente el nivel del chisme pero tiene riesgo de perder reputación si exagera.

- Compañera Curiosa ``(CompaneraCuriosa)``: pregunta a colegas con aire profesional y filtra chismes en el trabajo; gana reputación con más cuidado y su chisme sube más lentamente.

- Estudiante Espía ``(EstudianteEspia)``: lee chats desde el último puesto y difunde por estados; su nivel de chisme sube rápido, pero puede perder reputación si la descubren.

 - **Lógica de la simulación**

- Se crea un arreglo con varias instancias (una por cada tipo de chismosa).

- Cada chismosa ejecuta ``recolectarInfo()`` y ``contarChisme()`` en al menos 2 rondas.

- Se usan ``Math.random()`` para introducir variación en los cambios de ``nivelChisme`` y ``reputacion``.

- El chisme más viral se determina por ``nivelChisme`` más alto al final de la simulación.

## 🧾 Mensajes y ejemplos

- La salida está coloreada con ``chalk`` y algunas secciones destacadas con ``boxen`` (por ejemplo, bienvenida y cartel del ganador).

- Mensajes y ejemplos (extraídos del código):

 - -  ``Difunde el chisme mientras ofrece café — "<texto del chisme>"`` (Tía Vecina)

- -  ``Filtra el chisme por estados en WhatsApp — "<texto del chisme>"`` (Estudiante/Compañera)

## 🧪 Scripts disponibles

En package.json hay un script útil:
````
"scripts": {
  "start": "node main.js"
}
````
Así que ``npm start`` ejecutará la aplicación.

## ✅ Buenas prácticas y notas

- La aplicación valida entradas (nombre, reputación y nivel de chisme) y lanza errores cuando detecta valores fuera del rango.

- Los valores de reputación y nivel están limitados entre 0 y 10 para evitar desbordes.

- Puedes ampliar la simulación añadiendo más tipos de Chismosa, más frases en los arreglos chismes, o reglas adicionales para la propagación del chisme.


## Autores 🤝
- **Sebastian Gomez**.
- **Michel Rodriguez**.
