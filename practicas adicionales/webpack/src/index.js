import Background from './background.jpg';

function component() {
  const img = new Image();
  img.src = Background;

  return img;
}

document.body.appendChild(component());