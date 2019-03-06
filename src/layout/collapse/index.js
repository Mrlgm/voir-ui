import Collapse from './collapse';
import CollapseItem from './collapse-item';

/* istanbul ignore next */
Collapse.install = function(Vue) {
    Vue.component(Collapse.name, Collapse);
    Vue.component(CollapseItem.name, CollapseItem);
};

export default Collapse;