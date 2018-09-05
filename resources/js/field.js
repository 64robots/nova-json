Nova.booting((Vue, router) => {
  Vue.config.devtools = true;
  Vue.component('index-nova-json', require('./components/IndexField'));
  Vue.component('detail-nova-json', require('./components/DetailField'));
  Vue.component('form-nova-json', require('./components/FormField'));
});
