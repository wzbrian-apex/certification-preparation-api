const os = require("node:os")

console.log("Información del sistema operativo")
console.log("----------------------")

console.log("Nombre del sistema operativo:", os.platform())
console.log("Versión del sistema operativo:", os.release())
console.log("Arquitecture:", os.arch())
console.log("CPUs:", os.cpus())
console.log("Memoria libre:", os.freemem())
console.log("Memoria total:", os.totalmem())
console.log("uptime:", os.uptime())