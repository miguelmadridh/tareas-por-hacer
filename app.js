//const argv = require('yargs').argv;

const colors = require('colors');
const argv = require('./config/yargs').argv;
const porHacer = require('./por-hacer/por-hacer');


let comando = argv._[0];


switch (comando) {
    case "crear":
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;
    case "listar":
        let listado = porHacer.getListado();
        for (let tarea of listado) {
            console.log("================".green);
            console.log(`Descripcion , ${tarea.descripcion}`);
            console.log(`Completado , ${tarea.completado}`);
            console.log("================".green);

        }
        console.log('Mostar todas las tarreas por hacer');
        break;
    case "actualizar":
        console.log('Marcar como completadas o no las tareas por hacer');
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        break;
    case "borrar":
        console.log('Borrar alguna tarea');
        let borrar = porHacer.borrar(argv.descripcion);
        console.log(borrar);
        break;
    default:
        console.log('Comando no encontrado');
        break;
}