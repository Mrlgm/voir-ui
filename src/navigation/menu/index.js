import Menu from './menu'
import MenuItem from './menu-item'
import Submenu from './submenu'

Menu.install = Vue => {
    Vue.component(Menu.name, Menu)
    Vue.component(MenuItem.name, MenuItem)
    Vue.component(Submenu.name, Submenu)
}

export default Menu