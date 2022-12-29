import App from './App'

import { createSSRApp } from 'vue'
import * as Pinia from 'pinia'
import { createUnistorage } from './uni_modules/pinia-plugin-unistorage'

export function createApp() {
	const pinia = Pinia.createPinia()
	pinia.use(createUnistorage())
  const app = createSSRApp(App)
	app.use(pinia)
  return {
    app,
		pinia
  }
}