import Col from './col'
import Row from './row'

let Grid = {}

Grid.install = Vue => {
    Vue.component(Col.name, Col)
    Vue.component(Row.name, Row)
}

export default Grid