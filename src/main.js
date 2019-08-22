import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
  //Configurando Bootstrap
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)
var expressVue = require("express-vue");
var app = express();
 
  //pass your app through express-vue here
  //expressVueOptions is optional and explained later in the docs


  
expressVue.use(app, expressVueOptions);
router.get('/', (req, res, next) => {
  const data = {
      otherData: 'Something Else' 
  };
  req.vueOptions = {
      head: {
          title: 'Page Title',
          metas: [
              { property:'og:title', content: 'Page Title'},
              { name:'twitter:title', content: 'Page Title'},
          ]
      }    
  }
  res.renderVue('app.vue', data, req.vueOptions);
})


Vue.config.productionTip = false


