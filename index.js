import Icon from './src/basic/icon/index.js'
import Button from './src/basic/button/index.js'
import ButtonGroup from './src/basic/button-group/index'
import Switch from './src/form/switch/index.js'
import Input from './src/form/input/index.js'
import Cascader from './src/form/cascader/index.js'
import Grid from './src/layout/grid/index.js'
import Container from './src/layout/container/index.js'
import Collapse from './src/layout/collapse/index.js'
import Tabs from './src/navigation/tabs/index.js'
import Toast from './src/notice/toast/plugin'
import Popover from './src/other/popover/index'

const components = [
    Icon,
    Button,
    ButtonGroup,
    Switch,
    Input,
    Cascader,
    Grid,
    Container,
    Collapse,
    Tabs,
    Toast,
    Popover
]

const install = Vue => {
    components.forEach(component => {
        component.install(Vue)
    })
}
export default {install}