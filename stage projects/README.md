SOS Technical School — lightweight starter

What I changed:
- Added Tailwind CSS via CDN in `index.html` for quick styling without build changes.
- Rewrote `src/App.vue` to a simple landing page and added `src/assets/logo.svg`.
- Added `src/components/Administration.vue`, `src/views/HomeView.vue`, and `src/router/index.js`.

Folders created:
- `src/assets/`
- `src/components/`
- `src/views/`
- `src/router/`

How to run:
1. npm install
2. npm run dev

Notes:
- If you prefer to install Tailwind via PostCSS (recommended for production), remove the CDN script and follow Tailwind's installation guide.
# stage projects

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VS Code](https://code.visualstudio.com/) + [Vue (Official)](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Recommended Browser Setup

- Chromium-based browsers (Chrome, Edge, Brave, etc.):
  - [Vue.js devtools](https://chromewebstore.google.com/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd)
  - [Turn on Custom Object Formatter in Chrome DevTools](http://bit.ly/object-formatters)
- Firefox:
  - [Vue.js devtools](https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/)
  - [Turn on Custom Object Formatter in Firefox DevTools](https://fxdx.dev/firefox-devtools-custom-object-formatters/)

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```
