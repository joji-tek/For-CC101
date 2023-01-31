const button = document.querySelector('button')
const parent = document.querySelector('#parent')

let isRotate = false

function toggle() {
   isRotate = !isRotate
   parent.setAttribute('data-rotate', isRotate)
}

button.onclick = toggle
