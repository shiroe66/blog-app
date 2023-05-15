import 'reflect-metadata';
import './controllers';
import 'dotenv/config';
import { InversifyExpressServer } from 'inversify-express-utils';
import * as bodyParser from 'body-parser'
import { container } from './bindings';

async function main() {
  const port = process.env.PORT || 3000
  const server = new InversifyExpressServer(container)
  server.setConfig((app) => {
    app.use(bodyParser.json())
  })

  server.build().listen(port)
  console.log(`🚀 Application is running on ${port} port`);
}

main();
