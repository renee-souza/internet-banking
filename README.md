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

- Projeto realizado com `Vuejs` [v3.2.36](https://www.npmjs.com/package/vue/v/3.2.36).

- Para estilo foi usado `SASS` [v1.52.1](https://www.npmjs.com/package/sass/v/1.52.1).

- A mudança entre telas ocorre com `vue-router` [v4.0.15](https://www.npmjs.com/package/vue-router/v/4.0.15).

- O consumo dos endpoints foi realizado com `axios` [v0.24.0](https://www.npmjs.com/package/axios/v/0.24.0).

- Para o mock de API foi utilizado o `json-server` [v0.17.0](https://www.npmjs.com/package/json-server/v/0.17.0).

- Ao executar o comando `npm run api` os seguintes endpoints podem ser acessados:

> http://localhost:3001/transacoes

> http://localhost:3001/categorias

> http://localhost:3001/valores_principais

> http://localhost:3001/dados_usuario

- Gerenciamento de estado não aplicado.