const argv = require('yargs').command('crear', 'Crear una tarea por hacer', {
    descripcion: {
        alias: 'd',
        demand: true
    }
}).
command('actualizar', 'Actualizar una tarea por hacer', {
    descripcion: {
        alias: 'd',
        demand: true

    },
    completado: {
        default: true,
        alias: 'c',
        desc: 'Marca como completado o pendiente la tarea'

    }
}).
command('listar', 'Mostar todas las tarreas por hacer', {
    descripcion: {
        default: true,
        alias: 'd'
    }
}).
command('borrar', 'Borrar una tarea en especifico', {
    descripcion: {
        alias: 'd'
    }
}).
help().argv;

module.exports = { argv };