const eventos = require('../data/eventos')

const getEventos = (cb) => {
    return new Promise(resolve => {
        setTimeout(() => resolve(eventos), 1000)
    })
}
