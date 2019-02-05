import Icon from './src/basic/icon/index.js'
import Button from './src/basic/button/index.js'
import Switch from './src/form/switch/index.js'
import Input from './src/form/input/index.js'
import Cascader from './src/form/cascader/index.js'
import Grid from './src/layout/grid/index.js'
import Container from './src/layout/container/index.js'
import Collapse from './src/layout/collapse/index.js'
import Tabs from './src/navigation/tabs/index.js'

const components = [
    Icon,
    Button,
    Switch,
    Input,
    Cascader,
    Grid,
    Container,
    Collapse,
    Tabs
]

const install = Vue => {
    components.forEach(component => {
        component.install(Vue)
    })
}
export default {install}