import express from 'express';
import routes from './routes';

const app = express();

app.use(express.json());

app.use(routes);

app.listen(3333, () => {
    console.log('Server started on port 3333');
});

/**
 * Criando projeto node + express + typescript
 * yarn init -y
 * yarn add express
 * yarn add typescript -D
 * yarn tsc --init
 * Descomenta: outDir e rootDir e inclui os valores: ./dist e ./src
 * yarn add @types express -D
 * yarn add ts-node-dev -D
 * No package json, criar scripts:
 * "scripts": {
    "build": "tsc",
    "dev:server": "ts-node-dev --transpileOnly --ignore-watch node_modules src/server.ts"
  },
  O --transpileOnly vai fazer o ts-node-dev apenas rodar a aplicação, evitando a verificação
  se o código está correto ou com erros, essa função vai ficar para o visual code. Com isso o
  projeto irá carregar muito mais rápido.
  O --ignore-watch node_modules vai fazer com que ts-node-dev tente compilar os códigos da pasta
  node_modules ou fiquei observando alterações nesse diretório.
  O --inspect possibilitará que o vscode se conecte com o código node em ambiente de desenvolvimento

  */
