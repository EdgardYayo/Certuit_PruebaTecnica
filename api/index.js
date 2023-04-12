const server = require('./src/app.js');
const { conn } = require('./src/db.js');

// Syncronazing all the models at once.
conn.sync({ force: true }).then(() => {
  server.listen(3001, () => {
    console.log('%s listening at 3001'); // eslint-disable-line no-console
  });
});