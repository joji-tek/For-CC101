const parent = document.querySelector('#parent');

let isRotate = false;

parent.addEventListener('mouseenter', function() {
  isRotate = !isRotate;
  parent.setAttribute('data-rotate', isRotate);
});

parent.addEventListener('mouseleave', function() {
  isRotate = !isRotate;
  parent.setAttribute('data-rotate', isRotate);
});
