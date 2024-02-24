import { defineConfig, passthroughImageService } from 'astro/config'

export default defineConfig({
   image:{
    service:passthroughImageService(),
   },
   site: 'https://venemuert.github.io/',
   base: '/Recipe',
})
