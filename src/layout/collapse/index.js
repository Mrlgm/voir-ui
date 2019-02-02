import ViCollapse from './collapse';
import ViCollapseItem from './collapse-item';

/* istanbul ignore next */
ViCollapse.install = function(Vue) {
    Vue.component(ViCollapse.name, ViCollapse);
    Vue.component(ViCollapseItem.name, ViCollapseItem);
};

export default ViCollapse;