# vue-project


## Configuração Recomendada de Navegador

- Navegadores baseados em Chromium (Chrome, Edge, Brave, etc.):
  - [Vue.js devtools](https://chromewebstore.google.com/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd)
  - [Ative o Formatador de Objetos Personalizados no Chrome DevTools](http://bit.ly/object-formatters)
- Firefox:
  - [Vue.js devtools](https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/)
  - [Ative o Formatador de Objetos Personalizados no Firefox DevTools](https://fxdx.dev/firefox-devtools-custom-object-formatters/)

## Suporte de Tipo para Importações `.vue` em TS

O TypeScript não consegue lidar com informações de tipo para importações `.vue` por padrão, então substituímos a CLI `tsc` por `vue-tsc` para verificação de tipo. Em editores, precisamos do [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) para fazer com que o serviço de linguagem TypeScript reconheça os tipos `.vue`.

## Personalizar configuração

Consulte a [Referência de Configuração do Vite](https://vite.dev/config/).

## Configuração do Projeto

```sh
npm install
```

### Compilar e Hot-Reload para Desenvolvimento

```sh
npm run dev
```

### Verificar Tipos, Compilar e Minificar para Produção

```sh
npm run build
```
