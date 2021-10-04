const dbConnection = require('./index');


const runSeed = async () => {
  await dbConnection.sync({ force: true })
  console.log('Seed compelete')
  process.kill(0);
}

runSeed();
