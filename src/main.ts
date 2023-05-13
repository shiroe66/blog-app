import * as express from 'express';

function main() {
  const app = express();

  app.get('/', (_, res) => {
    res.send('Hello World');
  });

  app.listen(3000);
}

main();
