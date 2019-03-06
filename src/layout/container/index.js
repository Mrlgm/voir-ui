import Layout from './layout'
import Header from './header'
import Content from './content'
import Sider from './sider'
import Footer from './footer'

Layout.install = Vue => {
    Vue.component(Layout.name, Layout)
    Vue.component(Header.name, Header)
    Vue.component(Content.name, Content)
    Vue.component(Sider.name, Sider)
    Vue.component(Footer.name, Footer)
}

export default Layout