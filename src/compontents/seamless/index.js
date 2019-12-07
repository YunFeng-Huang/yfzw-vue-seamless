import seamless from "./src/main";

/* istanbul ignore next */
seamless.install = function(Vue) {
  Vue.component(seamless.name, seamless);
};

export default seamless;
