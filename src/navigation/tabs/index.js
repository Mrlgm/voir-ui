import Tabs from './tabs'
import TabsContent from './tabs-content'
import TabsNav from './tabs-nav'
import TabsItem from './tabs-item'
import TabsPane from './tabs-pane'

Tabs.install = Vue => {
    Vue.component(Tabs.name, Tabs)
    Vue.component(TabsContent.name, TabsContent)
    Vue.component(TabsNav.name, TabsNav)
    Vue.component(TabsItem.name, TabsItem)
    Vue.component(TabsPane.name, TabsPane)
}

export default Tabs