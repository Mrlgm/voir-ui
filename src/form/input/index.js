import ViInput from './src/input';

/* istanbul ignore next */
ViInput.install = function(Vue) {
    Vue.component(ViInput.name, ViInput);
};

export default ViInput;