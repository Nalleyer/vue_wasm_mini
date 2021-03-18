import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

async function init() {
  import("@/assets/pkg/rust_src_bg").then((wasm) => {
    console.log("vue loaded", wasm);
    Vue.prototype.$wasm = wasm

    new Vue({
      render: h => h(App),
      created: function () {
      }
    }).$mount('#app')
  });
}


init();