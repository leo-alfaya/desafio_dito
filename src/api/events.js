const data = require('../data/events.json');

export default cb => new Promise(() => {
  setTimeout(() => cb(data.events), 1000);
});
