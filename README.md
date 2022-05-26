# Internet Banking

### Instalação do projeto
```
npm install
```

### Compilação no ambiente de desenvolvimento
```
npm run start
```

### Execução da api mock JSON-SERVER:
```
npm run api
```

### Compilação de produção
```
npm run build
```

### Lints and correções
```
npm run lint
```

### Observações:

- Projeto realizado com `Vuejs v3.2.36`.

- Para estilo foi usado `SASS v1.52.1`.

- A mudança entre telas ocorre com `vue-router v4.0.15`.

- O consumo dos endpoints foi realizado com [axios](https://www.npmjs.com/package/axios).

- Para o mock de API foi utilizado o [json-server](https://www.npmjs.com/package/json-server).

- Ao executar o comando `npm run api` os seguintes endpoints podem ser acessados:

> http://localhost:3001/transacoes
  http://localhost:3001/categorias
  http://localhost:3001/valores_principais
  http://localhost:3001/dados_usuario

- Gerenciamento de estado não aplicado.