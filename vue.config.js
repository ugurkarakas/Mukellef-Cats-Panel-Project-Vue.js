const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  css: {
    loaderOptions: {
        sass: {
            data: `
              @import '@/assets/scss/_variables.scss';
              @import '@/assets/scss/_mixins.scss';
              @import "@/assets/scss/_functions.scss";
              @import 'node_modules/bootstrap/scss/bootstrap.scss';
            `
        }
    }
},
  transpileDependencies: true
})