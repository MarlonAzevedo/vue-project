# vue-project

## 🚀 Tecnologias e Bibliotecas Inclusas

- **[Vue 3](https://vuejs.org/)**: Framework progressivo para construção de interfaces de usuário (*Composition API / `<script setup>`*).
- **[Vite](https://vitejs.dev/)**: Ferramenta de build incrivelmente rápida para melhor experiência de desenvolvimento.
- **[Vue Router](https://router.vuejs.org/)**: Roteamento SPA configurado com layout base (`AppLayout`) e rotas modulares (ex: rotas `/` e `/auth`).
- **[Pinia](https://pinia.vuejs.org/)**: Gerenciamento de estado oficial e moderno para o Vue.
- **[Tailwind CSS (v4)](https://tailwindcss.com/)**: Estilização com utilitários flexíveis, integrados com os estilos globais do aplicativo.
- **TypeScript**: Totalmente tipado para segurança de tipo profunda e suporte intellisense em editores.

## 📁 Estrutura do Projeto (Feature-Sliced Design)

O projeto usa a abordagem *Feature-Sliced Design / Modular architecture*, separando a UI compartilhada dos domínios específicos (módulos), facilitando a manutenção e a escalabilidade ao longo do tempo:

```text
src/
├── app/                  # Núcleo da aplicação: configuração inicial e global
│   ├── App.vue           # Componente base que renderiza a `<RouterView>`
│   ├── app.css           # Estilos globais (integração principal com Tailwind CSS)
│   └── router/           # Definição e inicialização do Vue Router
├── modules/              # Domínios de negócios (funcionalidades fechadas)
│   ├── auth/             # Módulo de Autenticação
│   │   └── pages/        # Telas do módulo (ex: AuthPage.vue)
│   └── samples/          # Módulo de Exemplo/Home
│       └── pages/        # Telas do módulo (ex: HomePage.vue)
└── shared/               # Código reaproveitável entre diferentes módulos
    └── layouts/          # Layouts estruturais (ex: AppLayout.vue com header/sidebar/main)
```

## 🛠 Configuração Recomendada de Navegador

- Navegadores baseados em Chromium (Chrome, Edge, Brave, etc.):
  - [Vue.js devtools](https://chromewebstore.google.com/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd)
  - [Ative o Formatador de Objetos Personalizados no Chrome DevTools](http://bit.ly/object-formatters)
- Firefox:
  - [Vue.js devtools](https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/)
  - [Ative o Formatador de Objetos Personalizados no Firefox DevTools](https://fxdx.dev/firefox-devtools-custom-object-formatters/)

## 📝 Suporte de Tipo para Importações `.vue` em TS

O TypeScript não consegue lidar com informações de tipo para importações `.vue` por padrão, então substituímos a CLI `tsc` por `vue-tsc` para verificação de tipo. Em editores, precisamos do [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) para fazer com que o serviço de linguagem TypeScript reconheça os tipos `.vue`.

## ⚙️ Personalizar configuração

Consulte a [Referência de Configuração do Vite](https://vite.dev/config/).

## 🚦 Configuração do Projeto

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
