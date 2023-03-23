// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss', '@nuxtjs/supabase','@pinia/nuxt'],
    app: {
        baseURL: '/testVue',
    
      },
      tailwindcss: {
        cssPath: '~/assets/css/tailwind.css',
        configPath: '~/tailwind.config.js',
        injectPosition: 0,
        viewer: false,
      }
      
    
} )


