const eventos = require('../data/eventos');

export default cb => new Promise(() => {
  setTimeout(() => cb(eventos), 1000);
});
