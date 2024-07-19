import { platform, release, arch, cpus, freemem, totalmem, uptime } from "node:os"

console.log("Información del sistema operativo")
console.log("----------------------")

console.log("Nombre del sistema operativo:", platform())
console.log("Versión del sistema operativo:", release())
console.log("Arquitecture:", arch())
console.log("CPUs:", cpus())
console.log("Memoria libre:", freemem())
console.log("Memoria total:", totalmem())
console.log("uptime:", uptime())