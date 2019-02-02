import ViLayout from './layout'
import ViHeader from './header'
import ViContent from './content'
import ViSider from './sider'
import ViFooter from './footer'

ViLayout.install = Vue => {
    Vue.component(ViLayout.name, ViLayout)
    Vue.component(ViHeader.name, ViHeader)
    Vue.component(ViContent.name, ViContent)
    Vue.component(ViSider.name, ViSider)
    Vue.component(ViFooter.name, ViFooter)
}

export default ViLayout