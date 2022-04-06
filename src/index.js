import './index.css';
function b() {
  var d1 = document.getElementById("root");
  var img = document.createElement("img");
  var span = document.createElement('span')
  span.className = 'test'
  span.innerText = 'safasfas'
  img.src = require('@/assets/1.jpeg');
  img.width = 200
  img.height = 200
  d1.appendChild(img);
  d1?.appendChild(span)
  $('.test').css({ background: "blue" })
}
b()
const fn = () => {
  return
}
fn()