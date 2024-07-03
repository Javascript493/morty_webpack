async function getComponent() {
  // lodash 现在使用 import 引入
  const {default: _} = await import('lodash')
  const element = document.createElement('div');
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  return element;
 }

getComponent().then((component) => {
  document.body.appendChild(component);
});