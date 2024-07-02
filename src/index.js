import _ from 'lodash'
import './style.css'
import Icon from './icon.png'
import Data from './data.xml'
import Notes from './data.csv'
import Tomal from './data.toml'
import Yaml from './data.yaml'
import Json5 from './data.json5'
function component() {
  const element = document.createElement('div')
  element.innerHTML = _.join(['hello', 'webpack'], ' ')
  element.classList.add('hello')
  const myIcon = new Image()
  myIcon.src = Icon
  element.appendChild(myIcon)
  console.log(Data, 'xml')
  console.log(Notes, 'csv')
  console.log(Tomal, 'Tomal')
  console.log(Yaml, 'Yaml')
  console.log(Json5, 'Json5')
  return element
}
document.body.appendChild(component())