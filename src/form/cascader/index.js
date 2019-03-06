import Cascader from './cascader';
import CascaderItems from './cascader-items'

/* istanbul ignore next */
Cascader.install = function(Vue) {
    Vue.component(Cascader.name, Cascader);
    Vue.component(CascaderItems.name, CascaderItems)
};

export default Cascader;